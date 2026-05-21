import React from 'react';
import './PortfolioBanner.scss';
import proDtlBann from '@/assets/images/common-image/portfolio/prodetails-1.jpg';
import config from '@/helpers/config';
import Image from 'next/image';
const {REACT_APP_RESOURCE_URL} = config();

const PortfolioBanner = ({portfolioDtlContent}) => {
	const portfolioDtlData = portfolioDtlContent?.portfolioDetailData?.content ? JSON.parse(portfolioDtlContent?.portfolioDetailData?.content) : '';
	return (
		<>
			<section className="proDtlBann">
				<Image height={1000} width={1800} className={`next-inblock`} src={portfolioDtlData?.mainSection?.bannerImg ? `${REACT_APP_RESOURCE_URL}/${portfolioDtlData?.mainSection?.bannerImg}` : proDtlBann.src} alt="" />
			</section>
		</>
	);
};

export default PortfolioBanner;
