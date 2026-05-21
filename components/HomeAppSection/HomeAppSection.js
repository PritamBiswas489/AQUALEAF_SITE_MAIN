import React from 'react';
import './HomeAppSection.scss';
import './HomeAppSectionResponsive.scss';
import service from '@/assets/images/common-image/what-we-do/service.png';
import Link from 'next/link';
import config from '@/helpers/config';
import Image from 'next/image';
import parse from 'html-react-parser';
const { REACT_APP_RESOURCE_URL, REACT_APP_API_URL } = config();

function HomeAppSection({ homeContent, services }) {
    const homeData = JSON.parse(homeContent);
    console.log("############################################################")
    console.log(services);
    console.log(REACT_APP_API_URL);
    return (
        <>
            <section className='whatWeDo'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='insustryRound relative'>
                                <div className='insustryRoundInner d-flex align-items-center justify-content-center'>
                                    <div className='text-center iriInner'>
                                        <span>
                                            <Image height={80} width={80} className={`next-img`} src={service.src} alt='' />
                                        </span>
                                        <h5>{parse(homeData?.service?.title ?? `Service`)}</h5>
                                        <p>{parse(homeData?.service?.description ?? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, obcaecati.`)}</p>
                                    </div>
                                </div>
                                <div className='insustryRoundLeft'>
                                    {services?.map((val, i) => {
                                        if (i >= 0 && i < 3) {
                                            return (
                                                <>
                                                    <Link
                                                        href={`/service/${val?.slug}`}
                                                        className={`irRoundedBox lirb-${i + 1} d-flex align-items-center ${(i + 1) % 2 !== 0 ? 'left-30' : ''}  relative`}
                                                    >
                                                        <div className='irRoundedBoxCont'>
                                                            <h6>{parse(val.serviceName ?? `Lorem, ipsum dolor.`)}</h6>
                                                            <p>{parse(val.ShortDesc ?? `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem assumenda `)}</p>
                                                        </div>
                                                        <div className='irRoundedBoxIcon'>
                                                            <span>
                                                                <Image height={80} width={80} className={`next-img`} src={`${REACT_APP_RESOURCE_URL}/${val?.logo}`} alt='' />
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>

                                <div className='insustryRoundRight'>
                                    {services?.map((val, i) => {
                                        if (i >= 3 && i < 6) {
                                            return (
                                                <>
                                                    <Link
                                                        href={`/service/${val?.slug}`}
                                                        className={`irRoundedBox rirb-${i - 2} d-flex align-items-center ${(i - 2) % 2 !== 0 ? 'right-30' : ''}  relative`}
                                                    >
                                                        <div className='irRoundedBoxIcon'>
                                                            <span>
                                                                <Image height={80} width={80} className={`next-img`} src={`${REACT_APP_RESOURCE_URL}/${val?.logo}`} alt='' />
                                                            </span>
                                                        </div>
                                                        <div className='irRoundedBoxCont'>
                                                            <h6>{parse(val.serviceName ?? `Lorem, ipsum dolor.`)}</h6>
                                                            <p>{parse(val.ShortDesc ?? `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem assumenda `)}</p>
                                                        </div>
                                                    </Link>
                                                </>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeAppSection;
