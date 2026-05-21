import React from 'react';
import './BuildReact.scss';
import './BuildReactResponsive.scss';
import config from '@/helpers/config';
import parse from 'html-react-parser';
import Image from 'next/image';
const { REACT_APP_RESOURCE_URL } = config();

const BuildReact = ({ serviceData }) => {
    return (
        <>
            <section className='StobGetBusinessSection'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-5 col-md-5 col-sm-12 col-12'>
                            <div className='StobGetBusinessLeft relative'>
                                <h3>{parse(serviceData?.section4?.heading ?? `<span>We build </span>React Native application <span>for the almost any industry</span>`)}</h3>
                            </div>
                        </div>
                        <div className='col-lg-7 col-md-7 col-sm-12 col-12'>
                            <div className='bulidReactRight relative'>
                                <ul className='d-flex flex-wrap'>
                                    {serviceData?.section4?.item?.map((val, i) => (
                                        <li key={`bulidReactRight-${i}`}>
                                            <span>
                                                <Image height={40} width={40} className={`next-inblock`} src={val?.img ? `${REACT_APP_RESOURCE_URL}/${val?.img}` : ''} alt='fitness' /> {val?.title}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BuildReact;
