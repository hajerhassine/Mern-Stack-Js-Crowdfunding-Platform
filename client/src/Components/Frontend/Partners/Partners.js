import React from 'react'
import Footer from '../Footer/Footer'
import HeaderCreator from '../Header/HeaderCreator'
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";

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
                                <div class="event-thumb">
                                    <img src={`/uploads/${bankingpartners.bankImage}`} alt="Image"/>
                                </div>
                                
                                <div class="event-content">
                                    <ul class="meta">
                                        <li>
                                            <a href="project-details.html" class="category">Partner</a>
                                        </li>
                                       
                                    </ul>
                                    <h4 class="event-title"><a href="#">{bankingpartners.bank_name}</a></h4>
                                    <p>
                                    {bankingpartners.description}
                                    </p>
                                </div>
                                
                                <div class="event-button">
                                <Link to={{pathname:"/PartnersDetails" }}>  <a href="project-details.html" class="main-btn bordered-btn">More Details <i class="far fa-arrow-right"></i></a></Link>
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