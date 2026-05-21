import React from 'react';
import './SttBanner.scss';
import './SttBannerResponsive.scss';
import sstBan from '@/assets/images/common-image/services/stt-banner.jpg';
import sstMob from '@/assets/images/common-image/services/stt-mob.png';
import Link from 'next/link';
import config from '@/helpers/config';
import parse from 'html-react-parser';
import Image from 'next/image';
const {REACT_APP_RESOURCE_URL} = config();

const SttBanner = ({industryContent}) => {
	 
	const industryData = industryContent?.content ? JSON.parse(industryContent?.content) : '';

	return (
		<>
			<section
				className="SttBanner"
				style={{ background: `url(${industryData?.banner?.img ? `${REACT_APP_RESOURCE_URL}/${industryData?.banner?.img}` : sstBan.src})` }}
			>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-7 col-md-7 col-sm-7 col-12">
							<div className="SttBannerLeft">
								<h5>Our Industries</h5>
								<h2>{parse(industryData?.banner?.heading ?? `Web Development`)}</h2>
								<p>{parse(industryData?.banner?.description ??
											`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
										suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus
										commodo viverra maecenas accumsan.`)}</p>
								<div class="w-100 callCont">
									<ul class="d-flex flex-wrap align-items-center">
										<li>
											<a href="https://calendly.com/aqualeafitsol/30min" target="_blank" rel="noreferrer">
												Book a Call
											</a>
										</li>
										<li>
											<Link href={`/contact`}>Contact Us</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-5 col-md-5 col-sm-5 col-12">
							<div className="SttBannerRight text-center">
								<Image height={1000} width={400} className={`next-inblock`}
									src={industryData?.banner?.bannerDisplayImg ? `${REACT_APP_RESOURCE_URL}/${industryData?.banner?.bannerDisplayImg}` : sstMob.src}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SttBanner;
