import React from 'react';
import Link from 'next/link';
import './HomeSuccessProduct.scss';
import './HomeSuccessProductResponsive.scss';
import { HiOutlineArrowLongRight, HiOutlineEnvelope } from 'react-icons/hi2';
function HomeSuccessProduct() {
    return (
        <>
            <section className='yourIdea'>
                <div className='container-fluid p-h-30'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='yourIdeaInner text-center'>
                                <h2>Let's collaborate</h2>
                                <p>
                                Aqualeaf Team will be your best Web application and Mobile Application services. You can hire expert programmers and decide if you want them on a full-time project, hourly or fixed-cost basis. You can manage them as your extended team and boost your business. 
                                </p>
                                <ul className='d-flex justify-content-center align-items-center'>
                                    <li>
                                        <a href={'https://calendly.com/aqualeafitsol'} className='timeToTalk' target='_blank'>
                                            I'd like to pick a time to talk <HiOutlineArrowLongRight />
                                        </a>
                                    </li>
                                    <li>
                                        <Link href={'/contact'}>
                                            I Want to email you first <HiOutlineEnvelope />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeSuccessProduct;
