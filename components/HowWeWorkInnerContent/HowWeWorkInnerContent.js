import React from 'react';
import Link from 'next/link';
import './HowWeWorkInnerContent.scss';
import './HowWeWorkInnerContentResponsive.scss';

import stepsOne from '@/assets/images/common-image/steps/1.jpg';
import stepsTwo from '@/assets/images/common-image/steps/2.jpg';
import stepsThree from '@/assets/images/common-image/steps/3.jpg';
import stepsFour from '@/assets/images/common-image/steps/4.jpg';
import stepsFive from '@/assets/images/common-image/steps/5.jpg';
import stepsSix from '@/assets/images/common-image/steps/6.jpg';

import config from '@/helpers/config';
import Image from 'next/image';
import parse from 'html-react-parser';
const {REACT_APP_RESOURCE_URL} = config();

const HowWeWorkInnerContent = ({howWeWorkContent}) => {
	const content = JSON.parse(howWeWorkContent.content);
	return (
		<>
			<section className="stepsOnly relative text-center">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="w-100 text-center aboutTitle">
								<h2>Start In 3 Steps Only</h2>
							</div>
						</div>
						<div className="col-12 d-flex align-items-center min-h-655">
							<div className="stepsInner d-flex relative">
								<div className="stepsInnerLeft">
									<div className="stepsInnerLeftTop">
										<h4>{parse(content?.steps?.[0]?.title ?? 'Cost-Effectiveness')}</h4>
										<p>{parse(content?.steps?.[0]?.description ?? 'We tend to perceive each project as an opportunity to make use of our intrinsic passion')}</p>
										
									</div>
									<div className="stepsInnerCircle">1</div>
									<div className="stepsInnerLeftBtm">
										<Image height={400} width={400} className={`next-img`} src={content?.steps?.[0]?.img ? `${REACT_APP_RESOURCE_URL}/${content?.steps?.[0]?.img}` : stepsOne.src} alt="step 1 img" />
									</div>
								</div>
								<div className="stepsInnerMid">
									<div className="stepsInnerMidTop">
										<Image height={400} width={400} className={`next-img`} src={content?.steps?.[1]?.img ? `${REACT_APP_RESOURCE_URL}/${content?.steps?.[1]?.img}` : stepsThree.src} alt="step 2 img" />
									</div>
									<div className="stepsInnerCircle">2</div>
									<div className="stepsInnerMidBtm">
										<h4>{parse(content?.steps?.[1]?.title ?? 'Client Prioritization')}</h4>
										<p>{parse(content?.steps?.[1]?.description ?? `We tend to perceive each project as an opportunity to make use of our intrinsic passion`)}</p>
									</div>
								</div>
								<div className="stepsInnerRight">
									<div className="stepsInnerLeftTop">
										<h4>{parse(content?.steps?.[2]?.title ?? '24 hours Availability')}</h4>
										<p>{parse(content?.steps?.[2]?.description ?? `We tend to perceive each project as an opportunity to make use of our intrinsic passion`)}</p>
										
									</div>
									<div className="stepsInnerCircle">3</div>
									<div className="stepsInnerLeftBtm ">
										<Image height={400} width={400} className={`next-img`} src={content?.steps?.[2]?.img ? `${REACT_APP_RESOURCE_URL}/${content?.steps?.[2]?.img}` : stepsTwo.src} alt="step 3 img" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 d-flex align-items-center min-h-655">
							<div className="stepsInner d-flex relative">
								<div className="stepsInnerLeft">
									<div className="stepsInnerLeftTop">
										<h4>{parse(content?.steps?.[3]?.title ?? 'Latest Technology')}</h4>
										<p>{parse(content?.steps?.[3]?.description ?? `We tend to perceive each project as an opportunity to make use of our intrinsic passion`)}</p>
										
									</div>
									<div className="stepsInnerCircle">4</div>
									<div className="stepsInnerLeftBtm">
										<Image height={400} width={400} className={`next-img`} src={content?.steps?.[3]?.img ? `${REACT_APP_RESOURCE_URL}/${content?.steps?.[3]?.img}` : stepsFour.src} alt="step 4 img" />
									</div>
								</div>
								<div className="stepsInnerMid">
									<div className="stepsInnerMidTop">
										<Image height={400} width={400} className={`next-img`} src={content?.steps?.[4]?.img ? `${REACT_APP_RESOURCE_URL}/${content?.steps?.[4]?.img}` : stepsFive.src} alt="step 5 img" />
									</div>
									<div className="stepsInnerCircle">5</div>
									<div className="stepsInnerMidBtm">
										<h4>{parse(content?.steps?.[4]?.title ?? 'On Time Assistance')}</h4>
										<p>{parse(content?.steps?.[4]?.description ?? `We tend to perceive each project as an opportunity to make use of our intrinsic passion`)}</p>
										
									</div>
								</div>
								<div className="stepsInnerRight">
									<div className="stepsInnerLeftTop">
										<h4>{parse(content?.steps?.[5]?.title ?? 'Customizable Solutions')}</h4>
										<p>{parse(content?.steps?.[5]?.description ?? `We tend to perceive each project as an opportunity to make use of our intrinsic passion`)}</p>
										
									</div>
									<div className="stepsInnerCircle">6</div>
									<div className="stepsInnerLeftBtm ">
										<Image height={400} width={400} className={`next-img`} src={content?.steps?.[5]?.img ? `${REACT_APP_RESOURCE_URL}/${content?.steps?.[5]?.img}` : stepsSix.src} alt="step 6 img" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
		</>
	);
};

export default HowWeWorkInnerContent;
