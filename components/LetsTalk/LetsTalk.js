import React, { useEffect, useMemo } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import buttonText from '@/assets/images/common-image/button-with-text.svg';
import scheduleCall from '@/assets/images/common-image/schedule-call.svg';
import scheduleProject from '@/assets/images/common-image/schedule-project.svg';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

import Link from 'next/link';
import { useState } from 'react';
import './LetsTalk.scss';
import './LetsTalkResponsive.scss';
import { useForm, Controller } from 'react-hook-form';
import InputErrorMsg from '@/components/InputErrorMsg/InputErrorMsg';
import { sendStartProjectData } from '@/helpers/data_utils';
import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image';

const LetsTalk = ({ settings, projectModalOpen }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        resetField,
    } = useForm();
    const [file, setFile] = useState('');
    const [animate, setAnimate] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const settingsContent = settings?.data?.settingsData?.content ? JSON.parse(settings?.data?.settingsData?.content) : {};
    const services = settings.data.serviceData;

    useMemo(() => {
        setShowModal(projectModalOpen);
        setAnimate(projectModalOpen);
    }, [projectModalOpen]);
    const handleClick = () => {
        setAnimate(!animate);
    };
    const handleModalOpen = () => {
        setShowModal(!showModal);
    };

    const getBase64 = (file) => {
        return new Promise((resolve) => {
            let fileInfo;
            let baseURL = '';
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };
    const handleFile = async (e) => {
        const file = e.target.files[0];
        const base64File = await getBase64(file);
        if (base64File) {
            setFile(base64File);
        }
    };
    const onSubmit = async (data) => {
        const formData = {
            ...data,
            file,
        };

        const result = await sendStartProjectData(formData);
        if (result.status === 200) {
            toast.success('Thank your for contacting us !');
            reset();
        } else {
            toast.error(result?.error?.message);
        }
    };

    return (
        <>
            <div className={animate ? 'consultationHolder active' : 'consultationHolder'}>
                <div className='schCons'>
                    <button href='javascript:void(0);' className='schConsBtn d-flex align-items-center' onClick={handleClick}>
                        <Image height={90} width={90} className={`next-inblock`} src={buttonText.src} alt='' />
                    </button>
                </div>
                <div className={showModal ? 'consultationInnerWrap inactive' : 'consultationInnerWrap'}>
                    <div className='consultationInner'>
                        <h4>What are you waiting for?</h4>
                        <h6>Let's talk</h6>
                        <div className='divider'></div>
                        <div className='w-100'>
                            <a href={`tel:${settingsContent?.phone}`} className='contactItem d-flex align-items-center'>
                                <div className='ciImg'>
                                    <span>
                                        <i className='fas fa-phone-alt'></i>
                                    </span>
                                </div>
                                <div className='ciDesc'>
                                    <p>CLICK HERE TO CALL US</p>
                                </div>
                            </a>
                        </div>

                        <div className='divider'></div>

                        <div className='w-100'>
                            <a href={`mailto:${settingsContent?.emailId}`} className='contactItem d-flex align-items-center'>
                                <div className='ciImg'>
                                    <span>
                                        <i className='far fa-envelope'></i>
                                    </span>
                                </div>
                                <div className='ciDesc'>
                                    <p>click here to Mail us</p>
                                </div>
                            </a>
                        </div>

                        <div className='divider'></div>

                        <div className='w-100'>
                            <a href={settingsContent?.wpNo} target='_blank' className='contactItem d-flex align-items-center'>
                                <div className='ciImg'>
                                    <span>
                                        <i className='fab fa-whatsapp'></i>
                                    </span>
                                </div>
                                <div className='ciDesc'>
                                    <p>click here to chat</p>
                                </div>
                            </a>
                        </div>

                        <div className='divider'></div>

                        <div className='w-100'>
                            <a hhref={settingsContent?.skypeId} target='_blank' className='contactItem d-flex align-items-center'>
                                <div className='ciImg'>
                                    <span>
                                        <i className='fab fa-skype'></i>
                                    </span>
                                </div>
                                <div className='ciDesc'>
                                    <p>click here to Skype</p>
                                </div>
                            </a>
                        </div>

                        <div className='divider'></div>

                        <div className='shiduleBoxWrap d-flex mt-4'>
                            <div className='shiduleBox'>
                                <Link href={'https://calendly.com/aqualeafitsol/30min'}>
                                    <Image height={50} width={50} className={`next-inblock`} src={scheduleCall.src} alt='' /> Schedule a call
                                </Link>
                            </div>

                            <div className='shiduleBox'>
                                <Link href={'javascript:void(0)'} onClick={handleModalOpen}>
                                    <Image height={50} width={50} className={`next-inblock`} src={scheduleProject.src} alt='' />
                                    Start a project
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link href='javascript:void(0)' className='consHolClose' onClick={handleClick}>
                        <i className='fas fa-times'></i>
                    </Link>
                </div>
                <div className={showModal ? 'startProjectInner active' : 'startProjectInner'}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-100 mb-4'>
                            <Link href='javascript:void(0)' className='backBtn' onClick={handleModalOpen}>
                                <MdOutlineKeyboardBackspace /> Back
                            </Link>
                        </div>

                        <div className='w-100 mb-2'>
                            <h4>Need a digital product or a custom solution? We’re all ears!</h4>
                        </div>

                        <div className='form-floating mb-3'>
                            <input
                                type='text'
                                className='form-control applyInput'
                                id='floatingInput'
                                placeholder='Full name'
                                {...register('name', { required: 'Name is required' })}
                            />
                            <label htmlFor='floatingInput'>Full name</label>
                            {errors.name && <InputErrorMsg error={errors.name?.message} />}
                        </div>

                        <div className='form-floating mb-3'>
                            <input
                                type='email'
                                className='form-control applyInput'
                                id='floatingInput'
                                placeholder='name@example.com'
                                {...register('email', { required: 'Email is required' })}
                            />
                            <label htmlFor='floatingInput'>Email address</label>
                            {errors.email && <InputErrorMsg error={errors.email?.message} />}
                        </div>
                        <div className='form-floating mb-3'>
                            <Controller
                                name='phone'
                                control={control}
                                render={({ field }) => <PhoneInput {...field} className='form-control applyInput' country={'in'} enableSearch={true} />}
                                rules={{ required: 'Phone is required' }}
                            />

                            <label htmlFor='floatingInput'>
                                <strong>Contact No</strong>
                            </label>
                            {errors.phone && <InputErrorMsg error={errors.phone?.message} />}
                        </div>

                        <div className='form-floating mb-3'>
                            <select
                                className='form-select'
                                id='floatingSelect'
                                aria-label='Floating label select example'
                                {...register('services', { required: 'Services is required' })}
                            >
                                <option value={''} selected>
                                    --Select--
                                </option>
                                {services?.map((val, i) => (
                                    <option val={val?.serviceName}>{val?.serviceName}</option>
                                ))}
                            </select>
                            <label htmlFor='floatingSelect'>Services</label>
                            {errors.services && <InputErrorMsg error={errors.services?.message} />}
                        </div>
                        <div className='form-floating mb-3'>
                            <select
                                className='form-select'
                                id='floatingSelect'
                                aria-label='Floating label select example'
                                {...register('budget', { required: 'Budget is required' })}
                            >
                                <option value={''} selected>
                                    --Select--
                                </option>
                                <option value={'I am not sure'}>I am not sure</option>
                                <option value={'Less than 500 USD'}>Less than 500 USD</option>
                                <option value={'500 USD TO 750 USD'}>500 USD TO 750 USD</option>
                                <option value={'750 USD TO 1500 USD'}>750 USD TO 1500 USD</option>
                                <option value={'1500 USD TO 5000 USD'}>1500 USD TO 5000 USD</option>
                                <option value={'5000 USD TO 10000 USD'}>5000 USD TO 10000 USD</option>
                                <option value={'MORE THAN 10000 USD'}>MORE THAN 10000 USD</option>
                            </select>
                            <label htmlFor='floatingSelect'>Budget</label>
                            {errors.budget && <InputErrorMsg error={errors.budget?.message} />}
                        </div>
                        <div className='form-floating mb-3'>
                            <textarea
                                className='form-control applyInput'
                                style={{ resize: 'none', height: '80px' }}
                                id='floatingInput'
                                placeholder='Interested In'
                                {...register('interested_in', { required: 'This is required' })}
                            />
                            <label htmlFor='floatingInput'>Brief Description about your project </label>
                            {errors.interested_in && <InputErrorMsg error={errors.interested_in?.message} />}
                        </div>

                        <div className='file-upload mb-3'>
                            <div className='file-select'>
                                <div className='file-select-button' id='fileName'>
                                    Choose File
                                </div>
                                <div className='file-select-name' id='noFile'>
                                    No file chosen...
                                </div>
                                <input type='file' name='chooseFile' id='chooseFile' onChange={handleFile} />
                            </div>
                        </div>

                        <div className='relative'>
                            <button type='submit' class='sendBtn'>
                                <span>Send</span>
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
