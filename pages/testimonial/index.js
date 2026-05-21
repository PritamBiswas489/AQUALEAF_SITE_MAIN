import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import './Testimonial.scss';
import './HomeTestimonials.scss';
import './HomeTestimonialsResponsive.scss';
import { SettingsContent, TestimonialContent } from '@/helpers/data_utils';
import scheduale from '@/assets/images/common-image/scheduale.jpg';
import google from '@/assets/images/common-image/google-icon.png';

import Link from 'next/link';
import ReactPaginate from 'react-paginate';

import config from '@/helpers/config';
import parse from 'html-react-parser';
const { REACT_APP_RESOURCE_URL } = config();

import Container from '@/containers/Container';
import Image from 'next/image';

function TestimonialPage() {
    const [testimonial, setTestimonial] = useState([]);
    const [testimonialMeta, setTestimonialMeta] = useState({});
    const [page, setPage] = useState(1);
    const getContent = async () => {
        const result = await TestimonialContent(page);
        setTestimonial(result.data.records);
        setTestimonialMeta(result.data.meta);
    };

    useEffect(() => {
        getContent();
    }, [page]);

    if (!testimonial) {
        return 'Loading....';
    }
    return (
        <>
            <Head>
                <title>Client Testimonials - Aqualeaf IT Solutions</title>
                <meta name='description' content="Don't take our word for it - see what satisfied clients say about our digital marketing, advertising, and IT services. Read our testimonials today!" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <section class='testimonialTitle'>
                <h2>Testimonial</h2>
            </section>
            <section className='testimonialPage'>
                <div className='container'>
                    <div className='row'>
                        {testimonial.length > 0 ? (
                            <>
                                {testimonial.map((val, i) => (
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                        <div className='testiContent'>
                                            <div className='headIcon'>
                                                <Image height={50} width={50} className={`next-inblock`} src={val?.Logo?.img ? `${REACT_APP_RESOURCE_URL}/${val?.Logo?.img}` : google.src} alt='logo' />
                                            </div>
                                            <p>{parse(val?.description ??
                                                        `Getweb is the best software development company we’ve worked with so far. Unlike many developers, they understand UI/UX design on a fundamental
														level and create a smooth user journey no matter the technical difficulties. Highly recommended if you want your digital solution highly
														innovative and impactful!`)}</p>
                                            <div className='d-flex flex-wrap justify-content-between align-items-center'>
                                                <ul className='d-flex align-items-center'>
                                                    <li className='clintImg'>
                                                        <span>
                                                            <Image height={50} width={50} className={`next-inblock`} src={val?.avatar ? `${REACT_APP_RESOURCE_URL}/${val?.avatar}` : scheduale.src} alt='avatar' />
                                                        </span>
                                                    </li>
                                                    <li className='clintInfo'>
                                                        <h5>{parse(val?.clientName ?? `Jacob Eiting`)}</h5>
                                                        <h6>{parse(val?.clientDesignation ?? `CEO & Co-Founder`)}</h6>
                                                    </li>
                                                </ul>
                                                <div className='link_wrap'>
                                                    <a className='link_text' target={'_blank'} href={val?.projectLink} rel='noreferrer'>
                                                        View Project
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            ''
                        )}
                        {testimonial.length > 0 && (
                            <ReactPaginate
                                previousLabel={'<'}
                                nextLabel={'>'}
                                breakLabel={'...'}
                                pageCount={testimonialMeta?.totalPages}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={3}
                                onPageChange={(page) => setPage(page.selected + 1)}
                                containerClassName={'pagination justify-content-center custom-paginate'}
                                pageClassName={'page-item'}
                                pageLinkClassName={'page-link'}
                                previousClassName={'page-item'}
                                previousLinkClassName={'page-link'}
                                nextClassName={'page-item'}
                                nextLinkClassName={'page-link'}
                                breakClassName={'page-item'}
                                breakLinkClassName={'page-link'}
                                activeClassName={'active'}
                            />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Container(TestimonialPage);
export async function getStaticProps({ req, res }) {
    return {
        props: {
            settingsContent: await SettingsContent(),
        },
        revalidate: config().revalidate,
    };
}
