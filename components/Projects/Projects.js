import React from 'react';
import './Projects.scss';
import './ProjectsResponsive.scss'; 
import imgTwo from 'assets/images/common-image/portfolio/2.jpg';
import config from '@/helpers/config';
import Image from 'next/image';
const {REACT_APP_RESOURCE_URL} = config();

const Projects = ({portfolioDtlContent}) => {
	const portfolioDtlData = portfolioDtlContent?.portfolioDetailData?.content ? JSON.parse(portfolioDtlContent?.portfolioDetailData?.content) : '';
	return (
		<>
			<section className="projectsArea">
				<div className="container-fluid p-h-40">
					<div className="row gx-lg-5 gx-md-4 gx-sm-3 gy-lg-5 gy-md-4 gy-sm-3 justify-content-center">
						{
							portfolioDtlData?.problemSection?.gallery?.map((val, i) => (
								<div className="col-lg-4 col-md-4 col-sm-6 col-6" key={`project-${i}`}>
									<div className="imgBox">
										<Image height={800} width={800} className={`next-img`} src={val ? `${REACT_APP_RESOURCE_URL}/${val}` : imgTwo.src} alt="" />
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

export default Projects;
