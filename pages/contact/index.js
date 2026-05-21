import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InputErrorMsg from '@/components/InputErrorMsg/InputErrorMsg';
import './Contact.scss';
import './ContactResponsive.scss';
import { useForm } from 'react-hook-form';
import contactBanner from '@/assets/images/common-image/contact-banner.png';
import captcha from '@/assets/images/common-image/captcha.gif';
import direction from '@/assets/images/common-image/direction.png';
import { BsEnvelopeFill } from 'react-icons/bs';
import { IoMdCall } from 'react-icons/io';
import { IoLogoSkype, IoLogoWhatsapp } from 'react-icons/io';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '@/helpers/config';
const { REACT_APP_RESOURCE_URL, REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY } = config();
import Container from '@/containers/Container';
import { SettingsContent, sendContactData } from '@/helpers/data_utils';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

function ContactUsPage(props) {
    const [token, setToken] = useState('');

    const settingsContent = JSON.parse(props.settingsContent.data.settingsData.content);
    const { executeRecaptcha } = useGoogleReCaptcha();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        resetField,
    } = useForm();

    const onSubmit = useCallback(
        async (data) => {
            if (!executeRecaptcha) {
                toast.error('Execute recaptcha not yet available');
                return;
            }
            executeRecaptcha('enquiryFormSubmit').then((gReCaptchaToken) => {
                const formData = {
                    ...data,
                    token: gReCaptchaToken,
                };
                sendData(formData);
            });
        },
        [executeRecaptcha]
    );
    const sendData = async (formData) => {
        const result = await sendContactData(formData);
        if (result.status === 200) {
            toast.success('Thank your for contacting us !');
            reset();
        } else {
            toast.error(result?.error?.message);
        }
    };
    return (
        <>
            <Head>
                <title>Contact Aqualeaf IT Solutions - Digital Marketing, Advertising & IT Services</title>
                <meta name='description' content="Contact Aqualeaf IT Solutions for innovative digital marketing, advertising, & IT services that help businesses increase brand awareness & revenue. Contact us now!" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <section className='contactBanner'>
                <Image height={800} width={1200} className={`next-img`} src={contactBanner.src} alt='contact banner img' />
            </section>
            <section className='contactFormArea'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div class='cnFrmTitle text-center'>
                                <h2>Little about you</h2>
                                <p>For general queries fill this form or have a look at end of the page for more options.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                            <div className='address relative'>
                                <h4>Aqualeaf IT Solutions Private Limited </h4>
                                <p>
                                    AD 218 , Sector 1 ,<br />
                                    Near AD Park, <br /> Saltlake City, <br /> Kolkata 700064, <br /> West Bengal, <br /> India.
                                </p>
                                <a href={'https://goo.gl/maps/WgGxuRd1ADqQzEUc7'} target='_blank' className='getDirection' rel='noreferrer'>
                                    <Image height={40} width={40} className={`next-inblock`} src={direction.src} alt='direction' />
                                    GET DIRECTION
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className='cntForm'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='form-group'>
                                                <input
                                                    id='contactName'
                                                    type='text'
                                                    placeholder='Name'
                                                    className='form-control'
                                                    {...register('name', { required: 'Name is required' })}
                                                />
                                                <i className='fa fa-star' />
                                                {errors.name && <InputErrorMsg error={errors.name?.message} />}
                                            </div>
                                            <div className='form-group'>
                                                <input
                                                    id='ph_no'
                                                    type='text'
                                                    placeholder='Phone No'
                                                    className='form-control'
                                                    {...register('ph_no', { required: 'Phone No is required' })}
                                                />
                                                <i className='fa fa-star' />
                                                {errors.ph_no && <InputErrorMsg error={errors.ph_no?.message} />}
                                            </div>
                                            <div className='form-group'>
                                                <input
                                                    id='contactEmail'
                                                    type='text'
                                                    placeholder='Email'
                                                    className='form-control'
                                                    {...register('email', { required: 'Email is required' })}
                                                />
                                                <i className='fa fa-star' />
                                                {errors.email && <InputErrorMsg error={errors.email?.message} />}
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='form-group'>
                                                <label>Write your message here</label>
                                                <textarea
                                                    id='contactMessage'
                                                    className='form-control'
                                                    placeholder='Please write your message in this box'
                                                    {...register('message', { required: 'Message is required' })}
                                                />
                                                {errors.message && <InputErrorMsg error={errors.message?.message} />}
                                            </div>
                                            <div className='form-group mb-0'>
                                                <ul className='d-flex align-items-center justify-content-between'>
                                                    <li>
                                                        <button type='submit' className='sendBtn'>
                                                            <span>Send</span>
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
                        <div className='col-lg-3 col-md-3 col-sm-6 col-12 odr1'>
                            <div className='connectUs'>
                                <h3>Connect with us directly</h3>
                                <p>You can also contact us via Email or Phone</p>
                                <ul>
                                    <li>
                                        <a href={`mailto:${settingsContent?.emailId}`}>
                                            <BsEnvelopeFill /> Email
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`tel:${settingsContent?.phone}`}>
                                            <IoMdCall /> Phone
                                        </a>
                                    </li>
                                    <li>
                                        <a href={settingsContent?.skypeId} target='_blank'>
                                            <IoLogoSkype /> Skype
                                        </a>
                                    </li>
                                    <li>
                                        <a href={settingsContent?.wpNo} target='_blank'>
                                            <IoLogoWhatsapp /> WhatsApp
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='projectWork'>
                <div className='container'>
                    <div className='row g-4'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className='enqCon'>
                                <h3>Start a project</h3>
                                <p>Looking to discuss a project with us?</p>
                                <Link href={'javascript:void(0)'} onClick={props.onClick}>
                                    ENQUIRY
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className='enqCon'>
                                <h3>Work with us</h3>
                                <p>Do you want to join our tribe?</p>
                                <Link href={'/career'}>CAREERS</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Container(ContactUsPage);
export async function getStaticProps({ req, res }) {
    return {
        props: {
            settingsContent: await SettingsContent(),
        },
        revalidate: config().revalidate,
    };
}
