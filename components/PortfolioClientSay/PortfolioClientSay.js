import React from 'react';
import './PortfolioClientSay.scss';
import './HomeTestimonials.scss';
import './PortfolioClientSayResponsive.scss';
import scheduale from '@/assets/images/common-image/scheduale.jpg';
import google from '@/assets/images/common-image/google-icon.png';
import Link from 'next/link';
import config from '@/helpers/config';
import parse from 'html-react-parser';
import Image from 'next/image';
const {REACT_APP_RESOURCE_URL} = config();

const PortfolioClientSay = ({portfolioDtlContent}) => {
	const portfolioDtlData = portfolioDtlContent?.portfolioDetailData?.content ? JSON.parse(portfolioDtlContent?.portfolioDetailData?.content) : '';
	const data = {
		avatar: portfolioDtlData?.clientSay?.avatar,
		clientDesignation: portfolioDtlData?.clientSay?.clientDesignation,
		clientName: portfolioDtlData?.clientSay?.clientName,
		description: portfolioDtlData?.clientSay?.description,
		heading: portfolioDtlData?.clientSay?.heading,
		logo: portfolioDtlData?.clientSay?.logo,
	}
	return (
		<>
			<section className="PortfolioClientSay">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-4 col-md-4 col-sm-12 col-12">
							<h2>{parse(data?.heading ?? `<span>Don’t take it from us.</span> Hear from our clients:`)}</h2>
						</div>
						<div className="col-lg-8 col-md-8 col-sm-12 col-12">
							<div className="testiContent">
								<p>{parse(data?.description ?? `Getweb is the best software development company we’ve worked with so far. Unlike many developers, they understand UI/UX design on a fundamental
									level and create a smooth user journey no matter the technical difficulties. Highly recommended if you want your digital solution highly
									innovative and impactful!`)}</p>
								<div className="d-flex flex-wrap justify-content-between align-items-center">
									<ul className="d-flex align-items-center">
										<li className="clintImg">
											<span>
												<Image height={50} width={50} className={`next-img`} src={data?.avatar ? `${REACT_APP_RESOURCE_URL}/${data?.avatar}` : scheduale.src} alt="" />
											</span>
										</li>
										<li className="clintInfo">
											<h5 >{parse(data?.clientName ?? `Jacob Eiting`)}</h5>
											<h6>{parse(data?.clientDesignation ?? `CEO & Co-Founder`)}</h6>
										</li>
									</ul>
									<div className="link_wrap">
										<div className="headIcon">
											<Link href={'/'}>
												<Image height={80} width={80} className={`next-img`} src={data?.logo ? `${REACT_APP_RESOURCE_URL}/${data?.logo}` : google.src} alt="" />
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12"></div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PortfolioClientSay;
