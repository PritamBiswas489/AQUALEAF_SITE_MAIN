import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import './TalkExpert.scss';
import './TalkExpertResponsive.scss';
import parse from 'html-react-parser';

const TalkExpert = ({industryData}) => {
	 

	return (
		<>
			<section className="talkExpert text-center">
				<div className="talkExpertInner">
					<h3>{parse(industryData?.section3?.heading ?? `Talk To An Expert`)}</h3>
					<p>{parse(industryData?.section3?.description ??
								`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
							gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`)}</p>
					<Link className="freeQuoteBtn mt-4" href={'/contact'}>
						Request a free Quote
					</Link>
				</div>
			</section>
		</>
	);
};

export default TalkExpert;
