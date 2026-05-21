import React from 'react';
import './CarrerBanner.scss';
import './CarrerBannerResponsive.scss';
import cbBg from '@/assets/images/common-image/login-bg.jpg';
import careerBanner from '@/assets/images/common-image/carrer/career-banner.png';
import config from '@/helpers/config';
import Image from 'next/image';
import parse from 'html-react-parser';
const {REACT_APP_RESOURCE_URL} = config();
 

const CarrerBanner = ({careerContent}) => {
	const careerData = careerContent?.careerData?.content ? JSON.parse(careerContent?.careerData?.content) : '';

	return (
		<>
			<section className="carrerBanner" style={{ backgroundImage: `url(${cbBg.src})` }}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6 col-sm-12 col-12">
							<div className="cbSlogan">
								<h2>{parse(careerData?.banner?.title ?? `Make Recruiting Your Competitive Advantage`)}</h2>
								<p>{parse(careerData?.banner?.description ??
											`We wholeheartedly welcome highly competent, exceptionally intelligent, and immensely friendly individuals from all across the globe so that they
									could join our company and work with us. If you do wish to start a career with us, please feel free to fill up the form or send your resume via
									mail at <span>hr@aqualeafitsol.com</span>`)}</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-12">
							<div className="cbImg">
								<Image height={500} width={500} className={`next-img`} src={careerData?.banner?.img ? `${REACT_APP_RESOURCE_URL}/${careerData?.banner?.img}` : careerBanner.src} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CarrerBanner;
