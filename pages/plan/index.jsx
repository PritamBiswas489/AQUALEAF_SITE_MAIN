import React, { useState } from 'react'
import './plan.scss';
import './planResponsive.scss';
import Container from '@/containers/Container';
import { HomePageContent, SettingsContent } from '@/helpers/data_utils';
import config from '@/helpers/config';

import HomeCaseStudy from '@/components/HomeCaseStudy/HomeCaseStudy';
import Link from 'next/link';


const index = (props) => {
    const [openTab, setOpenTab] = useState(1);
    const { portfolioData } = props.dataHomePage.data;
  return (
    <>
        <section className="contact-dtls-wrap-sec d-flex align-items-center justify-content-center">
            <div className="contact-dtls-wrap">
                <h2>For any advanced website design</h2>
                <h4>please do send us an email or call us for pricing.</h4>
                <ul>
                    <li><Link href="mailto:debjani@aqualeafitsol.com"><i className="far fa-envelope"></i>debjani@aqualeafitsol.com</Link></li>
                    <li><Link href="tel:+443300433707"><i className="fas fa-phone-alt"></i>+44 330 043 3707</Link></li>
                </ul>
                <ul className="addrs d-block">
                    <li><span><i class="far fa-building"></i> Local office:</span> Leamington Spa, CV33 9SW</li>
                    <li><span><i class="far fa-building"></i> Head office:</span> AD 218, Sector 1, Near AD Park, Saltlake City, Kolkata 700064, West Bengal, India.</li>
                </ul>
            </div>
        </section>
        <section className="package-sec-wrap">
            <div className="container-fluid p-h-40">
                <div className="row g-4">
                    <div className="col-xx-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="price-package basic">
                            <div className="price-package-head">
                                <h3>new website & <br></br> redesign website</h3>
                            </div>
                            <div className="pkg-price-wrap"
                                onClick={() => {
                                    setOpenTab(1);
                                }}
                            >
                                <p>Starts from</p>
                                <h3><i className="fas fa-pound-sign"></i>399</h3>
                                <p>Domain and Hosting starts at <span><i className="fas fa-pound-sign"></i>149</span> / Year</p>
                                <small>(Data Centre in Europe)</small>
                            </div>
                            <div className={`pkg-list-dtls ${openTab === 1 && 'active'}`}>
                                <ul className="hand-sign">
                                    <li>A 5 pager highly responsive Bespoke website designed to cater to your industry – strong visuals, clear call-to-actions (CTA), sitemap</li>
                                    <li>LGeneral Data Protection Regulation (GDPR) compliant</li>
                                    <li>Mobile-friendly</li>
                                    <li>Fast loading</li>
                                    <li>SEO optimized</li>
                                    <li>Easy-to-use Content Management System (CMS)</li>
                                    <li>Security features enabled</li>
                                    <li>Social media integration</li>
                                    <li>Chat feature</li>
                                    <li>Blog feature</li>
                                    <li>Basic pay/donation button</li>
                                    <li>Unlimited support for 3 months on a priority basis to ensure a smooth functioning</li>
                                </ul>
                                <div className="small-desc">
                                    <p>No monthly fixed maintenance cost. Annual domain and hosting renewal costs just £149 with a FREE website health checkup and a security patch update.</p>
                                    <p>Delivery time – 2-3 weeks (please note timeline is dependent on the number of design changes required)</p>
                                </div>
                                <div className="more-btn-wrap">
                                    <button type="button" className="more-btn"
                                        onClick={() => {
                                            setOpenTab(1);
                                        }}
                                    ><i className="fas fa-angle-down"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xx-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="price-package simple">
                            <div className="price-package-head">
                                <h3>e-commerce<br></br> website</h3>
                            </div>
                            <div className="pkg-price-wrap"
                                onClick={() => {
                                    setOpenTab(2);
                                }}
                            >
                                <p>Starts from</p>
                                <h3><i className="fas fa-pound-sign"></i>999</h3>
                                <p>Domain and Hosting starts at <span><i className="fas fa-pound-sign"></i>149</span> / Year</p>
                                <small>(Data Centre in Europe)</small>
                            </div>
                            <div className={`pkg-list-dtls ${openTab === 2 && 'active'}`}>
                                <ul className="hand-sign">
                                    <li>Up to 10 pages</li>
                                    <li>Product Catalog</li>
                                    <li>Shopping Cart</li>
                                    <li>User Registration and Guest Checkout</li>
                                    <li>Secure Payment Processing</li>
                                    <li>Shipping Options</li>
                                    <li>Inventory Management</li>
                                    <li>Product Search</li>
                                    <li>Product Reviews and Ratings</li>
                                    <li>Order Confirmation</li>
                                    <li>Order History</li>
                                    <li>Discounts and Promotions</li>
                                    <li>Responsive Design</li>
                                    <li>Security Features</li>
                                    <li>Contact Information</li>
                                    <li>Return and Refund Policy</li>
                                    <li>FAQ Section</li>
                                    <li>Search Engine Optimization (SEO)</li>
                                    <li>Newsletter Signup</li>
                                    <li>Social Media Integration</li>
                                    <li>Analytics and Reporting</li>
                                    <li>General Data Protection Regulation (GDPR) compliant</li>
                                </ul>
                                <div className="small-desc">
                                    <p>Annual domain and hosting renewal costs just £249.</p>
                                    <p>Delivery time – 6-8 weeks (please note timeline is dependent on the number of design changes required)</p>
                                </div>
                                <div className="more-btn-wrap">
                                    <button type="button" className="more-btn"
                                        onClick={() => {
                                            setOpenTab(2);
                                        }}
                                    ><i className="fas fa-angle-down"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xx-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="price-package special">
                            <div className="price-package-head">
                                <h3>existing website <br></br> Enhancement</h3>
                            </div>
                            <div className="pkg-price-wrap"
                                onClick={() => {
                                    setOpenTab(3);
                                }}
                            >
                                <p>Starts from</p>
                                <h3><i className="fas fa-pound-sign"></i>49</h3>
                                <p>(Source code / Hosting access Mandatory)</p>
                            </div>
                            <div className={`pkg-list-dtls ${openTab === 3 && 'active'}`}>
                                <div className="small-head">Add-on list </div>
                                {/* <div className="small-head">10 Steps Smart Evaluation Process </div> */}
                                {/* <ul className="hand-sign">
                                    <li>Select The Website</li>
                                    <li>Select User Type</li>
                                    <li>Identify user objective and Scenario</li>
                                    <li>Explore the mechanism</li>
                                    <li>Run Online checkup tools</li>
                                    <li>Run UX Check up tool</li>
                                    <li>Check Security Parameters</li>
                                    <li>List the barrier to User</li>
                                    <li>Record the data for Analyze</li>
                                    <li>Suggest Recommendation</li>
                                </ul> */}
                                <ul className="bulet-sign">
                                    <li>
                                        <div className="wrap-lft">Responsive View : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>49</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Custom Inner Page : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>49</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Contact Us form : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>49</span></div>
                                    </li>                                    
                                    <li>
                                        <div className="wrap-lft">Google Map Integration : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>49</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Analytics Tool Setup : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>49</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Data Entry to existing site : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>49</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Simple Booking System : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>99</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Design Enhancement : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>99</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Blog Integration : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>99</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Domain / Hosting Setup : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>99</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Cross Browser Compatibility Test : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>99</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">SEO Support : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>99</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Availability Calendrer Booking : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>149</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Content Management System : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>149</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Data Migration Support : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>149</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Payment Gateway Integration : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>249</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Annual Maintenance Contract : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>249</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Add Ecommerce / Web Shop : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>299</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Third Party API Integration : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>299</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Custom Plugin Development : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i>299</span></div>
                                    </li>
                                </ul>
                                <div className="small-desc">
                                    <p>If you already have a website that is not converting, we can suggest necessary changes with a FREE evaluation! please contact us. We transform digital duds into online studs.</p>
                                    {/* <p>If you already have a website that is not converting, we can suggest necessary changes with a FREE evaluation! please do send us an email in <a href="mailto:debjani@aqualeafitsol.com">debjani@aqualeafitsol.com</a> or call us in <a href="tel:+44-12345678">+44-12345678</a> We transform digital duds into online studs.</p> */}
                                </div>
                                <div className="more-btn-wrap">
                                    <button type="button" className="more-btn"
                                        onClick={() => {
                                            setOpenTab(3);
                                        }}
                                    ><i className="fas fa-angle-down"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="price-package upgrade">
                            <div className="price-package-head">
                                <h3>website Add-on</h3>
                            </div>
                            <div className="pkg-price-wrap"
                                onClick={() => {
                                    setOpenTab(4);
                                }}
                            >
                                <p>Starts from</p>
                                <h3><i className="fas fa-pound-sign"></i> 49</h3>
                                <p>(Source code / Hosting access Mandatory)</p>
                            </div>
                            <div className={`pkg-list-dtls ${openTab === 4 && 'active'}`}>
                                <ul className="bulet-sign">
                                    <li>
                                        <div className="wrap-lft">Responsive View : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 49</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Custom Inner Page : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 49</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Contact Us form : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 49</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Simple Booking System : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 99</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Add Ecommerce / Web Shop : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 299</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Design Enhancement : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 99</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Availability Calendrer Booking : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 149</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Google Map Integration : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 49</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Analytics Tool Setup : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 49</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Blog Integration : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 99</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Content Management System : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 149</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Third Party API Integration : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 299</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Payment Gateway Integration : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 249</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Custom Plugin Development : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 299</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Data Migration Support : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 149</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Domain / Hosting Setup : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 99</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Cross Browser Compatibility Test : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 99</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Data Entry to existing site : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 49</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">SEO Support : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 99</span></div>
                                    </li>
                                    <li>
                                        <div className="wrap-lft">Annual Maintenance Contract : </div>
                                        <div className="wrap-rgt">Starts from <span><i className="fas fa-pound-sign"></i> 249</span></div>
                                    </li>
                                </ul>
                                <div className="more-btn-wrap">
                                    <button type="button" className="more-btn"
                                        onClick={() => {
                                            setOpenTab(4);
                                        }}
                                    ><i className="fas fa-angle-down"></i></button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-xx-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="price-package amc">
                            <div className="price-package-head">
                                <h3>maintaince <br></br> contract</h3>
                            </div>
                            <div className="pkg-price-wrap"
                                onClick={() => {
                                    setOpenTab(5);
                                }}
                            >
                                <p>Starts from</p>
                                <h3><i className="fas fa-pound-sign"></i>30</h3>
                                <p>per month</p>
                                {/* <p>If you already have a website that is not converting, we can suggest necessary changes with a FREE evaluation! Give us a call! We transform digital duds into online studs.</p> */}
                            </div>
                            <div className={`pkg-list-dtls ${openTab === 5 && 'active'}`}>
                                <ul className="hand-sign">
                                    <li>Updating Script , Version,  Wordpress Plugin, Theme</li>
                                    <li>Fixing Broken Links</li>
                                    <li>Optimizing Performance</li>
                                    <li>Database backup and maintenance</li>
                                    <li>Monitoring and prevention of attacks.</li>
                                    <li>Auditing and/or creating content</li>
                                    <li>Keeping the web server up-to-date</li>
                                    <li>Junk Clear</li>
                                    <li>Periodic developmental activities</li>
                                </ul>
                                <div className="small-desc">
                                    <p>For final price with proper evaluation , please contact us.</p>
                                    {/* <p>For final price with proper evaluation , please do send us an email in <a href="mailto:debjani@aqualeafitsol.com">debjani@aqualeafitsol.com</a> or call us in <a href="tel:+44-12345678">+44-12345678</a></p> */}
                                </div>
                                <div className="more-btn-wrap">
                                    <button type="button" className="more-btn"
                                        onClick={() => {
                                            setOpenTab(5);
                                        }}
                                    ><i className="fas fa-angle-down"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-12">
                        <div className="subs-small-text">For any advanced website design please do send us an email in <a href="mailto:debjani@aqualeafitsol.com">debjani@aqualeafitsol.com</a> or call us in <a href="tel:+44-12345678">+44-12345678</a> for pricing.</div>
                    </div> */}
                </div>
            </div>
        </section>
        <section className="btn-wrap-sec">
            <div className="container-fluid p-h-40">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <div className="portfolio-heading">
                            <h3>our portfolio</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <HomeCaseStudy portfolioData={portfolioData} />
        <section className="btn-wrap-sec">
            <div className="container-fluid p-h-40">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <Link className="port-btn" href={"/portfolio"}>view portfolio</Link>
                        {/* <a className="port-btn" href={"/portfolio"}>view portfolio</a> */}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Container(index);

export async function getStaticProps({ req, res }) {
    return {
        props: {
            settingsContent: await SettingsContent(),
            dataHomePage: await HomePageContent(),
        },
        revalidate: config().revalidate,
    };
}