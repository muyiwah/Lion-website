import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './common/Search';
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';
import { Styles } from "./styles/header.js";
import { setUserLogout, selectUserEmail } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import {auth} from '../firebase';


const Header = ()=> {

    // const user = JSON.parse(localStorage.getItem("user"));
    // const userEmail =  user.email ? user.email : null ;

    const userEmail = useSelector(selectUserEmail);
    const dispatch = useDispatch();
    const signOut = ()=>{
        auth.signOut()
        .then(()=>{
           dispatch( setUserLogout() ) 
            localStorage.clear();
        })
        .catch((err)=> console.log(err.message))
    }
    
        return (
            <Styles>
                {/* Topbar */}
               { userEmail ? 
                 <section className="top-bar"> 
                    <Container>
                        <Row>
                            <Col lg="6" md="5">
                               
                            </Col>
                            <Col lg="6" md="7">
                                <div className="bar-right d-flex justify-content-end">
                                    <ul className="list-unstyled list-inline bar-social">
                                        <li className="list-inline-item"><a href='https://facebook.com/LionDynastyIntl' rel="noopener noreferrer" target='_blank'><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href="https://twitter.com/LionDynastyIntl" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.instagram.com/liondynastyintl" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                    <ul className="list-unstyled list-inline bar-lang">
                                        <li className="list-inline-item">
                                            
                                        </li>
                                    </ul>
                                    <ul className="list-unstyled list-inline bar-login">
                                        <li className="list-inline-item"  ><Link to={process.env.PUBLIC_URL + "/"} onClick={signOut}><i className="las la-user-edit"></i>Sign Out</Link></li>
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/dashboard"}><i className="las la-user-edit"></i>Dashboard</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                :
                 <section className="top-bar"> 
                    <Container>
                        <Row>
                            <Col lg="6" md="5">
                               
                            </Col>
                            <Col lg="6" md="7">
                                <div className="bar-right d-flex justify-content-end">
                                    <ul className="list-unstyled list-inline bar-social">
                                        <li className="list-inline-item"><a href='https://facebook.com/LionDynastyIntl' rel="noopener noreferrer" target='_blank'><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href="https://twitter.com/LionDynastyIntl" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.instagram.com/liondynastyintl" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                    <ul className="list-unstyled list-inline bar-lang">
                                        <li className="list-inline-item">
                                            
                                        </li>
                                    </ul>
                                    <ul className="list-unstyled list-inline bar-login">
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/login"}><i className="las la-user"></i>Log In</Link></li>
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/registration"}><i className="las la-user-edit"></i>Register</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
}

                {/* Logo Area */}
               { userEmail ?
                <section className="logo-area">
                    <Container>
                        <Row>
                            <Col md="3">
                                <div className="logo">
                                    <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/lion__logo.png"} alt="" /></Link>
                                </div>
                            </Col>
                            <Col md="9">
                                <div className="logo-contact-box d-flex justify-content-end">
                                    <div className="emcontact-box d-flex">
                                        <div className="box-icon">
                                            <i className="flaticon-phone-call"></i>
                                        </div>
                                        <div className="box-content">
                                            <p>Call Us Now</p>
                                            <span>(90) 5488713913</span>
                                        </div>
                                    </div>
                                    <div className="emcontact-box d-flex">
                                        <div className="box-icon">
                                            <i className="flaticon-envelope"></i>
                                        </div>
                                        <div className="box-content">
                                            <p>Enquiry</p>
                                            <span>admin@liondynastyintl.com</span>
                                        </div>
                                    </div>
                                    <div className="apply-btn">
                                        <Link to={process.env.PUBLIC_URL + "/dashboard"}><i className="las la-clipboard-list"></i>Dashboard</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section> 
                 :
                <section className="logo-area">
                    <Container>
                        <Row>
                            <Col md="3">
                                <div className="logo">
                                    <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/lion__logo.png"} alt="" /></Link>
                                </div>
                            </Col>
                            <Col md="9">
                                <div className="logo-contact-box d-flex justify-content-end">
                                    <div className="emcontact-box d-flex">
                                        <div className="box-icon">
                                            <i className="flaticon-phone-call"></i>
                                        </div>
                                        <div className="box-content">
                                            <p>Call Us Now</p>
                                            <span>(90) 5488713913</span>
                                        </div>
                                    </div>
                                    <div className="emcontact-box d-flex">
                                        <div className="box-icon">
                                            <i className="flaticon-envelope"></i>
                                        </div>
                                        <div className="box-content">
                                            <p>Enquiry</p>
                                            <span>admin@liondynastyintl.com</span>
                                        </div>
                                    </div>
                                    <div className="apply-btn">
                                        <Link to={process.env.PUBLIC_URL + "/registration"}><i className="las la-clipboard-list"></i>Apply Now</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                }

                {/* Navbar */}
                <section className="main-menu">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="main-menu-box">
                                    <div className="menu-box d-flex justify-content-between">
                                        <ul className="nav menu-nav">
                                            <li className="nav-item dropdown active">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Home</Link>
                                               
                                            </li>
                                            {/* <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Pages <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>About Us</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery"}>Gallery</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/login"}>Log In</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/registration"}>Registration</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/faq"}>Faq</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/404"}>404</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/coming-soon"}>Coming Soon</Link></li>
                                                </ul>
                                            </li> */}
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/course-grid"} data-toggle="dropdown">Courses </Link>
                                                
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/about"} data-toggle="dropdown">About Us </Link>
                                                
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/contact"} data-toggle="dropdown">Contact</Link>
                                                
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown"></Link>
                                                
                                            </li>
                                            
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/Socialmediaboost"} data-toggle="dropdown">Social Media Boost </Link>
                                               
                                            </li>
                                            
                                           
                                        </ul>
                                        <ul className="nav search-cart-bar">
                                            <li className="nav-item search-box">
                                                <Search />
                                            </li>
                                       
                                            
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Sticky Menu */}
                <StickyMenu />

                {/* Mobile Menu */}
                <MobileMenu />
            </Styles>
        )
    }


export default Header
