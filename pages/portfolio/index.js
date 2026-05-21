import React from 'react';
import Head from 'next/head';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import './PortFolio.scss';
import './PortFolioResponsive.scss';

import { SettingsContent, PortfoloContent } from '@/helpers/data_utils';

import Link from 'next/link';

import himalyan from '@/assets/images/common-image/himalyan.png';
import bgOne from '@/assets/images/common-image/portfolio/bg-1.jpg';
import bgTwo from '@/assets/images/common-image/portfolio/bg-2.jpg';
import react from '@/assets/images/common-image/react.svg';
import sectionTwo from '@/assets/images/common-image/portfolio/section-2.png';
import portfolioBann from '@/assets/images/common-image/portfolio/portfolioBann.svg';

import config from '@/helpers/config';
const { REACT_APP_RESOURCE_URL } = config();
const anchors = [];
import LogoWidget from '@/components/LogoWidget';
import Image from 'next/image';
import parse from 'html-react-parser';

const Portfolio = (props) => {
    const portfolio = props.portfoloContent.data.portfolio;
    const portfolioBanner = JSON.parse(props.portfoloContent.data.portfolioBanner.content);
    const settingsContent = props.settingsContent;


    return (
        <>
            <Head>
                <title>Aqualeaf IT Solutions Portfolio - Our Work Speaks for Itself</title>
                <meta name='description' content="Look at our portfolio and see the exceptional digital marketing, advertising, and IT services we have provided to our clients. Contact us today to get started!" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <section className='portfolioHeader'>
                <Header settings={settingsContent}></Header>
            </section>
            <ReactFullpage
                anchors={anchors}
                navigation
                navigat
                onLeave={(origin, destination, direction) => {}}
                render={({ state, fullpageApi }) => {
                    return (
                        <div className='portfolioPage'>
                            <div
                                className='section portfolioBanner'
                                style={{
                                    background: `url(${
                                        portfolioBanner?.banner?.backgroundImg ? `${REACT_APP_RESOURCE_URL}/${portfolioBanner?.banner?.backgroundImg}` : bgOne.src
                                    })`,
                                }}
                            >
                                <div className='container'>
                                    <div className='row align-items-center'>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-12'>
                                            <div className='portfolioInner relative'>
                                                <h2>{parse(portfolioBanner?.banner?.title ?? `Case Studies`)}</h2>
                                                <p>{parse(portfolioBanner?.banner?.description ??
                                                            `Over the years, our main goal of uplifting businesses has remained the same. We strive to provide innovative mobile and web
                                                              solutions that put your brand in the spotlight.`)}</p>
                                                <div className='d-flex align-items-center flex-wrap btnAndWiget'>
                                                    <Link href='/contact' className='caseStudy'>
                                                        Discuss your Idea <i className='fas fa-long-arrow-alt-right'></i>
                                                    </Link>
                                                    <LogoWidget settingsContent={settingsContent} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-5 col-md-5 col-sm-12 col-12'>
                                            <div className='proBann relative'>
                                                <Image height={800} width={800} className={`next-img`} src={portfolioBanner?.banner?.img ? `${REACT_APP_RESOURCE_URL}/${portfolioBanner?.banner?.img}` : portfolioBann.src} alt='' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {portfolio?.length > 0 && (
                                <>
                                    {portfolio?.map((val, i) => {
                                        const content = val?.content ? JSON.parse(val?.content) : '';
                                        if ((i + 1) % 2 !== 0) {
                                            return (
                                                <div
                                                    className='section section-2 sectionFrame-even'
                                                    key={`portfolio-${i}`}
                                                    style={{
                                                        backgroundImage: `url(${
                                                            content?.mainSection?.backgroundImg ? `${REACT_APP_RESOURCE_URL}/${content?.mainSection?.backgroundImg}` : bgTwo.src
                                                        })`,
                                                    }}
                                                >
                                                    <div className='container'>
                                                        <div className='row align-items-center'>
                                                            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                                                <div className='sectionInner'>
                                                                    <div className='sectionInnerLogo'>
                                                                        <Image height={500} width={500} className={`next-img`}
                                                                            src={
                                                                                content?.mainSection?.clientLogo
                                                                                    ? `${REACT_APP_RESOURCE_URL}/${content?.mainSection?.clientLogo}`
                                                                                    : himalyan.src
                                                                            }
                                                                            alt=''
                                                                        />
                                                                    </div>
                                                                    <p>{parse(content?.mainSection?.description ??
                                                                                `Day for Dubai is an initiative launched by Sheikh Hamdan bin Muhammed bin Rashid Al Maktoum, the Crown Prince of Dubai and
                                                                                  Chairman of the Executive Council.`)}</p>
                                                                    <div className='d-flex flex-wrap align-items-center justify-content-between mt-4 csbList'>
                                                                        <Link href={`/portfolio-details/${val?.slug}`} className='caseStudy'>
                                                                            View Case Study <i className='fas fa-long-arrow-alt-right'></i>
                                                                        </Link>
                                                                        <ul className='d-flex align-items-center developIcon'>
                                                                            {val?.PortFolioTechnologies?.map((value, i) => (
                                                                                <li>
                                                                                    <Image height={80} width={80} className={`next-img`}
                                                                                        src={value?.Logo?.img ? `${REACT_APP_RESOURCE_URL}/${value?.Logo?.img}` : react.src}
                                                                                        alt=''
                                                                                    />
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                                                <div className='sectionImg'>
                                                                    <Image height={500} width={500} className={`next-img`}
                                                                        src={
                                                                            content?.mainSection?.displayImg
                                                                                ? `${REACT_APP_RESOURCE_URL}/${content?.mainSection?.displayImg}`
                                                                                : sectionTwo.src
                                                                        }
                                                                        alt=''
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div
                                                    className='section section-2 sectionFrame-even'
                                                    style={{
                                                        backgroundImage: `url(${
                                                            content?.mainSection?.backgroundImg ? `${REACT_APP_RESOURCE_URL}/${content?.mainSection?.backgroundImg}` : bgTwo.src
                                                        })`,
                                                    }}
                                                >
                                                    <div className='container'>
                                                        <div className='row align-items-center'>
                                                            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                                                <div className='sectionImg'>
                                                                    <Image height={500} width={500} className={`next-img`}
                                                                        src={
                                                                            content?.mainSection?.displayImg
                                                                                ? `${REACT_APP_RESOURCE_URL}/${content?.mainSection?.displayImg}`
                                                                                : sectionTwo.src
                                                                        }
                                                                        alt=''
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                                                <div className='sectionInner'>
                                                                    <div className='sectionInnerLogo'>
                                                                        <Image height={500} width={500} className={`next-img`}
                                                                            src={
                                                                                content?.mainSection?.clientLogo
                                                                                    ? `${REACT_APP_RESOURCE_URL}/${content?.mainSection?.clientLogo}`
                                                                                    : himalyan.src
                                                                            }
                                                                            alt=''
                                                                        />
                                                                    </div>
                                                                    <p>{parse(content?.mainSection?.description ??
                                                                                `Day for Dubai is an initiative launched by Sheikh Hamdan bin Muhammed bin Rashid Al Maktoum, the Crown Prince of Dubai and
                                                                                    Chairman of the Executive Council.`)}</p>
                                                                    <div className='d-flex flex-wrap align-items-center justify-content-between mt-4 csbList'>
                                                                        <Link href={`/portfolio-details/${val?.slug}`} className='caseStudy'>
                                                                            View Case Study <i className='fas fa-long-arrow-alt-right'></i>
                                                                        </Link>
                                                                        <ul className='d-flex align-items-center developIcon'>
                                                                            {val?.PortFolioTechnologies?.map((value, i) => (
                                                                                <li>
                                                                                    <Image height={80} width={80} className={`next-img`}
                                                                                        src={value?.Logo?.img ? `${REACT_APP_RESOURCE_URL}/${value?.Logo?.img}` : react.src}
                                                                                        alt=''
                                                                                    />
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    })}
                                </>
                            )}

                            <section className='section sectionFooter fp-auto-height'>
                                <Footer settings={settingsContent} />
                            </section>
                        </div>
                    );
                }}
            />
        </>
    );
};
export default Portfolio;

export async function getStaticProps({ req, res }) {
    return {
        props: {
            settingsContent: await SettingsContent(),
            portfoloContent: await PortfoloContent(),
        },
        revalidate: config().revalidate,
    };
}
