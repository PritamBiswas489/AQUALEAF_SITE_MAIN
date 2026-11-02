import React from 'react';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './HomeCaseStudy.scss';
import './HomeCaseStudyResponsive.scss';
import Link from 'next/link';

import { randomSort } from '@/helpers/library';
import laptop from '@/assets/images/common-image/laptop.png';
import tab from '@/assets/images/common-image/tab.png';
import himalyan from '@/assets/images/common-image/himalyan.png';
import config from '@/helpers/config';
import Image from 'next/image';
import parse from 'html-react-parser';
const { REACT_APP_RESOURCE_URL } = config();

function HomeCaseStudy({ portfolioData }) {
    return (
        <>
            <section className='relative owlWrapArea homeCaseStudy'>
                <div className='owlWrap'>
                    <OwlCarousel
                        className='owl-theme projectSlider'
                        margin={10}
                        nav
                        dots={false}
                        items={1}
                        // autoplay={true}
                        smartSpeed={1200}
                    >
                        {portfolioData?.length > 0 && (
                            <>
                                {randomSort(portfolioData)?.map((val, i) => {
                                    const content = JSON.parse(val?.content);
                                    return (
                                        <div className='item' key={`portfolio-${i}`}>
                                            <div className='projectSliderBox relative'>
                                                <div className='companyName'>{content?.homeSection?.backgroundText}</div>
                                                <div className='solidBox' style={{ background: `${content?.homeSection?.color}` }}></div>

                                                <div className='psbBtm w-100 d-flex flex-wrap align-items-center'>
                                                    <div className='plLeft'>
                                                        <div className='imglaptop relative'>
                                                            <div className='lapTopImg'>
                                                                <Image height={500} width={500} className={`next-img`}
                                                                    src={content?.homeSection?.img1 ? `${REACT_APP_RESOURCE_URL}/${content?.homeSection?.img1}` : laptop.src}
                                                                    alt=''
                                                                />
                                                            </div>
                                                            <div className='tabImg'>
                                                                <Image height={500} width={500} className={`next-img`}
                                                                    src={content?.homeSection?.img2 ? `${REACT_APP_RESOURCE_URL}/${content?.homeSection?.img2}` : tab.src}
                                                                    alt=''
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='plRight relative'>
                                                        <div className='plRightInfo'>
                                                            <div className='plRightLogo'>
                                                                <Image height={200} width={200} className={`next-img`}
                                                                    src={
                                                                        content?.mainSection?.clientLogo
                                                                            ? `${REACT_APP_RESOURCE_URL}/${content?.mainSection?.clientLogo}`
                                                                            : himalyan.src
                                                                    }
                                                                    alt=''
                                                                />
                                                            </div>
                                                            <h6>{parse(content?.mainSection?.title ?? `Lorem Ipsum is doler`)}</h6>
                                                            <p>{parse(content?.mainSection?.description ??
                                                                        `Over the years we’ve designed and developed from scratch large scalable web & mobile Apps that have been featured in the
																		<br />
																		AppStore & delighted users with their experience & impact by solving real world problems for businesses and customers. We have many
																		more exciting platforms in the works, yet here’s what’s already live: 222`)}</p>

                                                            <ul className='d-flex w-100'>
                                                                <li>
                                                                    <img src={''} alt='' />
                                                                </li>
                                                            </ul>
                                                            <Link href={`/portfolio-details/${val?.slug}`} className='caseStudy'>
                                                                case study
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        )}
                    </OwlCarousel>
                </div>
            </section>
            <section className='mobile-case-slider d-none'>
                <div className='container-fluid p-0'>
                    <div className='row g-0'>
                        <div className='col-12'>
                            <div className='mobile-owl-wrap owl-arrow-box'>
                                <OwlCarousel className='owl-theme' margin={10} stagePadding={40} loop={true} navElement={'div'} navText={["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"]} nav={true} dots={false} items={1} smartSpeed={1200}>
                                    {portfolioData?.length > 0 && (
                                        <>
                                            {randomSort(portfolioData)?.map((val, i) => {
                                                const content = JSON.parse(val?.content);
                                                return (
                                                    <div className='item' key={`portfolio-mobile-${i}`}>
                                                        <div className='mobile-slider-box'>
                                                            <Link href={`/portfolio-details/${val?.slug}`} className='mobile-slider-info-box'>
                                                                <div className='image-wrap relative'>
                                                                    <div className='lapTopImg'>
                                                                        <Image height={500} width={500} className={`next-img`}
                                                                            src={
                                                                                content?.homeSection?.img1 ? `${REACT_APP_RESOURCE_URL}/${content?.homeSection?.img1}` : laptop.src
                                                                            }
                                                                            alt=''
                                                                        />
                                                                    </div>
                                                                    <div className='tabImg'>
                                                                        <Image height={500} width={500} className={`next-img`}
                                                                            src={content?.homeSection?.img2 ? `${REACT_APP_RESOURCE_URL}/${content?.homeSection?.img2}` : tab.src}
                                                                            alt=''
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className='mobile-slider-info'>
                                                                    <div className='mobile-slider-info-logo'>
                                                                        <Image height={200} width={200} className={`next-img`}
                                                                            src={
                                                                                content?.mainSection?.clientLogo
                                                                                    ? `${REACT_APP_RESOURCE_URL}/${content?.mainSection?.clientLogo}`
                                                                                    : himalyan.src
                                                                            }
                                                                            alt=''
                                                                        />
                                                                    </div>
                                                                    <span className='caseStudy'>case study</span>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </>
                                    )}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeCaseStudy;
