import React from 'react';
import './StobWorkWithUs.scss';
import './StobWorkWithUsResponsive.scss';
import heroFive from 'assets/images/common-image/services/work-with-us.png';
import workWithUsBg from 'assets/images/common-image/services/workwithus-bg.png';
import config from '@/helpers/config';
import Image from 'next/image';
import parse from 'html-react-parser';
const {REACT_APP_RESOURCE_URL} = config();
const StobWorkWithUs = ({serviceData}) => {
 

	return (
		<>
			<section className="StobWorkWithUs d-flex align-items-center relative" style={{ background: `url(${workWithUsBg.src})` }}>
				<div className="sectionTag secTagRight">
					<span className="">ACCESSIBILITY</span>
				</div>
				<div className="workWithLeft">
					<div className="workWithImg">
						<Image height={900} width={900} className={`next-img`} alt="" src={serviceData?.section3?.img ? `${REACT_APP_RESOURCE_URL}/${serviceData?.section3?.img}` : heroFive.src} />
					</div>
				</div>
				<div className="workWithRight">
					<div className="workWithRightInner">
						<h3>{parse(serviceData?.section3?.heading ?? `10 Reason to work with us`)}</h3>
						<div className="w-100">
							{parse(serviceData?.section3?.description ??
									`
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								<ul>
									<li>Lorem ipsum dolor sit amet, c elit ipsum </li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum </li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
									<li>sit amet, consectetur adipiscing elit ipsum </li>
									<li>Lorem ipsum dolor sit amet, c elit ipsum </li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum </li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
									<li>sit amet, consectetur adipiscing elit ipsum </li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
									<li>sit amet, consectetur adipiscing elit ipsum </li>
								</ul>
								`)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default StobWorkWithUs;
