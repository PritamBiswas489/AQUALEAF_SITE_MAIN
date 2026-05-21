import React from 'react';
import './ServicesFaq.scss';
import './ServicesFaqResponsive.scss';
import faqBg from '@/assets/images/common-image/services/faq.jpg';
import { useSelector } from 'react-redux';
import config from '@/helpers/config';
import Image from 'next/image';
import parse from 'html-react-parser';
const { REACT_APP_RESOURCE_URL } = config();

const ServicesFaq = ({ serviceData }) => {
    return (
        <>
            <section className='servicesFaq'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-12'>
                            <div className='servicesFaqTitle text-center'>
                                <h2>{parse(serviceData?.section6?.heading ?? `Frequently Ask Questions`)}</h2>
                                <p>{parse(serviceData?.section6?.description ??
                                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis `)}</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-6 col-md-12 col-12'>
                            <div className='accordion faqAccordion' id='myAccordion'>
                                {serviceData?.section6?.faq?.map((val, i) => (
                                    <div className='accordion-item' key={`faqAccordion-${i}`}>
                                        <h2 className='accordion-header' id={`headingOne${i}`}>
                                            <button
                                                type='button'
                                                className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`}
                                                data-bs-toggle='collapse'
                                                data-bs-target={`#collapseOne${i}`}
                                            >
                                                {val?.question}
                                            </button>
                                        </h2>
                                        <div id={`collapseOne${i}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent='#myAccordion'>
                                            <div className='card-body'>
                                                <p>{val?.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-6 col-md-12 col-12'>
                            <div className='imgContainer'>
                                <Image height={400} width={400} className={`next-img`} src={serviceData?.section6?.img ? `${REACT_APP_RESOURCE_URL}/${serviceData?.section6?.img}` : faqBg.src} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesFaq;
