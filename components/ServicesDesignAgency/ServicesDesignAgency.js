import React from 'react';
import './ServicesDesignAgency.scss';
import './ServicesDesignAgencyResponsive.scss';
import heroOne from '@/assets/images/common-image/services/3.png';
import config from '@/helpers/config';
import Image from 'next/image';
import parse from 'html-react-parser';
const {REACT_APP_RESOURCE_URL} = config();

const ServicesDesignAgency = ({serviceData}) => {
	return (
		<>
			<section className="sdAgency d-flex align-items-center relative">
				<div className="sectionTag secTagLeft">
					<span className="">PROCESS</span>
				</div>
				<div className="sdAgencyLeft">
					<div className="sdAgencyLeftInner">
						<h3>{parse(serviceData?.section2?.heading ?? `A web design agency <span>you can count on</span>`)}</h3>
						<p>{parse(serviceData?.section2?.description ??
									`Our custom design process is collaborative, iterative and inclusive. That means we go from each stage of design ⁠— brainstorming to concepting to full
											designs ⁠— by making sure you're involved every step of the way. The result is no scary surprises, just designs that get oohs and aahs.`)}</p>
					</div>
				</div>
				<div className="sdAgencyRight">
					<div className="sdAgencyRightInner">
						<Image height={1000} width={1000} className={`next-img`} alt="" src={serviceData?.section2?.img ? `${REACT_APP_RESOURCE_URL}/${serviceData?.section2?.img}` : heroOne.src} />
					</div>
				</div>
			</section>
		</>
	);
};

export default ServicesDesignAgency;
