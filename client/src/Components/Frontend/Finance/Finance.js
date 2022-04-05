
import React, { Component  ,  useState, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BankingPartner from '../../BankingPartners/BankingPartner';
import  BankingPartnerList from '../../BankingPartners/BankingPartnerList/BankingPartners'


const Finance = () => {
    const dispatch = useDispatch()
    const bankingpartnersList = useSelector((state) => state.bankingpartnersList)
    const { loading, error, bankingpartners } = bankingpartnersList
    useEffect(() => {
		dispatch(BankingPartnerList())
	  }, [dispatch])

        return(
            <div>
            <Header/>

         <section class="event-area section-gap-extra-bottom">
                 <div class="container">
                     <div class="event-items">
                         <div class="single-event-item mb-30 wow fadeInUp" data-wow-delay="0s">
                             <div class="event-thumb">
                                 <img src="assets/img/event/01.jpg" alt="Image"/>
                             </div>
                             <div class="event-content">



                                 {bankingpartners.map((bankingpartner) => (
                                   <div className="col-lg-4 col-md-6 col-sm-10">
	                                  <div className="project-item mb-30">
                                         <BankingPartner bankingpartner={bankingpartner} > </BankingPartner>
                                        </div>
                                    </div>
                                        ))}
                                 <ul class="meta">
                                     <li>
                                         <a href="project-details.html" class="category">Bankings</a>
                                     </li>
                                     
                                 </ul>
                                 <h4 class="event-title"><a href="#">Combining UX Design & Psychology</a></h4>
                                 <p>
                                     Sed ut perspiciatis unde omnis iste natus error voluptatem accus laudantium totam rem aperiam eaque
                                 </p>
                             </div>
                             <div class="event-button">
                                 <a href="project-details.html" class="main-btn bordered-btn">Join Event <i class="far fa-arrow-right"></i></a>
                             </div>
                         </div>
                    
                         
                         <div class="view-more-btn text-center mt-80">
                             <a href="project-1.html" class="main-btn bordered-btn">View More Events <i class="far fa-arrow-right"></i></a>
                         </div>
                     </div>
                 </div>
             
             <script src="assets/js/jquery.min.js"></script>
             
             <script src="assets/js/bootstrap.min.js"></script>
             
             <script src="assets/js/jquery.inview.min.js"></script>

             <script src="assets/js/slick.min.js"></script>

             <script src="assets/js/lity.min.js"></script>
             
             <script src="assets/js/wow.min.js"></script>
             
             <script src="assets/js/main.js"></script>
             </section>
         <Footer/>
 </div>
    )
}

export default Finance;
