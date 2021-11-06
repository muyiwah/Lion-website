import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/stickyMenu.js";
import {selectUserEmail} from "../../features/userSlice";
import { useSelector } from 'react-redux';
function StickyMenu() {
    // const user = JSON.parse(localStorage.getItem("user"));
    // const userEmail = user.email;

    const userEmail = useSelector(selectUserEmail);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const stickyMenu = document.querySelector(".sticky-menu");

            if (window.scrollY > 160) {
                stickyMenu.classList.add("sticky");
            } else {
                stickyMenu.classList.remove("sticky");
            }
        });
    });



    return (
        <Styles>
            {/* Sticky Menu */}
            {userEmail ?
            <section className="sticky-menu">
                <Container>
                    <Row>
                        <Col md="3">
                            <div className="logo">
                                <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/lion__logo.png"} alt="" /></Link>
                            </div>
                        </Col>
                        <Col md="9">
                            <div className="menu-box d-flex justify-content-end">
                                <ul className="nav menu-nav">
                                <li className="nav-item dropdown active">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Home</Link>
                                               
                                            </li>
                                            
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
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Forum</Link>
                                                
                                            </li>
                                            
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/Socialmediaboost"} data-toggle="dropdown">Social Media Boost </Link>
                                               
                                            </li>
                                            
                                </ul>
                                <div className="apply-btn">
                                    <Link to={process.env.PUBLIC_URL + "/dashboard"}><i className="las la-clipboard-list"></i>Dashboard</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            :
            <section className="sticky-menu">
                <Container>
                    <Row>
                        <Col md="3">
                            <div className="logo">
                                <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/lion__logo.png"} alt="" /></Link>
                            </div>
                        </Col>
                        <Col md="9">
                            <div className="menu-box d-flex justify-content-end">
                                <ul className="nav menu-nav">
                                <li className="nav-item dropdown active">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Home</Link>
                                               
                                            </li>
                                            
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
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Forum</Link>
                                                
                                            </li>
                                            
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/Socialmediaboost"} data-toggle="dropdown">Social Media Boost </Link>
                                               
                                            </li>
                                            
                                </ul>
                                <div className="apply-btn">
                                    <Link to={process.env.PUBLIC_URL + "/registration"}><i className="las la-clipboard-list"></i>Apply Now</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            }
        </Styles>
    )
}

export default StickyMenu