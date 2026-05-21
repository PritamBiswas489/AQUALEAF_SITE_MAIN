import React from 'react';
import './CareerWorkHard.scss';
import './CareerWorkHardResponsive.scss';
import hardWork from '@/assets/images/common-image/carrer/hardWork.png';
import sports from '@/assets/images/common-image/carrer/hardwork-2.jpg';
import config from '@/helpers/config';
import Image from 'next/image';
import parse from 'html-react-parser';
const { REACT_APP_RESOURCE_URL } = config();

const CareerWorkHard = ({ careerContent }) => {
    const careerData = careerContent?.careerData?.content ? JSON.parse(careerContent?.careerData?.content) : '';

    return (
        <>
            <div className='hardWorkArea'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className='sectionInner pr-20'>
                                <h3>{parse(careerData?.section4?.title ?? `Work hard, Wolf harder`)}</h3>
                                <div
                                    className='w-100'>{parse(careerData?.section4?.description ??
                                        `<p>
                                    We truly believe <strong>people from different backgrounds</strong>, with different identities and experiences,{' '}
                                    <strong>make our team and company better</strong> – just as <strong>our partners come from various countries and industries,</strong> and
                                    together with them we <strong>build exceptional products and services</strong> for the world.
                                </p>
                                <p>
                                    <strong>Shared practices, values, and beliefs</strong>, in addition to a colorful office, fruits, and other benefits are at the core of the OS
                                    that keeps us running smoothly in terms of <strong>work-life balance</strong>, employee engagement, <strong>happiness</strong> and retention,
                                    fast improvement, building trust, and <strong>great results</strong> and products.
                                </p>`)}</div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12 wolfHerder'>
                            <div className='sectionImg'>
                                <Image height={400} width={400} className={`next-img`} src={careerData?.section4?.img ? `${REACT_APP_RESOURCE_URL}/${careerData?.section4?.img}` : hardWork} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareerWorkHard;
