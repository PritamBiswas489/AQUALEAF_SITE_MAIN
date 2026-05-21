import React from 'react';
import './HomeTechnology.scss';
import css3 from 'assets/images/common-image/technologies/css3.svg';
import laravel from 'assets/images/common-image/technologies/laravel.svg';
import react from 'assets/images/common-image/technologies/react.svg';
import vue from 'assets/images/common-image/technologies/vue.svg';
import js from 'assets/images/common-image/technologies/js.svg';

function HomeTechnology() {
	return (
		<>
			<section className="expertsTechnologies">
				<div className="container-fluid p-h-30">
					<div className="row">
						<div className="col-12 mb-4">
							<div className="title">
								<h2>
									We are experts in the <span>most popular Technologies</span>
								</h2>
							</div>
						</div>
						<div className="etBox">
							<div className="etBoxInner w-100 text-center">
								<span className="wobble-horizontal">
									<img src={css3} alt="" />
								</span>
								<h6>60 PROJECTS</h6>
								<p>Ruby on Rails</p>
							</div>
						</div>
						<div className="etBox">
							<div className="etBoxInner w-100 text-center">
								<span className="wobble-horizontal">
									<img src={laravel} alt="" />
								</span>
								<h6>60 PROJECTS</h6>
								<p>Ruby on Rails</p>
							</div>
						</div>
						<div className="etBox">
							<div className="etBoxInner w-100 text-center">
								<span className="wobble-horizontal">
									<img src={react} alt="" />
								</span>
								<h6>60 PROJECTS</h6>
								<p>Ruby on Rails</p>
							</div>
						</div>
						<div className="etBox">
							<div className="etBoxInner w-100 text-center">
								<span className="wobble-horizontal">
									<img src={vue} alt="" />
								</span>
								<h6>60 PROJECTS</h6>
								<p>Ruby on Rails</p>
							</div>
						</div>
						<div className="etBox">
							<div className="etBoxInner w-100 text-center">
								<span className="wobble-horizontal">
									<img src={js} alt="" />
								</span>
								<h6>60 PROJECTS</h6>
								<p>Ruby on Rails</p>
							</div>
						</div>
						<div className="etBox">
							<div className="etBoxInner w-100 text-center">
								<span className="wobble-horizontal">
									<img src={css3} alt="" />
								</span>
								<h6>60 PROJECTS</h6>
								<p>Ruby on Rails</p>
							</div>
						</div>
						<div className="etBox">
							<div className="etBoxInner w-100 text-center">
								<span className="wobble-horizontal">
									<img src={laravel} alt="" />
								</span>
								<h6>60 PROJECTS</h6>
								<p>Ruby on Rails</p>
							</div>
						</div>
						<div className="etBox">
							<div className="etBoxInner w-100 text-center">
								<span className="wobble-horizontal">
									<img src={react} alt="" />
								</span>
								<h6>60 PROJECTS</h6>
								<p>Ruby on Rails</p>
							</div>
						</div>
						<div className="etBox">
							<div className="etBoxInner w-100 text-center">
								<span className="wobble-horizontal">
									<img src={vue} alt="" />
								</span>
								<h6>60 PROJECTS</h6>
								<p>Ruby on Rails</p>
							</div>
						</div>
						<div className="etBox">
							<div className="etBoxInner w-100 text-center">
								<span className="wobble-horizontal">
									<img src={js} alt="" />
								</span>
								<h6>60 PROJECTS</h6>
								<p>Ruby on Rails</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default HomeTechnology;
