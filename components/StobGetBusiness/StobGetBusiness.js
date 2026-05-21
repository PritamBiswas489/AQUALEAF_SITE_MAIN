import React from 'react';
import './StobGetBusiness.scss';
import './StobGetBusinessResponsive.scss';
import parse from 'html-react-parser';

const StobGetBusiness = ({serviceData}) => {
	return (
		<>
			<section className="StobGetBusinessSection">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5 col-md-5 col-sm-12 col-12">
							<div className="StobGetBusinessLeft relative">
								<h2>{parse(serviceData?.section1?.heading ?? `<span>Get Your Buisness In Shape With</span> Strategic Design Solution`)}</h2>
							</div>
						</div>
						<div className="col-lg-7 col-md-7 col-sm-12 col-12">
							<div className="StobGetBusinessRight relative">
								<p>{parse(serviceData?.section1?.description ??
											`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
										suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
										elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
										accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit`)}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default StobGetBusiness;
