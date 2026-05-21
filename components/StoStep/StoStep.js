import React from 'react';
import './StoStep.scss';
import './StoStepResponsive.scss';
import parse from 'html-react-parser';
 
const StoStep = ({serviceData}) => {
	return (
		<>
			<section className="stepSection">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="stepTitle text-center">
								<h2>{parse(serviceData?.section5?.heading ?? `Lorem ipsum dolor sit amet, consectetur adipiscing elit`)}</h2>
								<p>{parse(serviceData?.section5?.description ??
											`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
										suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`)}</p>
							</div>
						</div>
						{serviceData?.section5?.item?.map((val, i) => (
							<div className="col-lg-4 col-md-4 col-sm-6 col-12" key={`stepInner-${i}`}>
								<div className="stepInner text-center">
									<span>{i + 1}</span>
									<h4>{val?.title}</h4>
									<p>{val?.description}</p>
								</div>
							</div>
						))}
						
					</div>
				</div>
			</section>
		</>
	);
};

export default StoStep;
