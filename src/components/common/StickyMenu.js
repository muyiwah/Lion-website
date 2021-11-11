import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/stickyMenu.js";
import { auth } from '../../firebase.js';
function StickyMenu() {
 

    const [active, setActive] = useState();

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         const stickyMenu = document.querySelector(".sticky-menu");

    //         if (window.scrollY > 160) {
    //             stickyMenu.classList.add("sticky");
    //         } else {
    //             stickyMenu.classList.remove("sticky");
    //         }
    //     });
    // });

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
              setActive(window.pageYOffset > 200)
            );
          }
    }, [])

   
    return (
        <Styles>
            {/* Sticky Menu */}
           
            <section className={`${active ? 'sticky-menu sticky' : 'sticky-menu'} `}>
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
                                {/* <div className="apply-btn">
                                    <Link to={process.env.PUBLIC_URL + "/dashboard"}><i className="las la-clipboard-list"></i>Dashboard</Link>
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
           
        </Styles>
    )
}

export default StickyMenu