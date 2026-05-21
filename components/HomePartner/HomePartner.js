import React from 'react';
import './HomePartner.scss';
import dynamic from 'next/dynamic';
 
const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Link from 'next/link';
 

import partnerOne from '@/assets/images/common-image/partner/1.png';
import partnerTwo from '@/assets/images/common-image/partner/2.png';
import partnerThree from '@/assets/images/common-image/partner/3.png';
import partnerFour from '@/assets/images/common-image/partner/4.png';
import partnerFive from '@/assets/images/common-image/partner/5.png';
import Image from 'next/image';

const HomePartner = () => {
	return (
		<>
			<section className="relative partnerArea">
				<div className="container-fluid ph-40">
					<div className="row">
						<div className="col-12">
							<OwlCarousel
								className="owl-theme partnerSlider"
								margin={20}
								autoWidth={true}
								loop={true}
								nav={false}
								dots={false}
								items={9}
								autoplay={true}
								smartSpeed={1200}
							>
								<div className="item">
									<div className="partnerBox">
										<Link href="/">
											<Image height={50} width={80} className={`next-img`} src={partnerOne.src} alt="" />
										</Link>
									</div>
								</div>
								<div className="item">
									<div className="partnerBox">
										<Link href="/">
											<Image height={50} width={80} className={`next-img`} src={partnerTwo.src} alt="" />
										</Link>
									</div>
								</div>
								<div className="item">
									<div className="partnerBox">
										<Link href="/">
											<Image height={50} width={80} className={`next-img`} src={partnerThree.src} alt="" />
										</Link>
									</div>
								</div>
								<div className="item">
									<div className="partnerBox">
										<Link href="/">
											<Image height={50} width={80} className={`next-img`} src={partnerFour.src} alt="" />
										</Link>
									</div>
								</div>
								<div className="item">
									<div className="partnerBox">
										<Link href="/">
											<Image height={50} width={80} className={`next-img`} src={partnerFive.src} alt="" />
										</Link>
									</div>
								</div>
							</OwlCarousel>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomePartner;
