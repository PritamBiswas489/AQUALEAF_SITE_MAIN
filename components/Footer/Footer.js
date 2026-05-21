import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import './Footer.scss';
import './Footer.responsive.scss';

import Link from 'next/link';
import qImage from 'assets/images/common-image/q.svg';
import isoOne from '@/assets/images/common-image/portfolio/iso-1.svg';
import bullHorn from '@/assets/images/bullhorn-7.svg';
import { BsEnvelopeFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import ofcPic11 from '@/assets/images/ofc-pic/12.jpeg';
import Image from 'next/image';

function Footer({ settings }) {
    const [open, setOpen] = useState(false);
    const settingsContent = settings?.data?.settingsData?.content ? JSON.parse(settings?.data?.settingsData?.content) : {};
    const services = settings?.data?.serviceData;
    return (
        <>
            <footer>
                <div class='isoAreaFooter'>
                    <Image height={500} width={500} className={`next-img`} src={isoOne.src} alt='' />
                </div>
                <div className='footerTop'>
                    <div className='container-fluid p-h-40'>
                        <div className='row justify-content-between'>
                            <div className='col-lg-3 col-md-3 col-sm-4 col-12 mobHide'>
                                <div className='footerBoxLogo'>
                                    <Image height={400} width={400} className={`next-img`} src={qImage.src} alt='' />
                                    <ul className='d-flex'>
                                        {settingsContent?.facebookId && (
                                            <li>
                                                <a href={`${settingsContent?.facebookId}`} target='_blank' rel='noreferrer'>
                                                    <i className='fab fa-facebook'></i>
                                                </a>
                                            </li>
                                        )}
                                        {settingsContent?.twitterId && (
                                            <li>
                                                <a href={`${settingsContent?.twitterId}`} target='_blank' rel='noreferrer'>
                                                    <i className='fab fa-twitter'></i>
                                                </a>
                                            </li>
                                        )}
                                        {settingsContent?.linkedinId && (
                                            <li>
                                                <a href={`${settingsContent?.linkedinId}`} target='_blank' rel='noreferrer'>
                                                    <i className='fab fa-linkedin'></i>
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                                <div className='footerBox'>
                                    <h5>Services</h5>

                                    <ul>
                                        {services?.map((val, i) => (
                                            <li key={`services-${i}`}>
                                                <Link href={`/service/${val?.slug}`}>{val?.serviceName}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-4 col-6'>
                                <div className='footerBox'>
                                    <h5>Pages</h5>
                                    <ul>
                                        <li>
                                            <Link href='/about'>About us</Link>
                                        </li>
                                        <li>
                                            <Link href='/how-we-work'>How we work</Link>
                                        </li>
                                        <li>
                                            <Link href='/portfolio'>Case Studies</Link>
                                        </li>
                                        <li>
                                            <Link href='/career'>Career</Link>
                                        </li>
                                        <li>
                                            <Link href='/blog'>Blog</Link>
                                        </li>
                                        <li>
                                            <Link href='/contact'>Get in Touch</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                                <div className='footerBoxContact'>
                                    <h5>Contact Us</h5>
                                    <ul>
                                        <li>
                                            <a href={`mailto:${settingsContent?.emailId}`}>
                                                <BsEnvelopeFill /> Email
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`tel:${settingsContent?.phone}`}>
                                                <MdPhone /> Phone
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`${settingsContent?.skypeId}`} target='_blank' rel='noreferrer'>
                                                <i className='fab fa-skype'></i> Skype
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`${settingsContent?.wpNo}`} target='_blank' rel='noreferrer'>
                                                <i className='fab fa-whatsapp'></i> Whatsapp
                                            </a>
                                        </li>
                                    </ul>
                                    <p>
                                        Aqualeaf IT Solutions Pvt. Ltd. is headquartered in Saltlake Sector 1 , Kolkata ,and is registered in India with CIN No.
                                        U72300WB2013PTC198103 and GST NO : 19AAMCA2019A1Z4
                                    </p>
                                    <p>We supply website, mobile application creation and assistance to clients in different parts of the world.</p>
                                    <a href='https://www.dmca.com/compliance/aqualeafitsol.com' title='DMCA Compliance information for aqualeafitsol.com'>
                                        <img src='https://www.dmca.com/img/dmca-compliant-white-bg.png' alt='DMCA compliant image' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footerBtm'>
                    <div className='container-fluid ph-40'>
                        <div className='row justify-content-between'>
                            <div className='col'>
                                <ul className='d-flex flex-wrap'>
                                    <li>
                                        <Link href='/terms-and-condition'>Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href='/cookie-policy'>Cookies Policy</Link>
                                    </li>
                                    <li>
                                        <Link href='/privacy-policy'>Privacy Policy</Link>
                                    </li>
                                    {/* <li>
                                        <Link href='#'>Recruitment Policy</Link>
                                    </li> */}
                                    <li>
                                        <Link href='/disclaimer'>Disclaimer</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>Sitemap</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-auto'>Copyright © 2023, Aqualeaf IT Solutions Pvt. Ltd. All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </footer>
            {Number(settingsContent?.announcementStatus) && (
                <div className='bullHorn' onClick={() => setOpen(true)}>
                    <span>
                        <Image height={100} width={50} className={`next-img`} src={bullHorn.src} alt='' />
                    </span>
                </div>
            )}
            <Lightbox className='lightbox-wrap' plugins={[Thumbnails, Fullscreen, Zoom, Slideshow]} open={open} close={() => setOpen(false)} slides={[{ src: ofcPic11.src }]} />
        </>
    );
}

export default Footer;
