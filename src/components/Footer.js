import React, { Component } from 'react';
import Datas from '../data/footer/footer.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import { Styles } from "./styles/footerOne.js";

class Footer extends Component {
    render() {
        return (
            <Styles>
                {/* Footer Area */}
                <footer className="footer1" style={{ backgroundImage: `url(assets/images/${process.env.PUBLIC_URL + Datas.backgroundImage})` }}>
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="footer-logo-info">
                                    <img src={process.env.PUBLIC_URL + "/assets/lion__logo.png"} alt="" className="img-fluid" />
                                    <ul className="list-unstyled">
                                        <li><i className="las la-envelope"></i>admin@liondynastyintl.com</li>
                                        <li><i className="las la-phone"></i>(90) 5488713913</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="f-links">
                                    <h5>Useful Links</h5>
                                    <ul className="list-unstyled">
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i> Home</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/about"}><i className="las la-angle-right"></i> About </Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/course-grid"}><i className="las la-angle-right"></i>Courses </Link></li>
                                    </ul>
                                    <ul className="list-unstyled">
                                        <li><Link to={process.env.PUBLIC_URL + "/socialmediaboost"}><i className="las la-angle-right"></i>Socail Media Boost</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/contact"}><i className="las la-angle-right"></i>Contact</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>Forum</Link></li>
                                    </ul>
                                </div>
                            </Col>
                          
                        </Row>
                    </Container>
                </footer>

                {/* Copyright Area */}
                <section className="copyright-area">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="copy-text">
                                    <p>Copyright by Lion Dynasty Int'l. Powered by Harvilion Technologies.</p>
                                </div>
                            </Col>
                            <Col md="6" className="text-right">
                                <ul className="social list-unstyled list-inline">
                                    <li className="list-inline-item"><a href='https://facebook.com/LionDynastyIntl' rel="noopener noreferrer" target='_blank'><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="https://twitter.com/LionDynastyIntl" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="https://www.instagram.com/liondynastyintl" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>

                    {/* Back To Top */}
                    <BackToTop/>
                </section>
            </Styles>
        )
    }
}

export default Footer
