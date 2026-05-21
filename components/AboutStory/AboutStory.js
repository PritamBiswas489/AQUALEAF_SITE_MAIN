import React from 'react';
import pencil from '@/assets/images/common-image/pencil.svg';
import './AboutStory.scss';
import './AboutStoryResponsive.scss';
import config from '@/helpers/config';
import parse from 'html-react-parser';
const {REACT_APP_RESOURCE_URL} = config();

function AboutStory({aboutData}) {
	const content =  JSON.parse(aboutData.content); 
	return (
		<>
			<section className="story">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="storyInner text-center">
								<h5>
									<img src={content?.story?.img ? `${REACT_APP_RESOURCE_URL}/${content?.story?.img}` : pencil.src} alt="" />
									<span>{parse(content?.story?.title ?? 'HOW WE’RE DIFFERENT')}</span>
								</h5>
								<h2>{parse(content?.story?.heading ?? 'The Aqualeaf Story')}</h2>
								<p>{parse(content?.story?.description ??
											`We were tired of hot-shot agencies over-promising, yet under-delivering. We were tired of the same old impersonal, distant relationship between
									agency and client. And we were tired of the lack of transparency most agencies gave their clients when asked “Are our campaigns actually
									generating tangible results?”.
									<br />
									<br />
									Instead, we wanted to be a true growth partner for our clients. One geared towards results, driven by clarity, and built upon a people-first
									approach that puts your business growth at the top of our priority list.
									<br />
									<br />
									We’re pretty good at marketing, but what we’re great at is rolling up our sleeves and finding out the most effective ways to help your business
									grow.`)}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default AboutStory;
