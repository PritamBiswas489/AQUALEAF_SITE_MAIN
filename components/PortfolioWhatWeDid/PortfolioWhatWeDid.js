import React from 'react';
import './PortfolioWhatWeDid.scss';
import './PortfolioWhatWeDidResponsive.scss';
import parse from 'html-react-parser';
 

const PortfolioWhatWeDid = ({portfolioDtlContent}) => {
	 
	const portfolioDtlData = portfolioDtlContent?.portfolioDetailData?.content ? JSON.parse(portfolioDtlContent?.portfolioDetailData?.content) : '';

	const item = portfolioDtlData?.whatWeDid?.item ? portfolioDtlData?.whatWeDid?.item?.split(',') : []
	return (
		<>
			<section className="whatWeDid">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5 col-md-5 col-sm-12 col-12">
							<div className="whatWeDidTitle relative">
								<h2>{parse(portfolioDtlData?.whatWeDid?.heading ?? `What We Did`)}</h2>
								<p>{parse(portfolioDtlData?.whatWeDid?.description ?? `Lorem ipsum dolor sit amet consectetur adipisicing elit.`)}</p>
							</div>
						</div>
						<div className="col-lg-7 col-md-7 col-sm-12 col-12">
							<div className="whatWeDidDesc">
								<ul className="d-flex flex-wrap">
									{
										item?.map((val, i) => (
											<li key={`item-${i}`}>{val}</li>
										))
									}
									 
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PortfolioWhatWeDid;
