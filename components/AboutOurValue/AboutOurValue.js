import React from 'react';
import './AboutOurValue.scss';
import './AboutOurValueResponsive.scss';
import valueImage from '@/assets/images/common-image/about/value-image.jpg';
import result from '@/assets/images/common-image/about/result.svg';
import transparancy from '@/assets/images/common-image/about/transparancy.svg';
import responsive from '@/assets/images/common-image/about/responsive.svg';
import config from '@/helpers/config';
import parse from 'html-react-parser';
import Image from 'next/image';
const {REACT_APP_RESOURCE_URL} = config();

function AboutOurValue({aboutData}) {
	const content =  JSON.parse(aboutData.content); 
	return (
		<>
			<section className="ourValue">
				<div className="container">
					<div className="row">
						<div className="col-lg-7 col-md-7 col-sm-7 col-12">
							<div className="ourValueContent">
								<h2>{parse(content?.ourValue?.title ?? 'Our core values')}</h2>
								<div className="ourValueContentInner">
									<h4>
										<Image height={70} width={70} className={`next-inblock`}
											src={content?.ourValueItem?.[0]?.img ? `${REACT_APP_RESOURCE_URL}/${content?.ourValueItem?.[0]?.img}` : result.src}
											alt="our value Img"
										/>
										<span>{parse(content?.ourValueItem?.[0]?.title ?? 'RESULTS-ORIENTATED')}</span>
									</h4>
									<p>{parse(content?.ourValueItem?.[0]?.description ??
												`We don’t get paid to create fancy presentations or throw useless jargon at you. We get paid to get your usiness real, tangible results that
										you can point to.`)}</p>
								</div>
								<div className="ourValueContentInner">
									<h4>
										<Image height={70} width={70} className={`next-inblock`}
											src={content?.ourValueItem?.[1]?.img ? `${REACT_APP_RESOURCE_URL}/${content?.ourValueItem?.[1]?.img}` : transparancy.src}
											alt=""
										/>
										<span>{parse(content?.ourValueItem?.[1]?.title ?? 'TRANSPARENCY')}</span>
									</h4>
									<p>{parse(content?.ourValueItem?.[1]?.description ??
												`We won’t try to sugarcoat the truth or beat around the bush. If there’s a problem you need to know about, we’ll tell you… and then go on to
										swiftly solve it.`)}</p>
								</div>
								<div className="ourValueContentInner">
									<h4>
										<Image height={70} width={70} className={`next-inblock`}
											src={content?.ourValueItem?.[2]?.img ? `${REACT_APP_RESOURCE_URL}/${content?.ourValueItem?.[2]?.img}` : responsive.src}
											alt=""
										/>
										<span>{parse(content?.ourValueItem?.[2]?.title ?? 'RESPONSIVENESS')}</span>
									</h4>
									<p>{parse(content?.ourValueItem?.[2]?.description ??
												`Our people-first, personalised approach means you’ll always have a point of contact at the agency so that you’re never left in the dark
										about your campaigns.`)}</p>
								</div>
							</div>
						</div>
						<div className="ourValueImg">
							<Image height={700} width={700} className={`next-img`} src={content?.ourValue?.img ? `${REACT_APP_RESOURCE_URL}/${content?.ourValue?.img}` : valueImage.src} alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default AboutOurValue;
