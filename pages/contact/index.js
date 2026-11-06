
import React, {
    useState,
    useEffect,
    useCallback,
    useRef
} from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

import InputErrorMsg from '@/components/InputErrorMsg/InputErrorMsg';
import Container from '@/containers/Container';

import contactBanner from '@/assets/images/common-image/contact-banner.png';
import direction from '@/assets/images/common-image/direction.png';

import { BsEnvelopeFill } from 'react-icons/bs';
import { IoMdCall, IoLogoWhatsapp } from 'react-icons/io';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import config from '@/helpers/config';
import { SettingsContent, sendContactData } from '@/helpers/data_utils';

import './Contact.scss';
import './ContactResponsive.scss';

const { REACT_APP_RESOURCE_URL } = config();

const MAX_ATTACHMENT_SIZE = 5 * 1024 * 1024;

function ContactUsPage(props) {
    const router = useRouter();

    // Google reCAPTCHA v3
    const { executeRecaptcha } = useGoogleReCaptcha();

    // Cloudflare Turnstile
    const [turnstileReady, setTurnstileReady] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState('');
    const [turnstileError, setTurnstileError] = useState(false);

    const turnstileContainerRef = useRef(null);
    const turnstileWidgetIdRef = useRef(null);

    const settingsContent = JSON.parse(
        props.settingsContent.data.settingsData.content
    );

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

    // --------------------------------------------------
    // Cloudflare Turnstile initialization
    // --------------------------------------------------

    useEffect(() => {
        if (!turnstileReady) return;

        let cancelled = false;
        let timeoutId = null;
        let attempts = 0;

        const renderTurnstile = () => {
            if (cancelled) return;

            // Wait until Cloudflare API and container are ready
            if (
                typeof window === 'undefined' ||
                !window.turnstile ||
                !turnstileContainerRef.current
            ) {
                attempts++;

                if (attempts < 50) {
                    timeoutId = setTimeout(renderTurnstile, 200);
                } else {
                    console.error(
                        'Cloudflare Turnstile API did not become available.'
                    );

                    setTurnstileError(true);

                    toast.error(
                        'Security verification could not load. Please refresh the page.'
                    );
                }

                return;
            }

            // Avoid rendering multiple widgets
            if (turnstileWidgetIdRef.current !== null) {
                return;
            }

            const siteKey =
                process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

            if (!siteKey) {
                console.error(
                    'NEXT_PUBLIC_TURNSTILE_SITE_KEY is missing.'
                );

                setTurnstileError(true);

                toast.error(
                    'Security verification configuration is missing.'
                );

                return;
            }

            try {
                setTurnstileError(false);

                turnstileWidgetIdRef.current =
                    window.turnstile.render(
                        turnstileContainerRef.current,
                        {
                            sitekey: siteKey,
                            action: 'contact_form',

                            callback: (token) => {
                                setTurnstileToken(token);
                                setTurnstileError(false);
                            },

                            'expired-callback': () => {
                                setTurnstileToken('');
                            },

                            'error-callback': (errorCode) => {
                                console.error(
                                    'Turnstile error:',
                                    errorCode
                                );

                                setTurnstileToken('');
                                setTurnstileError(true);

                                toast.error(
                                    'Cloudflare verification failed. Please try again.'
                                );
                            },

                            'timeout-callback': () => {
                                setTurnstileToken('');
                            },
                        }
                    );

                console.log(
                    'Contact form Turnstile rendered successfully.'
                );

            } catch (error) {
                console.error(
                    'Turnstile rendering error:',
                    error
                );

                setTurnstileError(true);

                toast.error(
                    'Unable to load security verification.'
                );
            }
        };

        renderTurnstile();

        return () => {
            cancelled = true;

            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            if (
                typeof window !== 'undefined' &&
                window.turnstile &&
                turnstileWidgetIdRef.current !== null
            ) {
                try {
                    window.turnstile.remove(
                        turnstileWidgetIdRef.current
                    );
                } catch (error) {
                    console.error(
                        'Turnstile cleanup error:',
                        error
                    );
                }

                turnstileWidgetIdRef.current = null;
            }
        };
    }, [turnstileReady]);

    // --------------------------------------------------
    // Reset Turnstile
    // --------------------------------------------------

    const resetTurnstile = useCallback(() => {
        setTurnstileToken('');

        if (
            typeof window !== 'undefined' &&
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
    }, []);

    // --------------------------------------------------
    // Send Contact Form Data
    // --------------------------------------------------

    const sendData = async (formData) => {
        try {
            const result = await sendContactData(formData);

            if (result?.status === 200) {
                reset();

                await router.push({
                    pathname: '/thankyou',
                    query: {
                        type: 'contact',
                    },
                });

                return true;
            }

            toast.error(
                result?.error?.message ||
                'Something went wrong. Please try again.'
            );

            return false;

        } catch (error) {
            console.error(
                'Contact form submission error:',
                error
            );

            toast.error(
                'Unable to submit your request. Please try again.'
            );

            return false;
        }
    };

    // --------------------------------------------------
    // Contact Form Submit
    // --------------------------------------------------

    const onSubmit = useCallback(
        async (data) => {
            try {
                // Check Google reCAPTCHA v3
                if (!executeRecaptcha) {
                    toast.error(
                        'Google security verification is not ready. Please try again.'
                    );

                    return;
                }

                // Check Cloudflare Turnstile
                if (!turnstileToken) {
                    toast.error(
                        'Please complete the Cloudflare security verification.'
                    );

                    return;
                }

                // Generate Google reCAPTCHA token
                const googleToken = await executeRecaptcha(
                    'enquiryFormSubmit'
                );

                if (!googleToken) {
                    toast.error(
                        'Google reCAPTCHA verification failed. Please try again.'
                    );

                    return;
                }

                const attachment = data.attachment?.[0];

                // Prepare form payload
                const formData = {
                    ...data,
                    token: googleToken,
                    turnstileToken: turnstileToken,
                };

                // Remove original FileList
                delete formData.attachment;

                // Convert attachment to Base64
                if (attachment) {
                    const attachmentBuffer =
                        await attachment.arrayBuffer();

                    const attachmentBytes =
                        new Uint8Array(attachmentBuffer);

                    let attachmentBinary = '';

                    // Convert bytes in chunks to avoid
                    // exceeding the function argument limit
                    const chunkSize = 0x8000;

                    for (
                        let i = 0;
                        i < attachmentBytes.length;
                        i += chunkSize
                    ) {
                        const chunk = attachmentBytes.subarray(
                            i,
                            i + chunkSize
                        );

                        attachmentBinary += String.fromCharCode(
                            ...chunk
                        );
                    }

                    formData.attachment = {
                        filename: attachment.name,
                        content: btoa(attachmentBinary),
                        size: attachment.size,
                    };
                }

                // Submit to backend
                await sendData(formData);

            } catch (error) {
                console.error(
                    'Contact form error:',
                    error
                );

                toast.error(
                    'Something went wrong. Please try again.'
                );

            } finally {
                // CAPTCHA tokens must not be reused
                resetTurnstile();
            }
        },
        [
            executeRecaptcha,
            turnstileToken,
            resetTurnstile
        ]
    );

    // --------------------------------------------------
    // Page UI
    // --------------------------------------------------

    return (
        <>
            <Head>
                <title>
                    Contact Aqualeaf IT Solutions - Digital Marketing,
                    Advertising & IT Services
                </title>

                <meta
                    name="description"
                    content="Contact Aqualeaf IT Solutions for innovative digital marketing, advertising, & IT services that help businesses increase brand awareness & revenue. Contact us now!"
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Load Cloudflare script once */}
            <Script
                id="cloudflare-turnstile-script"
                src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                strategy="afterInteractive"
                onReady={() => {
                    console.log(
                        'Cloudflare Turnstile script loaded.'
                    );

                    setTurnstileReady(true);
                }}
                onError={(error) => {
                    console.error(
                        'Cloudflare script loading error:',
                        error
                    );

                    setTurnstileError(true);

                    toast.error(
                        'Unable to load security verification. Please refresh the page.'
                    );
                }}
            />

            <section className="contactBanner">
                <Image
                    height={800}
                    width={1200}
                    className="next-img"
                    src={contactBanner.src}
                    alt="contact banner img"
                />
            </section>

            <section className="contactFormArea">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <div className="cnFrmTitle text-center">
                                <h2>Little about you</h2>

                                <p>
                                    For general queries fill this form or
                                    have a look at end of the page for more
                                    options.
                                </p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="address relative">
                                <h4>
                                    Aqualeaf IT Solutions Private Limited
                                </h4>

                                <p>
                                    AD 218, Sector 1,
                                    <br />
                                    Near AD Park,
                                    <br />
                                    Saltlake City,
                                    <br />
                                    Kolkata 700064,
                                    <br />
                                    West Bengal,
                                    <br />
                                    India.
                                </p>

                                <a
                                    href="https://goo.gl/maps/WgGxuRd1ADqQzEUc7"
                                    target="_blank"
                                    className="getDirection"
                                    rel="noreferrer"
                                >
                                    <Image
                                        height={40}
                                        width={40}
                                        className="next-inblock"
                                        src={direction.src}
                                        alt="direction"
                                    />

                                    GET DIRECTION
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="cntForm">

                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    noValidate
                                >
                                    <div className="row">

                                        <div className="col-md-12">

                                            {/* Name */}
                                            <div className="form-group">
                                                <input
                                                    id="contactName"
                                                    type="text"
                                                    placeholder="Name"
                                                    className="form-control"
                                                    {...register('name', {
                                                        required: 'Name is required',
                                                    })}
                                                />

                                                <i className="fa fa-star" />

                                                {errors.name && (
                                                    <InputErrorMsg
                                                        error={errors.name.message}
                                                    />
                                                )}
                                            </div>

                                            {/* Phone */}
                                            <div className="form-floating mb-3">
                                                <Controller
                                                    name="ph_no"
                                                    control={control}
                                                    rules={{
                                                        required: 'Phone No is required',

                                                        validate: (value) => {
                                                            if (!value) {
                                                                return 'Phone No is required';
                                                            }

                                                            const phoneNumber =
                                                                value.replace(/\D/g, '');

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

                                                <label htmlFor="floatingInput">
                                                    <strong>Contact No</strong>
                                                </label>

                                                {errors.ph_no && (
                                                    <InputErrorMsg
                                                        error={errors.ph_no.message}
                                                    />
                                                )}
                                            </div>

                                            {/* Honeypot */}
                                            <div
                                                aria-hidden="true"
                                                style={{
                                                    position: 'absolute',
                                                    left: '-9999px',
                                                    top: 'auto',
                                                    width: '1px',
                                                    height: '1px',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <input
                                                    type="text"
                                                    id="website"
                                                    autoComplete="off"
                                                    tabIndex={-1}
                                                    {...register('website')}
                                                />
                                            </div>

                                            {/* Email */}
                                            <div className="form-group">
                                                <input
                                                    id="contactEmail"
                                                    type="text"
                                                    placeholder="Email"
                                                    className="form-control"
                                                    {...register('email', {
                                                        required: 'Email is required',

                                                        pattern: {
                                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                                                            message: 'Please enter a valid email address',
                                                        },
                                                    })}
                                                />

                                                <i className="fa fa-star" />

                                                {errors.email && (
                                                    <InputErrorMsg
                                                        error={errors.email.message}
                                                    />
                                                )}
                                            </div>

                                        </div>

                                        <div className="col-md-12">

                                            {/* Message */}
                                            <div className="form-group">
                                                <label>
                                                    Write your message here
                                                </label>

                                                <textarea
                                                    id="contactMessage"
                                                    className="form-control"
                                                    placeholder="Please write your message in this box"
                                                    {...register('message', {
                                                        required: 'Message is required',
                                                    })}
                                                />

                                                {errors.message && (
                                                    <InputErrorMsg
                                                        error={errors.message.message}
                                                    />
                                                )}
                                            </div>

                                            {/* Attachment */}
                                            <div className="form-group">
                                                <label htmlFor="contactAttachment">
                                                    Attachment
                                                </label>

                                                <input
                                                    id="contactAttachment"
                                                    type="file"
                                                    className="form-control"
                                                    {...register('attachment', {
                                                        validate: (files) =>
                                                            !files?.[0] ||
                                                            files[0].size <= MAX_ATTACHMENT_SIZE ||
                                                            'Attachment must be 5 MB or smaller',
                                                    })}
                                                />

                                                {errors.attachment && (
                                                    <InputErrorMsg
                                                        error={errors.attachment.message}
                                                    />
                                                )}
                                            </div>

                                            {/* Cloudflare Turnstile */}
                                            <div className="form-group">

                                                <div
                                                    ref={turnstileContainerRef}
                                                    className="turnstile-container"
                                                />

                                                {turnstileError && (
                                                    <p
                                                        style={{
                                                            color: 'red',
                                                            fontSize: '13px',
                                                            marginTop: '5px',
                                                        }}
                                                    >
                                                        Security verification could not load.
                                                        Please refresh the page.
                                                    </p>
                                                )}

                                            </div>

                                            {/* Submit */}
                                            <div className="form-group mb-0">
                                                <ul className="d-flex align-items-center justify-content-between">
                                                    <li>
                                                        <button
                                                            type="submit"
                                                            className="sendBtn"
                                                            disabled={
                                                                isSubmitting ||
                                                                !turnstileToken
                                                            }
                                                        >
                                                            <span>
                                                                {isSubmitting
                                                                    ? 'Submitting...'
                                                                    : 'Send'}
                                                            </span>
                                                        </button>

                                                        <ToastContainer />
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                        {/* Direct Contact */}
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12 odr1">
                            <div className="connectUs">

                                <h3>Connect with us directly</h3>

                                <p>
                                    You can also contact us via Email or Phone
                                </p>

                                <ul>
                                    <li>
                                        <a
                                            href={`mailto:${settingsContent?.emailId}`}
                                        >
                                            <BsEnvelopeFill /> Email
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href={`tel:${settingsContent?.phone}`}
                                        >
                                            <IoMdCall /> Phone
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href={settingsContent?.skypeId}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 48 48"
                                                style={{
                                                    marginRight: '6px',
                                                    verticalAlign: 'middle'
                                                }}
                                            >
                                                <circle
                                                    cx="31"
                                                    cy="13"
                                                    r="6"
                                                    fill="currentColor"
                                                    opacity="0.45"
                                                />

                                                <circle
                                                    cx="40"
                                                    cy="16"
                                                    r="4.5"
                                                    fill="currentColor"
                                                    opacity="0.8"
                                                />

                                                <path
                                                    fill="currentColor"
                                                    opacity="0.45"
                                                    d="M20 22h14a4 4 0 0 1 4 4v8c0 6-5 11-11 11s-11-5-11-11v-8a4 4 0 0 1 4-4z"
                                                />

                                                <path
                                                    fill="currentColor"
                                                    opacity="0.8"
                                                    d="M32 22h8a4 4 0 0 1 4 4v6c0 5-4 9-9 9h-3z"
                                                />

                                                <rect
                                                    x="4"
                                                    y="17"
                                                    width="18"
                                                    height="18"
                                                    rx="2"
                                                    fill="currentColor"
                                                />

                                                <path
                                                    fill="#fff"
                                                    d="M10 22v3h4v8h3v-8h4v-3z"
                                                />
                                            </svg>

                                            Teams
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href={settingsContent?.wpNo}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <IoLogoWhatsapp /> WhatsApp
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Project Work */}
            <section className="projectWork">
                <div className="container">
                    <div className="row g-4">

                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="enqCon">

                                <h3>Start a project</h3>

                                <p>
                                    Looking to discuss a project with us?
                                </p>

                                <Link
                                    href="/contact"
                                    onClick={(event) => {
                                        event.preventDefault();

                                        props.onClick?.();
                                    }}
                                >
                                    ENQUIRY
                                </Link>

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="enqCon">

                                <h3>Work with us</h3>

                                <p>
                                    Do you want to join our tribe?
                                </p>

                                <Link href="/career">
                                    CAREERS
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <ToastContainer />
        </>
    );
}

export default Container(ContactUsPage);

export async function getStaticProps() {
    return {
        props: {
            settingsContent: await SettingsContent(),
        },

        revalidate: config().revalidate,
    };
}
