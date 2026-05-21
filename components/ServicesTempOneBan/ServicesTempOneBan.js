import React from 'react';
import './ServicesTempOneBan.scss';
import './ServicesTempOneBanResponsive.scss';
import bgOne from '@/assets/images/common-image/service-one/banner-bg.jpg';

import Link from 'next/link';

import config from '@/helpers/config';
const { REACT_APP_RESOURCE_URL } = config();
import LogoWidget from '@/components/LogoWidget';
import parse from 'html-react-parser';

const ServicesTempOneBan = ({ serviceData, settingsContent }) => {
    return (
        <>
            <section
                className='servicesTempOneBan'
                style={{ background: `url(${serviceData?.banner?.img ? `${REACT_APP_RESOURCE_URL}/${serviceData?.banner?.img}` : bgOne.src})` }}
            >
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-7 col-md-7 col-sm-12 col-12'>
                            <div className='servicesTempOneBanLeft'>
                                <h5>Our Services</h5>
                                <h2>{parse(serviceData?.banner?.heading ?? `Web Development`)}</h2>
                                <p>{parse(serviceData?.banner?.description ??
                                            `<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
												suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.{' '}
											</p>
											<h6>ISO 9001 & 27001 Certified with over 98% 5-star Rating</h6>`)}</p>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-5 col-sm-12 col-12'>
                            <div className='servicesTempOneBanRight text-center'>
                                <h3>{parse(serviceData?.banner?.boxTitle ?? `Are You Interested to More About Our <span>Web Development</span>`)}</h3>
                                <div className='w-100 callContact'>
                                    <ul className='d-flex flex-wrap align-items-center'>
                                        <li>
                                            <a href='https://calendly.com/aqualeafitsol/30min' target='_blank' rel='noreferrer'>
                                                Book a Call
                                            </a>
                                        </li>
                                        <li>
                                            <Link href={`/contact`}>Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <LogoWidget settingsContent={settingsContent} maxHeight='31' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesTempOneBan;
