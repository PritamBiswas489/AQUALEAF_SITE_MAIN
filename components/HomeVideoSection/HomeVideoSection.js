import React from 'react';

import MyPlayer from '../MyPlayer';

import 'video-react/dist/video-react.css';
import './HomeVideoSection.scss';
import './HomeVideoSectionResponsive.scss';
import { useState, useEffect } from 'react';

import Link from 'next/link';
import LogoWidget from '@/components/LogoWidget';
import parse from 'html-react-parser';

function HomeVideoSection({ homeContent, settingsContent }) {
    const homeData = JSON.parse(homeContent);
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHasWindow(true);
        }
    }, []);
    return (
        <>
            <section className='relative videoBoxWrap'>
                <div className='container-fluid p-h-30'>
                    <div className='row align-items-center'>
                        <div className='videoWrap'>
                            <div className='videoWrapInner waterEffect'>
                                {hasWindow && <MyPlayer homeData={homeData}></MyPlayer>}
                            </div>
                        </div>
                        <div className='boxWrap'>
                            <div className='boxWrapInner'>
                                <div
                                    className='nectar-highlighted-text font_size_61px '
                                    data-style='full_text'
                                    data-exp='default'
                                    data-user-color='true'
                                    style={{ color: '#000000' }}
                                    data-using-custom-color='true'
                                    data-animation-delay='false'
                                    data-color='#ffd74b'
                                    data-color-gradient
                                >
                                    <h2>{parse(homeData?.VdoSection?.description ??
                                                `Through bold digital designs, innovative development &amp; unique SEO techniques,&nbsp;
										<em className="animated">we’ve snagged a few awards.</em>`)}</h2>
                                </div>

                                <span className='link_wrap'>
                                    <Link href={'/'} className='link_text'>
                                        LEARN MORE ABOUT US
                                    </Link>
                                </span>
                                <LogoWidget settingsContent={settingsContent} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeVideoSection;
