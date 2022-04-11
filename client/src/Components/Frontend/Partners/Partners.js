import React from 'react'
import Footer from '../Footer/Footer'
import HeaderCreator from '../Header/HeaderCreator'
import { useDispatch, useSelector } from "react-redux";

const Partners = () => {

const bankingpartners = useSelector(state => state.bankingpartners.bankingpartners);

  console.log(bankingpartners);
  return (
    <>
    <HeaderCreator></HeaderCreator>
    <section class="event-area section-gap-extra-bottom">
                    <div class="container">
                    {bankingpartners.map((bankingpartners)=>(
                        <div class="event-items">
                            <div class="single-event-item mb-30 wow fadeInUp" data-wow-delay="0s">
                                {/* <div class="event-thumb">
                                    <img src="assets/img/event/01.jpg" alt="Image"/>
                                </div> */}
                                
                                <div class="event-content">
                                    <ul class="meta">
                                        <li>
                                            <a href="project-details.html" class="category">{bankingpartners.bank_name}</a>
                                        </li>
                                       
                                    </ul>
                                    {/* <h4 class="event-title"><a href="#">Combining UX Design & Psychology</a></h4> */}
                                    <p>
                                    {bankingpartners.description}
                                    </p>
                                </div>
                                
                                <div class="event-button">
                                    <a href="project-details.html" class="main-btn bordered-btn">More Details <i class="far fa-arrow-right"></i></a>
                                </div>
                                
                            </div>
    
                            
                        </div>
                        ))}
                    </div>
                
                <script src="assets/js/jquery.min.js"></script>
                
                <script src="assets/js/bootstrap.min.js"></script>
                
                <script src="assets/js/jquery.inview.min.js"></script>

                <script src="assets/js/slick.min.js"></script>

                <script src="assets/js/lity.min.js"></script>
                
                <script src="assets/js/wow.min.js"></script>
                
                <script src="assets/js/main.js"></script>
                </section>
                <Footer></Footer>
    </>
  )
}

export default Partners