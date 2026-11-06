
import React, { useEffect, useState, useRef } from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import buttonText from '@/assets/images/common-image/button-with-text.svg';
import scheduleCall from '@/assets/images/common-image/schedule-call.svg';
import scheduleProject from '@/assets/images/common-image/schedule-project.svg';

import { MdOutlineKeyboardBackspace } from 'react-icons/md';

import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import { useRouter } from 'next/router';

import './LetsTalk.scss';
import './LetsTalkResponsive.scss';

import { useForm, Controller } from 'react-hook-form';
import InputErrorMsg from '@/components/InputErrorMsg/InputErrorMsg';

import { sendStartProjectData } from '@/helpers/data_utils';

import { ToastContainer, toast } from 'react-toastify';

const LetsTalk = ({ settings, projectModalOpen }) => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        control,
    } = useForm({
        defaultValues: {
            website: '',
        },
    });

    const [file, setFile] = useState('');
    const [animate, setAnimate] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Turnstile states
    const [turnstileReady, setTurnstileReady] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState('');

    const turnstileContainerRef = useRef(null);
    const turnstileWidgetIdRef = useRef(null);

    const settingsContent = settings?.data?.settingsData?.content
        ? JSON.parse(settings.data.settingsData.content)
        : {};

    const services = settings?.data?.serviceData || [];

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    // Sync modal with parent component
    useEffect(() => {
        if (projectModalOpen) {
            setShowModal(true);
            setAnimate(true);
        }
    }, [projectModalOpen]);

    // Load and render Turnstile only when modal is open
    useEffect(() => {
        if (!showModal || !turnstileReady) {
            return;
        }

        if (!siteKey) {
            console.error('Turnstile Site Key is missing');
            return;
        }

        let cancelled = false;
        let timer = null;

        const renderWidget = () => {
            if (cancelled) return;

            if (!turnstileContainerRef.current) {
                timer = setTimeout(renderWidget, 100);
                return;
            }

            if (!window.turnstile) {
                timer = setTimeout(renderWidget, 100);
                return;
            }

            if (turnstileWidgetIdRef.current !== null) {
                return;
            }

            try {
                turnstileContainerRef.current.innerHTML = '';

                const widgetId = window.turnstile.render(
                    turnstileContainerRef.current,
                    {
                        sitekey: siteKey,
                        action: 'start_project',
                        theme: 'light',

                        callback: (token) => {
                            console.log(
                                'Start Project Turnstile token received'
                            );

                            setTurnstileToken(token);
                        },

                        'expired-callback': () => {
                            console.warn('Turnstile token expired');
                            setTurnstileToken('');
                        },

                        'error-callback': (errorCode) => {
                            console.error(
                                'Turnstile error:',
                                errorCode
                            );

                            setTurnstileToken('');

                            toast.error(
                                'Security verification failed. Please try again.'
                            );
                        },
                    }
                );

                turnstileWidgetIdRef.current = widgetId;

                console.log(
                    'Start Project Turnstile widget rendered:',
                    widgetId
                );

            } catch (error) {
                console.error(
                    'Turnstile rendering error:',
                    error
                );

                timer = setTimeout(renderWidget, 500);
            }
        };

        // Wait briefly for modal layout and widget container
        timer = setTimeout(renderWidget, 100);

        return () => {
            cancelled = true;

            if (timer) {
                clearTimeout(timer);
            }

            if (
                window.turnstile &&
                turnstileWidgetIdRef.current !== null
            ) {
                try {
                    window.turnstile.remove(
                        turnstileWidgetIdRef.current
                    );
                } catch (error) {
                    console.error(
                        'Turnstile remove error:',
                        error
                    );
                }

                turnstileWidgetIdRef.current = null;
            }

            setTurnstileToken('');

            if (turnstileContainerRef.current) {
                turnstileContainerRef.current.innerHTML = '';
            }
        };

    }, [showModal, turnstileReady, siteKey]);

    // Reset Turnstile after submission
    const resetTurnstile = () => {
        setTurnstileToken('');

        if (
            window.turnstile &&
            turnstileWidgetIdRef.current !== null
        ) {
            try {
                window.turnstile.reset(
                    turnstileWidgetIdRef.current
                );
            } catch (error) {
                console.error(
                    'Turnstile reset error:',
                    error
                );
            }
        }
    };

    // Open/close consultation panel
    const handleClick = () => {
        setAnimate((previous) => !previous);
    };

    // Open/close Start Project modal
    const handleModalOpen = () => {
        setShowModal((previous) => !previous);
        setTurnstileToken('');
    };

    // Convert file to Base64
    const getBase64 = (selectedFile) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.readAsDataURL(selectedFile);

            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    // Handle file upload
    const handleFile = async (e) => {
        const selectedFile = e.target.files?.[0];

        if (!selectedFile) {
            setFile('');
            return;
        }

        try {
            const base64File = await getBase64(selectedFile);

            if (base64File) {
                setFile(base64File);
            }
        } catch (error) {
            console.error('File conversion error:', error);
            toast.error('Unable to read the selected file.');
        }
    };

    // Submit Start Project form
    const onSubmit = async (data) => {
        try {
            if (!turnstileToken) {
                toast.error(
                    'Please complete the security verification.'
                );
                return;
            }

            const formData = {
                ...data,
                file,
                turnstileToken,
            };

            console.log('Start Project submission:', {
                tokenExists: !!turnstileToken,
                tokenLength: turnstileToken.length,
            });

            const result = await sendStartProjectData(formData);

            if (result?.status === 200) {
                reset();
                setFile('');

                resetTurnstile();

                await router.push({
                    pathname: '/thankyou',
                    query: {
                        type: 'project',
                    },
                });
            } else {
                toast.error(
                    result?.error?.message ||
                    'Something went wrong. Please try again.'
                );

                resetTurnstile();
            }

        } catch (error) {
            console.error(
                'Start Project submission error:',
                error
            );

            toast.error(
                'Unable to submit your request. Please try again.'
            );

            resetTurnstile();
        }
    };

    return (
        <>
            {/* Cloudflare Turnstile script - load once */}
            <Script
                id="cloudflare-turnstile-script"
                src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                strategy="afterInteractive"
                onReady={() => {
                    console.log('Cloudflare Turnstile script ready');
                    setTurnstileReady(true);
                }}
                onError={(error) => {
                    console.error(
                        'Turnstile script loading failed:',
                        error
                    );

                    toast.error(
                        'Unable to load security verification.'
                    );
                }}
            />

            <div
                className={
                    animate
                        ? 'consultationHolder active'
                        : 'consultationHolder'
                }
            >
                <div className="schCons">
                    <button
                        type="button"
                        className="schConsBtn d-flex align-items-center"
                        onClick={handleClick}
                    >
                        <Image
                            height={90}
                            width={90}
                            className="next-inblock"
                            src={buttonText.src}
                            alt=""
                        />
                    </button>
                </div>

                {/* Consultation panel */}
                <div
                    className={
                        showModal
                            ? 'consultationInnerWrap inactive'
                            : 'consultationInnerWrap'
                    }
                >
                    <div className="consultationInner">
                        <h4>What are you waiting for?</h4>
                        <h6>Let's talk</h6>

                        <div className="divider"></div>

                        <div className="w-100">
                            <a
                                href={`tel:${settingsContent?.phone || ''}`}
                                className="contactItem d-flex align-items-center"
                            >
                                <div className="ciImg">
                                    <span>
                                        <i className="fas fa-phone-alt"></i>
                                    </span>
                                </div>

                                <div className="ciDesc">
                                    <p>CLICK HERE TO CALL US</p>
                                </div>
                            </a>
                        </div>

                        <div className="divider"></div>

                        <div className="w-100">
                            <a
                                href={`mailto:${settingsContent?.emailId || ''}`}
                                className="contactItem d-flex align-items-center"
                            >
                                <div className="ciImg">
                                    <span>
                                        <i className="far fa-envelope"></i>
                                    </span>
                                </div>

                                <div className="ciDesc">
                                    <p>click here to Mail us</p>
                                </div>
                            </a>
                        </div>

                        <div className="divider"></div>

                        <div className="w-100">
                            <a
                                href={settingsContent?.wpNo || '#'}
                                target="_blank"
                                rel="noreferrer"
                                className="contactItem d-flex align-items-center"
                            >
                                <div className="ciImg">
                                    <span>
                                        <i className="fab fa-whatsapp"></i>
                                    </span>
                                </div>

                                <div className="ciDesc">
                                    <p>click here to chat</p>
                                </div>
                            </a>
                        </div>

                        <div className="divider"></div>

                        <div className="w-100">
                            <a
                                href="https://teams.live.com/l/chat/0/0?users=eshaan789@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="contactItem d-flex align-items-center"
                            >
                                <div className="ciImg">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 48 48"
                                            style={{
                                                marginRight: '6px',
                                                verticalAlign: 'middle',
                                            }}
                                        >
                                            <circle cx="31" cy="13" r="6" fill="currentColor" opacity="0.45" />
                                            <circle cx="40" cy="16" r="4.5" fill="currentColor" opacity="0.8" />
                                            <path fill="currentColor" opacity="0.45" d="M20 22h14a4 4 0 0 1 4 4v8c0 6-5 11-11 11s-11-5-11-11v-8a4 4 0 0 1 4-4z" />
                                            <path fill="currentColor" opacity="0.8" d="M32 22h8a4 4 0 0 1 4 4v6c0 5-4 9-9 9h-3z" />
                                            <rect x="4" y="17" width="18" height="18" rx="2" fill="currentColor" />
                                            <path fill="#fff" d="M10 22v3h4v8h3v-8h4v-3z" />
                                        </svg>
                                    </span>
                                </div>

                                <div className="ciDesc">
                                    <p>click here to Teams</p>
                                </div>
                            </a>
                        </div>

                        <div className="divider"></div>

                        <div className="shiduleBoxWrap d-flex mt-4">
                            <div className="shiduleBox">
                                <Link href="/book-appointment">
                                    <Image
                                        height={50}
                                        width={50}
                                        className="next-inblock"
                                        src={scheduleCall.src}
                                        alt=""
                                    />
                                    Schedule a call
                                </Link>
                            </div>

                            <div className="shiduleBox">
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleModalOpen();
                                    }}
                                >
                                    <Image
                                        height={50}
                                        width={50}
                                        className="next-inblock"
                                        src={scheduleProject.src}
                                        alt=""
                                    />
                                    Start a project
                                </a>
                            </div>
                        </div>
                    </div>

                    <a
                        href="#"
                        className="consHolClose"
                        onClick={(e) => {
                            e.preventDefault();
                            handleClick();
                        }}
                    >
                        <i className="fas fa-times"></i>
                    </a>
                </div>

                {/* Start Project Form */}
                <div
                    className={
                        showModal
                            ? 'startProjectInner active'
                            : 'startProjectInner'
                    }
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-100 mb-4">
                            <a
                                href="#"
                                className="backBtn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleModalOpen();
                                }}
                            >
                                <MdOutlineKeyboardBackspace /> Back
                            </a>
                        </div>

                        <div className="w-100 mb-2">
                            <h4>
                                Need a digital product or a custom solution?
                                We’re all ears!
                            </h4>
                        </div>

                        {/* Honeypot */}
                        <div
                            aria-hidden="true"
                            style={{
                                position: 'absolute',
                                left: '-9999px',
                                width: '1px',
                                height: '1px',
                                overflow: 'hidden',
                            }}
                        >
                            <input
                                type="text"
                                tabIndex={-1}
                                autoComplete="off"
                                {...register('website')}
                            />
                        </div>

                        {/* Full Name */}
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control applyInput"
                                id="projectName"
                                placeholder="Full name"
                                {...register('name', {
                                    required: 'Name is required',
                                })}
                            />

                            <label htmlFor="projectName">
                                Full name
                            </label>

                            {errors.name && (
                                <InputErrorMsg error={errors.name.message} />
                            )}
                        </div>

                        {/* Email */}
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control applyInput"
                                id="projectEmail"
                                placeholder="name@example.com"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                                        message: 'Please enter a valid email address',
                                    },
                                })}
                            />

                            <label htmlFor="projectEmail">
                                Email address
                            </label>

                            {errors.email && (
                                <InputErrorMsg error={errors.email.message} />
                            )}
                        </div>

                        {/* Phone */}
                        <div className="form-floating mb-3">
                            <Controller
                                name="phone"
                                control={control}
                                rules={{
                                    required: 'Phone No is required',
                                    validate: (value) => {
                                        if (!value) {
                                            return 'Phone No is required';
                                        }

                                        const phoneNumber = value.replace(/\D/g, '');

                                        if (
                                            phoneNumber.length < 7 ||
                                            phoneNumber.length > 15
                                        ) {
                                            return 'Please enter a valid phone number';
                                        }

                                        return true;
                                    },
                                }}
                                render={({ field }) => (
                                    <PhoneInput
                                        {...field}
                                        className="form-control applyInput"
                                        country="in"
                                        enableSearch={true}
                                    />
                                )}
                            />

                            <label htmlFor="projectPhone">
                                <strong>Contact No</strong>
                            </label>

                            {errors.phone && (
                                <InputErrorMsg error={errors.phone.message} />
                            )}
                        </div>

                        {/* Services */}
                        <div className="form-floating mb-3">
                            <select
                                className="form-select"
                                id="projectServices"
                                defaultValue=""
                                {...register('services', {
                                    required: 'Services is required',
                                })}
                            >
                                <option value="">--Select--</option>

                                {services.map((val, i) => (
                                    <option
                                        key={val?.serviceName || i}
                                        value={val?.serviceName}
                                    >
                                        {val?.serviceName}
                                    </option>
                                ))}
                            </select>

                            <label htmlFor="projectServices">
                                Services
                            </label>

                            {errors.services && (
                                <InputErrorMsg error={errors.services.message} />
                            )}
                        </div>

                        {/* Budget */}
                        <div className="form-floating mb-3">
                            <select
                                className="form-select"
                                id="projectBudget"
                                defaultValue=""
                                {...register('budget', {
                                    required: 'Budget is required',
                                })}
                            >
                                <option value="">--Select--</option>
                                <option value="I am not sure">I am not sure</option>
                                <option value="Less than 500 USD">Less than 500 USD</option>
                                <option value="500 USD TO 750 USD">500 USD TO 750 USD</option>
                                <option value="750 USD TO 1500 USD">750 USD TO 1500 USD</option>
                                <option value="1500 USD TO 5000 USD">1500 USD TO 5000 USD</option>
                                <option value="5000 USD TO 10000 USD">5000 USD TO 10000 USD</option>
                                <option value="MORE THAN 10000 USD">MORE THAN 10000 USD</option>
                            </select>

                            <label htmlFor="projectBudget">
                                Budget
                            </label>

                            {errors.budget && (
                                <InputErrorMsg error={errors.budget.message} />
                            )}
                        </div>

                        {/* Project Description */}
                        <div className="form-floating mb-3">
                            <textarea
                                className="form-control applyInput"
                                style={{
                                    resize: 'none',
                                    height: '80px',
                                }}
                                id="projectDescription"
                                placeholder="Interested In"
                                {...register('interested_in', {
                                    required: 'This is required',
                                })}
                            />

                            <label htmlFor="projectDescription">
                                Brief Description about your project
                            </label>

                            {errors.interested_in && (
                                <InputErrorMsg error={errors.interested_in.message} />
                            )}
                        </div>

                        {/* File Upload */}
                        <div className="file-upload mb-3">
                            <div className="file-select">
                                <div
                                    className="file-select-button"
                                    id="fileName"
                                >
                                    Choose File
                                </div>

                                <div
                                    className="file-select-name"
                                    id="noFile"
                                >
                                    No file chosen...
                                </div>

                                <input
                                    type="file"
                                    name="chooseFile"
                                    id="chooseFile"
                                    onChange={handleFile}
                                />
                            </div>
                        </div>

                        {/* Turnstile widget */}
                        <div className="form-group mb-3">
                            <div
                                ref={turnstileContainerRef}
                                id="start-project-turnstile"
                            ></div>

                            {!turnstileToken && showModal && (
                                <small>
                                    Complete the security verification to submit.
                                </small>
                            )}
                        </div>

                        {/* Submit */}
                        <div className="relative">
                            <button
                                type="submit"
                                className="sendBtn"
                                disabled={
                                    isSubmitting ||
                                    !turnstileToken
                                }
                            >
                                <span>
                                    {isSubmitting ? 'Submitting...' : 'Send'}
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default LetsTalk;