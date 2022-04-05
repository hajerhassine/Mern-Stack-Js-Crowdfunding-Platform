import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import axios from 'axios';

const ProjectDetails = ({ match }) => {
	const [project, setProject] = useState({})

	useEffect(() => {
	  const fetchProject = async () => {
		const { data } = await axios.get(`/api/projects/${match.params.id}`)
  
		setProject(data)
	  }
  
	  fetchProject()
	}, [match])  
return( 
        <>
            
            <Header />
        
    <section class="page-title-area">
		<div class="container">
			<div class="row align-items-center justify-content-between">
				<div class="col-lg-8">
					<h1 class="page-title">Project Details</h1>
				</div>
				<div class="col-auto">
					<ul class="page-breadcrumb">
						<li><a href="index.html">Home</a></li>
						<li>Project Details</li>
					</ul>
				</div>
			</div>
		</div>
	</section>


    <section class="project-details-area section-gap-extra-bottom">
		<div class="container">
			<div class="row align-items-center justify-content-center">
				<div class="col-lg-6 col-md-10">
					<div class="project-thumb mb-md-50">
						<img src={`${project.image}`} alt="Image"/>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="project-summery">
						<a href="#" class="category">{project.category}</a>
						<h3 class="project-title">
                        {project.name}
						</h3>

						<div class="meta">
							<div class="author">
                            <img src="/assets/img/author-thumbs/02.jpg" alt="Thumb"/>
								<a href="#">James W. Barrows</a>
							</div>
							<a href="#" class="date"><i class="far fa-calendar-alt"></i>25 Feb 2021</a>
						</div>
						<div class="project-funding-info">
							<div class="info-box">
								<span>$5036k</span>
								<span class="info-title">Pledged</span>
							</div>
							<div class="info-box">
								<span>9</span>
								<span class="info-title">Backers</span>
							</div>
							<div class="info-box">
								<span>29</span>
								<span class="info-title">Days Left</span>
							</div>
						</div>
						<div class="project-raised clearfix">
							<div class="d-flex align-items-center justify-content-between">
								<div class="raised-label">Raised of {project.price}</div>
								<div class="percent-raised">{project.p}%</div>
							</div>
							<div className="stats-bar" data-value={`${project.p}`}>
								<div className="bar-line"></div>
							</div>
						</div>
						<div class="project-form">
							<form action="#">
								<ul class="donation-amount">
									<li>$5</li>
									<li>$50</li>
									<li>$180</li>
									<li>$500</li>
									<li>$1000</li>
								</ul>
								<button type="submit" class="main-btn">Donate Now <i class="far fa-arrow-right"></i></button>
							</form>
						</div>
					</div>
				</div>
				<div class="col-12">
					<div class="project-details-tab">
				
						<div class="tab-content" id="projectTabContent">
							<div class="tab-pane fade show active" id="description" role="tabpanel">
								<div class="row justify-content-center">
									<div class="col-lg-8">
										<div class="description-content">
											<h4 class="description-title">{project.name}</h4>
											<p>
                                            {project.description}
											</p>
											<img class="mt-50 mb-50" src="/assets/img/project/project-details-2.jpg" alt="Image"/>
											<h4 class="description-title">Why Donate Our Products</h4>
											<p>
												Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temporadunt ut labore et dolore magnam aliquam quaerat voluptate enim ad minima veniam suscipit
											</p>
											<ul class="description-list">
												<li>Standard Lorem Sum Passage Used</li>
												<li>Build A Music Manager With Nuxt</li>
												<li>A Foldable Web Actually Mean</li>
												<li>Upcoming Web Design Conferences</li>
											</ul>
											<p>
												But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes,
											</p>
										</div>
									</div>
									<div class="col-lg-4 col-md-6 col-sm-10">
										<div class="rewards-box mt-md-50">
											<h4 class="title">Rewards</h4>
											<img src="/assets/img/project/project-rewards.jpg" alt="Image"/>
											<span class="rewards-count"><span>$530</span> or More</span>
											<p>
												But must explain to you how all this mistaken idea of denouncing plasue and praising pain was born
											</p>
											<div class="delivery-date">
												<span>25 Mar 20210</span>
												Estimated Delivery
											</div>
											<ul class="rewards-info">
												<li>
													<i class="far fa-user-circle"></i>5 Backers
												</li>
												<li>
													<i class="far fa-trophy-alt"></i>29 Rewards Left
												</li>
											</ul>
											<a href="events.html" class="main-btn">Select Rewards <i class="far fa-arrow-right"></i></a>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane fade" id="update" role="tabpanel">
								Update
							</div>
							<div class="tab-pane fade" id="bascker-list" role="tabpanel">
								Bascker List
							</div>
							<div class="tab-pane fade" id="reviews" role="tabpanel">
								Reviews
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        
        
        <Footer />
        


        </>
    )
}
export default ProjectDetails;