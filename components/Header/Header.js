import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import logo from '@/assets/images/common-image/logo.svg';
import qImage from '@/assets/images/common-image/q.svg';
import menuIconOne from '@/assets/images/common-image/menu-icon-1.svg';
import designrush from '@/assets/images/review/designrush.png';

import { MdOutlineArrowDropDown } from 'react-icons/md';

import { RxEnvelopeClosed } from 'react-icons/rx';
import { SlSocialSkype } from 'react-icons/sl';
import { BsTelephone } from 'react-icons/bs';

import '@/components/Header/Header.scss';
import '@/components/Header/Header.responsive.scss';

import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

import $ from 'jquery';

import { useRouter } from 'next/router';

import config from '@/helpers/config';
import Image from 'next/image';
const { REACT_APP_RESOURCE_URL } = config();

export default function Header({ settings }) {
    const settingsContent = JSON.parse(settings.data.settingsData.content);
    const services = settings.data.serviceData;
    const industries = settings.data.industryData;
    const router = useRouter();
    const path = router.pathname;

    const [animate, setAnimate] = useState(0);
    const handleClick = () => {
        setAnimate(!animate);
    };
    const slideToggle = () => {
        $('.subMenuArea').slideToggle();
    };

    useEffect(() => {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('header').addClass('sticky');
            } else {
                $('header').removeClass('sticky');
            }
        });
    }, []);

    return (
        <>
            <div className={`designrush-logo-wrap`}>
                <a className={`designrush-logo`} href={'https://www.designrush.com'} target={`_blank`}>
                    <Image height={200} width={200} className={`next-img`} src={designrush.src} alt='Best Web Development Company' />
                </a>
            </div>
            <header className={'mainHeader'}>
                <div className='topHeader'>
                    <div className='container-fluid p-h-40'>
                        <div className='row justify-content-between align-items-center'>
                            <div className='col-auto'>
                                <ul className='d-flex adressPhone'>
                                    <li>
                                        <a href={settingsContent?.skypeId} target='_blank'>
                                            <SlSocialSkype /> Skype
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`mailto:${settingsContent?.emailId}`}>
                                            <RxEnvelopeClosed /> Email
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`tel:${settingsContent?.phone}`}>
                                            <BsTelephone /> Phone
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-auto'>
                                <ul className='d-flex social'>
                                    <li className='findUs'>Find us on :</li>
                                    {settingsContent?.facebookId && (
                                        <li>
                                            <a href={`${settingsContent?.facebookId}`} target='_blank' rel='noreferrer'>
                                                <FaFacebook />
                                            </a>
                                        </li>
                                    )}
                                    {settingsContent?.twitterId && (
                                        <li>
                                            <a href={`${settingsContent?.twitterId}`} target='_blank' rel='noreferrer'>
                                                <FaTwitter />
                                            </a>
                                        </li>
                                    )}
                                    {settingsContent?.linkedinId && (
                                        <li>
                                            <a href={`${settingsContent?.linkedinId}`} target='_blank' rel='noreferrer'>
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='headerInner'>
                    <div className='container-fluid p-h-40'>
                        <div className='row justify-content-between align-items-center'>
                            <div className='col-auto d-flex'>
                                <div className='logo relative'>
                                    <Link href={'/'}>
                                        <Image height={200} width={200} className={`next-img`} src={logo.src} alt='' />
                                    </Link>

                                    {Number(settingsContent?.hiringStatus) && (
                                        <div className='hiring'>
                                            <Link href={'/career/#comeOnBoard'} className='hiringActive'>
                                                We’re Hiring!
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='col-auto d-flex align-items-center'>
                                <button type='button' className='humbergar' onClick={handleClick}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                                <nav className={'navigation mobHide'}>
                                    <div className='navInner'>
                                        <ul>
                                            <li>
                                                <Link href='#'>
                                                    Services <MdOutlineArrowDropDown />
                                                </Link>
                                                <div className='subMenu'>
                                                    <div className='container-fluid'>
                                                        <div className='row'>
                                                            <div className='col-md-3 menu-left d-flex align-items-center mobHide'>
                                                                <div className='subMenuLogo'>
                                                                    <Image height={500} width={500} className={`next-img`} src={qImage.src} alt='' />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-6 pt-4'>
                                                                <div className='row no-gutters'>
                                                                    {services?.map((val, i) => (
                                                                        <div className='col-6' key={`services-${i}`}>
                                                                            <Link className='dropdown-item' href={`/service/${val?.slug}`}>
                                                                                <Image height={100} width={100} className={`next-img`} alt='' src={`${REACT_APP_RESOURCE_URL}/${val?.logo}`} />
                                                                                <span>
                                                                                    {val?.serviceName}
                                                                                    <small>{val?.ShortDesc}</small>
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            <div className='col-md-3 py-4 menu-right d-flex align-items-start flex-column justify-content-start mobHide'>
                                                                <h3>How we Work?</h3>
                                                                <ul className='ql'>
                                                                    <li>
                                                                        <div className='dropdown-item'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                Discovery <small>Explore a wide-range of projects</small>
                                                                            </span>
                                                                        </div>
                                                                    </li>

                                                                    <li>
                                                                        <div className='dropdown-item'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                Development <small>Agile Working Methodologies.</small>
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className='dropdown-item'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                Testing
                                                                                <small>Rigorous Testing &amp; QA</small>
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className='dropdown-item'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                Deployment
                                                                                <small>Seamless Launch of Product.</small>
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <li>
                                                <Link href='#'>
                                                    Industries <MdOutlineArrowDropDown />
                                                </Link>
                                                <div className='subMenu'>
                                                    <div className='container-fluid'>
                                                        <div className='row'>
                                                            <div className='col-md-3 menu-left d-flex align-items-center mobHide'>
                                                                <div className='subMenuLogo'>
                                                                    <Image height={500} width={500} className={`next-img`} src={qImage.src} alt='' />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-6 pt-4'>
                                                                <div className='row no-gutters'>
                                                                    {industries?.map((val, i) => (
                                                                        <div className='col-6' key={`industries-${i}`}>
                                                                            <Link className='dropdown-item' href={`/industry/${val?.slug}`}>
                                                                                <Image height={100} width={100} className={`next-img`} alt='' src={`${REACT_APP_RESOURCE_URL}/${val?.logo}`} />
                                                                                <span>
                                                                                    {val?.industryName}
                                                                                    <small>{val?.ShortDesc}</small>
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            <div className='col-md-3 py-4 menu-right d-flex align-items-start flex-column justify-content-start mobHide'>
                                                                <h3>How we Work?</h3>
                                                                <ul className='ql'>
                                                                    <li>
                                                                        <div className='dropdown-item'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                Discovery <small>Explore a wide-range of projects</small>
                                                                            </span>
                                                                        </div>
                                                                    </li>

                                                                    <li>
                                                                        <div className='dropdown-item'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                Development <small>Agile Working Methodologies.</small>
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className='dropdown-item'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                Testing
                                                                                <small>Rigorous Testing &amp; QA</small>
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className='dropdown-item'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                Deployment
                                                                                <small>Seamless Launch of Product.</small>
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li> */}
                                            <li>
                                                <Link href='#' className={(path === '/how-we-work' || path === '/about') && 'active'}>
                                                    About <MdOutlineArrowDropDown />
                                                </Link>
                                                <div className='subMenu'>
                                                    <div className='container-fluid'>
                                                        <div className='row'>
                                                            <div className='col-md-3 menu-left d-flex align-items-center'>
                                                                <div className='subMenuLogo'>
                                                                    <Image height={500} width={500} className={`next-img`} src={qImage.src} alt='' />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-6 pt-4'>
                                                                <div className='row no-gutters'>
                                                                    <div className='col-6'>
                                                                        <Link className='dropdown-item' href='/how-we-work'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                How We Work
                                                                                <small>Best Game App Developers.</small>
                                                                            </span>
                                                                        </Link>
                                                                        <Link className='dropdown-item' href='/testimonial'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                Testimonial
                                                                                <small>Best Game App Developers.</small>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className='col-6'>
                                                                        <Link className='dropdown-item' href='/about'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                Who We Are
                                                                                <small>Best Game App Developers.</small>
                                                                            </span>
                                                                        </Link>
                                                                        <Link className='dropdown-item' href='/blog'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                Blog
                                                                                <small>Best Game App Developers.</small>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-3 py-4 menu-right d-flex align-items-start flex-column justify-content-start'>
                                                                <h3>How we Work?</h3>
                                                                <ul className='ql'>
                                                                    <li>
                                                                        <div className='dropdown-item'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                10+ <small>Years of Experience</small>
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className='dropdown-item'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                600+ <small>Employees</small>
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className='dropdown-item'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                700+ <small>Projects</small>
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className='dropdown-item'>
                                                                            <Image height={100} width={100} className={`next-img`} alt='' src={menuIconOne.src} />
                                                                            <span>
                                                                                500+
                                                                                <small>Clients</small>
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <Link href='/portfolio'>Portfolio</Link>
                                            </li>
                                            <li>
                                                <Link href='/career'>Careers</Link>
                                            </li>
                                            {/* <li>
												<Link href="/">Blog</Link>
											</li> */}
                                            <li>
                                                <Link href='/contact'>Get in Touch</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href='/' className='navClose'></Link>
                                </nav>
                                <div className='bookCall'>
                                    <a className='bookCallBtn' target={'_blank'} href={'https://calendly.com/aqualeafitsol/30min'} rel='noreferrer'>
                                        Book a call
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* className={animate ? 'consultationHolder active' : 'consultationHolder'}
				<div className="for-mobile active"> */}
                <div className={animate ? 'for-mobile active' : 'for-mobile'}>
                    <button className='mobile-menu-btn' onClick={handleClick}>
                        <i className='fas fa-times'></i>
                    </button>
                    <div className='mobile-menu'>
                        <ul>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li>
                                <Link href='#' className='subMenuBtn' onClick={slideToggle}>
                                    Services <MdOutlineArrowDropDown />
                                </Link>
                                <ul className='subMenuArea' style={{ display: 'none' }}>
                                    {services?.map((val, i) => (
                                        <li key={`mobile-service-${i}`}>
                                            <Link href={`/service/${val?.slug}`}>{val?.serviceName}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <Link href='/about'>About</Link>
                            </li>
                            <li>
                                <Link href='/portfolio'>Portfolio</Link>
                            </li>
                            <li>
                                <Link href='/career'>Career</Link>
                            </li>
                            <li>
                                <Link href='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='socialAdderss'>
                        <ul className=''>
                            <li>
                                <Link href={'/'}>
                                    <SlSocialSkype /> {settingsContent?.skypeId}
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <RxEnvelopeClosed /> {settingsContent?.emailId}
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <BsTelephone /> {settingsContent?.phone}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='socialLink'>
                        <ul className='d-flex'>
                            <li>
                                <Link href={'/'}>
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <FaTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <FaLinkedin />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='socialLink'>
                        <a href={'https://calendly.com/aqualeafitsol/30min'} target={'_blank'} className='scheduleMeeting' rel='noreferrer'>
                            Schedule a Meeting
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}
