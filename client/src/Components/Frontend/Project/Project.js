import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Project(props){
        return(
			
        <div>
					<Header/>
					<div id="preloader">
					<div id="loading-center">
						<div id="loading-center-absolute">
							<div className="object" id="object_one"></div>
							<div className="object" id="object_two"></div>
							<div className="object" id="object_three"></div>
							<div className="object" id="object_four"></div>
						</div>
					</div>
				</div>

				

				{/* <!--====== Page Title Start ======--> */}
				<section className="page-title-area">
					<div className="container">
						<div className="row align-items-center justify-content-between">
							<div className="col-lg-8">
								<h1 className="page-title">Latest Project</h1>
							</div>
							<div className="col-auto">
								<ul className="page-breadcrumb">
									<li><a href="index.html">Home</a></li>
									<li>Project One</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				{/* <!--====== Page Title End ======-->

				<!--====== Project Area Start ======--> */}
				<section className="project-section section-gap-extra-bottom primary-soft-bg">
					<div className="container">
						<div className="row project-items justify-content-center project-style-one">
							<div className="col-lg-4 col-md-6 col-sm-10">
								<div className="project-item mb-30">
									<div className="thumb" style={{backgroundImage:`url(assets/img/project/project-grid-01.jpg)`}}></div>
									<div className="content">
										<div className="cats">
											<a href="#">Video & Movies</a>
										</div>
										<div className="author">
											<img src="assets/img/author-thumbs/01.jpg" alt="Thumb"/>
											<a href="#">James W. Barrows</a>
										</div>
										<h5 className="title">
											<a href="project-details.html">Best Romantic & Action English Movie Release in 2022.</a>
										</h5>
										<div className="project-stats">
											<div className="stats-value">
												<span className="value-title">Raised of <span className="value">$59,689</span></span>
												<span className="stats-percentage">79%</span>
											</div>
											<div className="stats-bar" data-value="79">
												<div className="bar-line"></div>
											</div>
										</div>
										<span className="date"><i className="far fa-calendar-alt"></i> 25 February 2021</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-10">
								<div className="project-item mb-30">
									<div className="thumb" style={{backgroundImage: `url(assets/img/project/project-grid-02.jpg)`}}></div>
									<div className="content">
										<div className="cats">
											<a href="#">Educations</a>
										</div>
										<div className="author">
											<img src="assets/img/author-thumbs/02.jpg" alt="Thumb"/>
											<a href="#">James W. Barrows</a>
										</div>
										<h5 className="title">
											<a href="project-details.html">Needs Close Up Students className Room In University</a>
										</h5>
										<div className="project-stats">
											<div className="stats-value">
												<span className="value-title">Raised of <span className="value">$59,689</span></span>
												<span className="stats-percentage">87%</span>
											</div>
											<div className="stats-bar" data-value="87">
												<div className="bar-line"></div>
											</div>
										</div>
										<span className="date"><i className="far fa-calendar-alt"></i> 25 February 2021</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-10">
								<div className="project-item mb-30">
									<div className="thumb" style={{backgroundImage: `url(assets/img/project/project-grid-03.jpg)`}}></div>
									<div className="content">
										<div className="cats">
											<a href="#">Technology</a>
										</div>
										<div className="author">
											<img src="assets/img/author-thumbs/03.jpg" alt="Thumb"/>
											<a href="#">James W. Barrows</a>
										</div>
										<h5 className="title">
											<a href="project-details.html">Original Shinecon VR Pro Virtual  Reality 3D Glasses VRBOX</a>
										</h5>
										<div className="project-stats">
											<div className="stats-value">
												<span className="value-title">Raised of <span className="value">$59,689</span></span>
												<span className="stats-percentage">85%</span>
											</div>
											<div className="stats-bar" data-value="85">
												<div className="bar-line"></div>
											</div>
										</div>
										<span className="date"><i className="far fa-calendar-alt"></i> 25 February 2021</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-10">
								<div className="project-item mb-30">
									<div className="thumb" style={{backgroundImage:`url(assets/img/project/project-grid-04.jpg)` }}></div>
									<div className="content">
										<div className="cats">
											<a href="#">Clothes</a>
										</div>
										<div className="author">
											<img src="assets/img/author-thumbs/01.jpg" alt="Thumb"/>
											<a href="#">James W. Barrows</a>
										</div>
										<h5 className="title">
											<a href="project-details.html">Fundraising For The People And Causes You Care About</a>
										</h5>
										<div className="project-stats">
											<div className="stats-value">
												<span className="value-title">Raised of <span className="value">$59,689</span></span>
												<span className="stats-percentage">83%</span>
											</div>
											<div className="stats-bar" data-value="83">
												<div className="bar-line"></div>
											</div>
										</div>
										<span className="date"><i className="far fa-calendar-alt"></i> 25 February 2021</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-10">
								<div className="project-item mb-30">
									<div className="thumb" style={{backgroundImage: `url(assets/img/project/project-grid-05.jpg)`}}></div>
									<div className="content">
										<div className="cats">
											<a href="#">Covid -19</a>
										</div>
										<div className="author">
											<img src="assets/img/author-thumbs/02.jpg" alt="Thumb"/>
											<a href="#">James W. Barrows</a>
										</div>
										<h5 className="title">
											<a href="project-details.html">COVID-19 Vaccine Have Already Begun Introduced Countries</a>
										</h5>
										<div className="project-stats">
											<div className="stats-value">
												<span className="value-title">Raised of <span className="value">$59,689</span></span>
												<span className="stats-percentage">93%</span>
											</div>
											<div className="stats-bar" data-value="93">
												<div className="bar-line"></div>
											</div>
										</div>
										<span className="date"><i className="far fa-calendar-alt"></i> 25 February 2021</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-10">
								<div className="project-item mb-30">
									<div className="thumb" style={{backgroundImage:`url(assets/img/project/project-grid-06.jpg)` }}></div>
									<div className="content">
										<div className="cats">
											<a href="#">Business</a>
										</div>
										<div className="author">
											<img src="assets/img/author-thumbs/03.jpg" alt="Thumb"/>
											<a href="#">James W. Barrows</a>
										</div>
										<h5 className="title">
											<a href="project-details.html">Mobile First Is Just Not Goodies Enough Meet Journey</a>
										</h5>
										<div className="project-stats">
											<div className="stats-value">
												<span className="value-title">Raised of <span className="value">$59,689</span></span>
												<span className="stats-percentage">70%</span>
											</div>
											<div className="stats-bar" data-value="70">
												<div className="bar-line"></div>
											</div>
										</div>
										<span className="date"><i className="far fa-calendar-alt"></i> 25 February 2021</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-10">
								<div className="project-item mb-30">
									<div className="thumb" style={{backgroundImage: `url(assets/img/project/project-grid-07.jpg)`}}></div>
									<div className="content">
										<div className="cats">
											<a href="#">Technology</a>
										</div>
										<div className="author">
											<img src="assets/img/author-thumbs/01.jpg" alt="Thumb"/>
											<a href="#">James W. Barrows</a>
										</div>
										<h5 className="title">
											<a href="project-details.html">Fundraising For The People And Causes You Care About</a>
										</h5>
										<div className="project-stats">
											<div className="stats-value">
												<span className="value-title">Raised of <span className="value">$59,689</span></span>
												<span className="stats-percentage">81%</span>
											</div>
											<div className="stats-bar" data-value="81">
												<div className="bar-line"></div>
											</div>
										</div>
										<span className="date"><i className="far fa-calendar-alt"></i> 25 February 2021</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-10">
								<div className="project-item mb-30">
									<div className="thumb" style={{backgroundImage: `url(assets/img/project/project-grid-08.jpg)`}}></div>
									<div className="content">
										<div className="cats">
											<a href="#">Mobile Kits</a>
										</div>
										<div className="author">
											<img src="assets/img/author-thumbs/02.jpg" alt="Thumb"/>
											<a href="#">James W. Barrows</a>
										</div>
										<h5 className="title">
											<a href="project-details.html">COVID-19 Vaccine Have Already Begun Introduced Countries</a>
										</h5>
										<div className="project-stats">
											<div className="stats-value">
												<span className="value-title">Raised of <span className="value">$59,689</span></span>
												<span className="stats-percentage">73%</span>
											</div>
											<div className="stats-bar" data-value="73">
												<div className="bar-line"></div>
											</div>
										</div>
										<span className="date"><i className="far fa-calendar-alt"></i> 25 February 2021</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-10">
								<div className="project-item mb-30">
									<div className="thumb" style={{backgroundImage: `url(assets/img/project/project-grid-09.jpg)`}}></div>
									<div className="content">
										<div className="cats">
											<a href="#">Business</a>
										</div>
										<div className="author">
											<img src="assets/img/author-thumbs/03.jpg" alt="Thumb"/>
											<a href="#">James W. Barrows</a>
										</div>
										<h5 className="title">
											<a href="project-details.html">Mobile First Is Just Not Goodies Enough Meet Journey</a>
										</h5>
										<div className="project-stats">
											<div className="stats-value">
												<span className="value-title">Raised of <span className="value">$59,689</span></span>
												<span className="stats-percentage">75%</span>
											</div>
											<div className="stats-bar" data-value="75">
												<div className="bar-line"></div>
											</div>
										</div>
										<span className="date"><i className="far fa-calendar-alt"></i> 25 February 2021</span>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="view-more-btn text-center mt-40">
									<a href="project-details.html" className="main-btn bordered-btn">View More Project <i className="far fa-arrow-right"></i></a>
								</div>
							</div>
						</div>
					</div>
				</section>


			<Footer/>



        </div>
		)
	}

export default Project;