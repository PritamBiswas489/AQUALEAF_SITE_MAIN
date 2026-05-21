import React, { useState, useEffect } from 'react';
import './HomeTestimonials.scss';
import './HomeTestimonialsResponsive.scss';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import scheduale from '@/assets/images/common-image/scheduale.jpg';
import google from '@/assets/images/common-image/google-icon.png';
const EqualHeight = dynamic(() => import('react-equal-height').then((res) => res.EqualHeight), { ssr: false });
const EqualHeightElement = dynamic(() => import('react-equal-height').then((res) => res.EqualHeightElement), { ssr: false });
import config from '@/helpers/config';
import Image from 'next/image';
import parse from 'html-react-parser';
const { REACT_APP_RESOURCE_URL } = config();

const HomeTestimonials = ({ testimonialData }) => {
    const options = {
        smartSpeed: 1200,
        margin: 50,
        nav: true,
        dots: false,
        items: 2,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            768: {
                items: 2,
            },
        },
    };
    return (
        <>
            <section className='relative testimonials'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <EqualHeight>
                                <OwlCarousel className='owl-theme testimonialsSlider' {...options}>
                                    {testimonialData.length > 0 && (
                                        <>
                                            {testimonialData.map((val, i) => (
                                                <div className='item' key={i}>
                                                    <div className='testiContent'>
                                                        <div className='headIcon'>
                                                            <Image height={80} width={80} className={`next-img`} src={val?.Logo?.img ? `${REACT_APP_RESOURCE_URL}/${val?.Logo?.img}` : google.src} alt='logo' />
                                                        </div>
                                                        <EqualHeightElement>
                                                            <p>{parse(val?.description ??
                                                                        `Getweb is the best software development company we’ve worked with so far. Unlike many developers, they understand UI/UX design on a fundamental
																level and create a smooth user journey no matter the technical difficulties. Highly recommended if you want your digital solution highly
																innovative and impactful!`)}</p>
                                                        </EqualHeightElement>
                                                        <div className='d-flex flex-wrap justify-content-between align-items-center'>
                                                            <ul className='d-flex align-items-center'>
                                                                <li className='clintImg'>
                                                                    <span>
                                                                        <Image height={80} width={80} className={`next-img`} src={val?.avatar ? `${REACT_APP_RESOURCE_URL}/${val?.avatar}` : scheduale.src} alt='avatar' />
                                                                    </span>
                                                                </li>
                                                                <li className='clintInfo'>
                                                                    <h5>{parse(val?.clientName ?? `Jacob Eiting`)}</h5>
                                                                    <h6>{parse(val?.clientDesignation ?? `CEO & Co-Founder`)}</h6>
                                                                </li>
                                                            </ul>
                                                            <div className='link_wrap'>
                                                                <a className='link_text' target={'_blank'} href={val?.projectLink} rel='noreferrer'>
                                                                    View Project
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </OwlCarousel>
                            </EqualHeight>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeTestimonials;
