import React, { useEffect } from 'react';
import './CarrierRightMatch.scss';
import './CarrierRightMatchResponsive.scss';

import rightMatchBgLeft from '@/assets/images/common-image/rightMatchBgLeft.png';
import rightMatchBgRight from '@/assets/images/common-image/rightMatchBgRight.png';
 
import $ from 'jquery';
import Image from 'next/image';
import parse from 'html-react-parser';
 

const CarrierRightMatch = ({careerContent}) => {
	const careerData = careerContent?.careerData?.content ? JSON.parse(careerContent?.careerData?.content) : '';

	useEffect(() => {
		var lFollowX = 0,
			lFollowY = 0,
			x = 0,
			y = 0,
			friction = 1 / 20;

		function moveBackground() {
			x += (lFollowX - x) * friction;
			y += (lFollowY - y) * friction;
			var translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

			$('.bg').css({
				'-webit-transform': translate,
				'-moz-transform': translate,
				transform: translate,
			});

			window.requestAnimationFrame(moveBackground);
		}

		$(window).on('mousemove click', function (e) {
			var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
			var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
			lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
			lFollowY = (10 * lMouseY) / 100;
		});

		moveBackground();
	}, []);
	return (
		<>
			<section className="rightMatch d-flex align-items-center justify-content-center text-center">
				<div className="rightMatchBgLeft bg">
					<Image height={400} width={400} className={`next-img`} src={rightMatchBgLeft.src} alt="" />
				</div>
				<div className="rightMatchBgRight bg">
					<Image height={400} width={400} className={`next-img`} src={rightMatchBgRight.src} alt="" />
				</div>
				<div className=""></div>
				<div className="rightMatchInner">
					<h2>{parse(careerData?.section6?.title ?? `Can’t find the right match?`)}</h2>
					<h4>{parse(careerData?.section6?.description ??
								`Get in touch with our recruitment team directly:
						<span>
							<Link to={'#'}>hr@aqualeafitsol.com</Link>
						</span>`)}</h4>
				</div>
			</section>
		</>
	);
};

export default CarrierRightMatch;
