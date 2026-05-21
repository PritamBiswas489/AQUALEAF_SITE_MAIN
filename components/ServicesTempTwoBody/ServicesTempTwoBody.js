import React from 'react';
import './ServicesTempTwoBody.scss';

import DevServOne from '../DevServOne/DevServOne';
import DevServTwo from '../DevServTwo/DevServTwo';
import TalkExpert from 'components/TalkExpert/TalkExpert';
import parse from 'html-react-parser';

const ServicesTempTwoBody = ({ industryContent }) => {
    const industryData = industryContent?.content ? JSON.parse(industryContent?.content) : '';

    return (
        <>
            <section className='ServicesTempTwoBody'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='SttbTitle'>
                                <h2>{parse(industryData?.section1?.heading ?? `Get Your Buisness In Shape With Strategic <span>Design Solution</span>`)}</h2>
                                <p>{parse(industryData?.section1?.description ??
                                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
										suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='devServArea'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='SttbTitleTwo'>
                                <h3>{parse(industryData?.section2?.heading ?? `Step Up Your Booking & Reservation Game With Our Online Booking App Development Services`)}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {industryData?.section2?.item?.map((val, i) => {
                    if ((i + 1) % 2 === 0 && Math.round(industryData?.section2?.item?.length / 2) === i) {
                        return (
                            <>
                                <TalkExpert industryData={industryData} />
                                <DevServOne content={val} />
                            </>
                        );
                    }
                    if ((i + 1) % 2 !== 0 && Math.round(industryData?.section2?.item?.length / 2) === i) {
                        return (
                            <>
                                <TalkExpert industryData={industryData} />
                                <DevServTwo content={val} />
                            </>
                        );
                    }
                    if ((i + 1) % 2 === 0) {
                        return <DevServOne content={val} />;
                    }
                    return <DevServTwo content={val} />;
                })}
            </section>
        </>
    );
};

export default ServicesTempTwoBody;
