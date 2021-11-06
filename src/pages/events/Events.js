import React, { useEffect } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Styles } from '../../pages/courses/styles/course.js';

function SocialMedia() {

    return (
        <div className="main-wrapper course-details-page" >

            {/* Header 2 */}
            <Header/>

            {/* Breadcroumb */}
            < BreadcrumbBox title="Social Media Boost" />

            <Styles>
                {/* Course Details */}
                <section className="course-details-area">
                    <Container>
                        <Row>
                            <Col lg="10" md="12" sm="12">
                            <div className="single-details-sidbar">
                                   
                                            <div className="course-details-feature">

                                <h5>WELCOME TO LIONDNA SM BOOST</h5>
                                <br/>

                                                            <p> We give your social media accounts a new look by boosting your followers. World wide followers consists of Different countries ( AUSTRALIA, UK, US, INDIA, MOST AFRICAN COUNTRIES etc ) We also have targeted services if you require such. </p>
                                                            <br/>
                                                            <p>
                                                            PLEASE NOTE - No password is required. Followers are real people from around the world, not bot. Account must be on Public while we’re working... You must not change your username till we’re done working for you.. Followers takes 24/72 hours (1/3 days) to complete and sometimes for some reason there may be a little delay be that as it may followers/reactions are guaranteed to be delivered. Likes and Views when ordered takes 5/20 minutes to start
                                                            </p>
                                                            <br/>
                                                            <br/>
                                                            <a className="enroll-btn" href= "https://flutterwave.com/pay/opx8oijticox" rel="noopener noreferrer">Pay for a boost package</a>
                            </div>
                            <br/>
                            <br/>


                         </div>

                                <div className="course-details-top">
                                    
                               
                                                        
                                   
                                    <div className="course-tab-list">
                                        <Tab.Container defaultActiveKey="overview">
                                            <Nav className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="overview">Facebook Package</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="curriculum">Instagram Package</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="instructor">Twitter Package</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="review">TikTok Package</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="overview" className="curriculum-tab">
                                                    
                                                <div className="course-element">
                                                        <h5>Facebook Package</h5>
                                                        <div className="course-item">
                                                            <button className="course-button active"> Likes <span> Prices </span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="lecture-title">1,000 LIKES </span>
                                                                        <span className="lecture-duration">N1,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">2,000 LIKES </span>
                                                                        <span className="lecture-duration">N2,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">3,000 LIKES</span>
                                                                        <span className="lecture-duration">N3,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">
                                                                            5,000 LIKES 
                                                                        </span>
                                                                        <span className="lecture-duration">N6,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">10,000 LIKES</span>
                                                                        <span className="lecture-duration">N12,000</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <button className="course-button active"> Views <span> Prices </span></button>
    
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="lecture-title">1,000 VIEWS </span>
                                                                        <span className="lecture-duration">N800</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">2,000 VIEWS </span>
                                                                        <span className="lecture-duration">N1,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">3,000 VIEWS</span>
                                                                        <span className="lecture-duration">N2,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">
                                                                            5,000 VIEWS 
                                                                        </span>
                                                                        <span className="lecture-duration">N3,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">10,000 VIEWS</span>
                                                                        <span className="lecture-duration">N6,500</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <button className="course-button active"> Followers <span> Prices </span></button>

                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="lecture-title">1,000 FOLLOWERS </span>
                                                                        <span className="lecture-duration">N10,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">2,000 FOLLOWERS </span>
                                                                        <span className="lecture-duration">N28,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">3,000 FOLLOWERS</span>
                                                                        <span className="lecture-duration">N45,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">
                                                                            5,000 FOLLOWERS 
                                                                        </span>
                                                                        <span className="lecture-duration">N85,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">10,000 FOLLOWERS</span>
                                                                        <span className="lecture-duration">N150,000</span>
                                                                    </li>
                                                                    
                                                                </ul>
                                                            </div>
                                                        </div>
                                                       
                                                        
                                                    </div>
                                                    
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="curriculum" className="curriculum-tab">
                                                   
                                                    <div className="course-element">
                                                        <h5>Instagram Package</h5>
                                                        <div className="course-item">
                                                            <button className="course-button active"> Likes <span> Prices </span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="lecture-title">1,000 LIKES </span>
                                                                        <span className="lecture-duration">N1,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">2,000 LIKES </span>
                                                                        <span className="lecture-duration">N2,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">3,000 LIKES</span>
                                                                        <span className="lecture-duration">N3,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">
                                                                            5,000 LIKES 
                                                                        </span>
                                                                        <span className="lecture-duration">N6,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">10,000 LIKES</span>
                                                                        <span className="lecture-duration">N12,000</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <button className="course-button active"> Views <span> Prices </span></button>
    
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="lecture-title">1,000 VIEWS </span>
                                                                        <span className="lecture-duration">N800</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">2,000 VIEWS </span>
                                                                        <span className="lecture-duration">N1,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">3,000 VIEWS</span>
                                                                        <span className="lecture-duration">N2,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">
                                                                            5,000 VIEWS 
                                                                        </span>
                                                                        <span className="lecture-duration">N3,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">10,000 VIEWS</span>
                                                                        <span className="lecture-duration">N6,500</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <button className="course-button active"> Followers <span> Prices </span></button>

                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="lecture-title">1,000 FOLLOWERS </span>
                                                                        <span className="lecture-duration">N7,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">2,000 FOLLOWERS </span>
                                                                        <span className="lecture-duration">N13,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">3,000 FOLLOWERS</span>
                                                                        <span className="lecture-duration">N18,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">
                                                                            5,000 FOLLOWERS 
                                                                        </span>
                                                                        <span className="lecture-duration">N30,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">10,000 FOLLOWERS</span>
                                                                        <span className="lecture-duration">N60,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">20,000 FOLLOWERS</span>
                                                                        <span className="lecture-duration">N120,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">50,000 FOLLOWERS</span>
                                                                        <span className="lecture-duration">N250,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">100,000 FOLLOWERS</span>
                                                                        <span className="lecture-duration">N350,000</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                       
                                                        
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="instructor" className="curriculum-tab">
                                                <div className="course-element">
                                                        <h5>Twitter Package</h5>
                                                        <div className="course-item">
                                                            <button className="course-button active"> Likes <span> Prices </span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="lecture-title">1,000 LIKES </span>
                                                                        <span className="lecture-duration">N1,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">2,000 LIKES </span>
                                                                        <span className="lecture-duration">N2,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">3,000 LIKES</span>
                                                                        <span className="lecture-duration">N3,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">
                                                                            5,000 LIKES 
                                                                        </span>
                                                                        <span className="lecture-duration">N6,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">10,000 LIKES</span>
                                                                        <span className="lecture-duration">N12,000</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <button className="course-button active"> Views <span> Prices </span></button>
    
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="lecture-title">1,000 VIEWS </span>
                                                                        <span className="lecture-duration">N800</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">2,000 VIEWS </span>
                                                                        <span className="lecture-duration">N1,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">3,000 VIEWS</span>
                                                                        <span className="lecture-duration">N2,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">
                                                                            5,000 VIEWS 
                                                                        </span>
                                                                        <span className="lecture-duration">N3,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">10,000 VIEWS</span>
                                                                        <span className="lecture-duration">N6,500</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <button className="course-button active"> Followers <span> Prices </span></button>

                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="lecture-title">1,000 FOLLOWERS </span>
                                                                        <span className="lecture-duration">N8,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">2,000 FOLLOWERS </span>
                                                                        <span className="lecture-duration">N25,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">3,000 FOLLOWERS</span>
                                                                        <span className="lecture-duration">N40,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">
                                                                            5,000 FOLLOWERS 
                                                                        </span>
                                                                        <span className="lecture-duration">N75,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">10,000 FOLLOWERS</span>
                                                                        <span className="lecture-duration">N145,000</span>
                                                                    </li>
                                                                    
                                                                </ul>
                                                            </div>
                                                        </div>
                                                       
                                                        
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="review" className="curriculum-tab">
                                                <div className="course-element">
                                                        <h5>Tiktok Package</h5>
                                                        <div className="course-item">
                                                            <button className="course-button active"> Likes <span> Prices </span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="lecture-title">1,000 LIKES </span>
                                                                        <span className="lecture-duration">N1,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">2,000 LIKES </span>
                                                                        <span className="lecture-duration">N2,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">3,000 LIKES</span>
                                                                        <span className="lecture-duration">N3,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">
                                                                            5,000 LIKES 
                                                                        </span>
                                                                        <span className="lecture-duration">N6,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">10,000 LIKES</span>
                                                                        <span className="lecture-duration">N12,000</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <button className="course-button active"> Views <span> Prices </span></button>
    
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="lecture-title">1,000 VIEWS </span>
                                                                        <span className="lecture-duration">N800</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">2,000 VIEWS </span>
                                                                        <span className="lecture-duration">N1,500</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">3,000 VIEWS</span>
                                                                        <span className="lecture-duration">N2,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">
                                                                            5,000 VIEWS 
                                                                        </span>
                                                                        <span className="lecture-duration">N3,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">10,000 VIEWS</span>
                                                                        <span className="lecture-duration">N6,500</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <button className="course-button active"> Followers <span> Prices </span></button>

                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="lecture-title">1,000 FOLLOWERS </span>
                                                                        <span className="lecture-duration">N9,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">2,000 FOLLOWERS </span>
                                                                        <span className="lecture-duration">N25,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">3,000 FOLLOWERS</span>
                                                                        <span className="lecture-duration">N40,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">
                                                                            5,000 FOLLOWERS 
                                                                        </span>
                                                                        <span className="lecture-duration">N65,000</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="lecture-title">10,000 FOLLOWERS</span>
                                                                        <span className="lecture-duration">N120,000</span>
                                                                    </li>
                                                                    
                                                                </ul>
                                                            </div>
                                                        </div>
                                                       
                                                        
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </Col>
                           
                        </Row>
                    </Container>
                </section>
            </Styles>

            <Footer/>

        </div >
    )
}

export default SocialMedia