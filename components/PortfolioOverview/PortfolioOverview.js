import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioOverview.scss';
import './PortfolioOverviewResponsive.scss';
import config from '@/helpers/config';
import parse from 'html-react-parser';
const {REACT_APP_RESOURCE_URL} = config();

const PortfolioOverview = ({portfolioDtlContent}) => {
	const portfolioDtlData = portfolioDtlContent?.portfolioDetailData?.content ? JSON.parse(portfolioDtlContent?.portfolioDetailData?.content) : '';
	return (
		<>
			<section className="overView">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="overViewInner relative">
								<h2>{parse(portfolioDtlData?.aboutClient?.heading ?? `About the Client`)}</h2>
								<p>{parse(portfolioDtlData?.aboutClient?.description ?? `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
									suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`)}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PortfolioOverview;
