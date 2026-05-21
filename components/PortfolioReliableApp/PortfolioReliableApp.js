import React from 'react';
import './PortfolioReliableApp.scss';
import './PortfolioReliableAppResponsive.scss';
import appOne from '@/assets/images/common-image/portfolio/app-1.png';
import config from '@/helpers/config';
import Image from 'next/image';
const {REACT_APP_RESOURCE_URL} = config();

const PortfolioReliableApp = ({portfolioDtlContent}) => {
	const portfolioDtlData = portfolioDtlContent?.portfolioDetailData?.content ? JSON.parse(portfolioDtlContent?.portfolioDetailData?.content) : '';

	return (
		<>
			<section className="PortfolioReliableApp">
				<div className="container">
					<div className="row gx-lg-5 gx-md-4 gx-sm-3 gx-2 g-2 align-items-center">
						{
							portfolioDtlData?.whatWeDid?.gallery?.map((val, i) => (
								<div className="col-lg-3 col-md-3 col-sm-6 col-6" key={`PortfolioReliableApp-${i}`}>
									<div className="prAppImg text-center">
										<Image height={500} width={500} className={`next-img`} src={val ? `${REACT_APP_RESOURCE_URL}/${val}` : appOne.src} alt="" />
									</div>
								</div>
							))
						}
					</div>
				</div>
			</section>
		</>
	);
};

export default PortfolioReliableApp;
