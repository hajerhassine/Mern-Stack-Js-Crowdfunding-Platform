import React from 'react'
import Footer from '../Footer/Footer'
import HeaderCreator from '../Header/HeaderCreator'
import { useDispatch, useSelector } from "react-redux";

const PartnersDetails = () => {

    const bankingpartners = useSelector(state => state.bankingpartners.bankingpartners);

    console.log(bankingpartners);

  return (
    
    <>
     <HeaderCreator></HeaderCreator>
    <section className="project-details-area section-gap-extra-bottom">
		<div className="container">
        {bankingpartners.map((bankingpartners)=>(
			<div className="row align-items-center justify-content-center">
				<div className="col-lg-6 col-md-10">
					<div className="project-thumb mb-md-50">
						<img src="assets/img/project/project-details.jpg" alt="Image"/>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="project-summery">
						<a href="#" className="category">Partner</a>
						<h3 className="project-title">
                        {bankingpartners.bank_name}
						</h3>

						<p>
                        {bankingpartners.description}
                        </p>
                        <h5> Special Offers</h5>
                        <p>
                        {bankingpartners.offer}
                        </p>

						
						
						
					</div>
                    <button type="submit" class="main-btn">Donate Now <i class="far fa-arrow-right"></i></button>
				</div>
			
			</div>
            ))}
		</div>
	</section>
    <Footer></Footer>
    
    </>
  )
}

export default PartnersDetails