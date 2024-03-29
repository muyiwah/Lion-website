import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/mobileMenu.js";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase.js';
import { selectUserEmail, setUserLogout } from '../../features/userSlice.js';

function MobileMenu() {
    const [user, setUser] = useState('');
    useEffect(() => {
        // Mobile Menu

        const hmBtn = document.getElementById("mb-sidebar-btn");

        if (hmBtn) {
            const mdSidebarOverlay = document.getElementById("mb-sidebar-overlay");
            const mdSidebarBody = document.getElementById("mb-sidebar-body");
            const mdSidebarExit = document.getElementById("close-mb-sidebar");

            hmBtn.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.toggle("visible");
                mdSidebarBody.classList.toggle("opened");
            });

            mdSidebarOverlay.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });

            mdSidebarExit.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });
        }

        // Menu Accordion -----------------
        const menuButton = document.querySelectorAll(".mb-menu-button");
        menuButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "mb-menu-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "mb-menu-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });

    const dispatch = useDispatch();
    const signOut = ()=>{
        auth.signOut()
        .then(()=>{
           dispatch( setUserLogout() ) 
            localStorage.clear();
        })
        .catch((err)=> console.log(err.message))
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged
        (userAuth => {
            const user = {
                uid: userAuth?.uid,
                email: userAuth?.email
            }
            if(userAuth){
                setUser(userAuth)
            }
            else{
                setUser(null)
            }
        })
        return unsubscribe;
      }, []);


    return (


      
        
        <Styles>
      { user ?     
            <section className="mobile-menu-area">
                <Container>
                    <Row>
                        <Col md="0" sm="12">
                            <div className="mb-topbar d-flex justify-content-between">
                                <div className="topbar-item">
                                    <p><i className="las la-phone"></i>(90) 5488713913</p>
                                </div>
                                <div className="topbar-item">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/"} onClick={signOut}><i className="las la-user-edit"></i>Sign Out</Link> </li>
                                        <li className="list-inline-item">/</li>
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/dashboard"}>Dashboard</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-logo-area d-flex justify-content-between">
                                <div className="mb-logo-box d-flex">
                                    <div className="hm-button">
                                        <a href={process.env.PUBLIC_URL + "/"} id="mb-sidebar-btn">
                                            <i className="las la-bars"></i>
                                        </a>
                                    </div>
                                    <div className="mb-logo">
                                        <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/lion__logo.png"} alt="" /></Link>
                                    </div>
                                </div>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            :
            <section className="mobile-menu-area">
                <Container>
                    <Row>
                        <Col md="0" sm="12">
                            <div className="mb-topbar d-flex justify-content-between">
                                <div className="topbar-item">
                                    <p><i className="las la-phone"></i>(90) 5488713913</p>
                                </div>
                                <div className="topbar-item">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/login"}>Log In</Link></li>
                                        <li className="list-inline-item">/</li>
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/registration"}>Register</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-logo-area d-flex justify-content-between">
                                <div className="mb-logo-box d-flex">
                                    <div className="hm-button">
                                        <a href={process.env.PUBLIC_URL + "/"} id="mb-sidebar-btn">
                                            <i className="las la-bars"></i>
                                        </a>
                                    </div>
                                    <div className="mb-logo">
                                        <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/lion__logo.png"} alt="" /></Link>
                                    </div>
                                </div>
                               
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
}
            {/* Mobile Menu Sidebar */}
            <section className="mb-sidebar" id="mb-sidebar-body">
                <div className="mb-sidebar-heading d-flex justify-content-between">
                    <div><h5>Menu</h5></div>
                    <div><a href={process.env.PUBLIC_URL + "/"} id="close-mb-sidebar"><i className="las la-times"></i></a></div>
                </div>
                <div className="mb-sidebar-menu">
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                        <Link to={process.env.PUBLIC_URL + "/"}>HOME</Link>

                        </button>
                        
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                        <Link to={process.env.PUBLIC_URL + "/about"}>ABOUT US</Link>

                        </button>
                        
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                        <Link to={process.env.PUBLIC_URL + "/course-grid"}>COURSES</Link>

                        </button>
                        
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                        <Link to={process.env.PUBLIC_URL + "/contact"}>CONTACT</Link>
                        </button>
                       
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                        <Link to={process.env.PUBLIC_URL + "/"}>FORUM</Link>
                        </button>
                       
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                        <Link to={process.env.PUBLIC_URL + "/socialmediaboost"}>SOCIAL MEDIA BOOST</Link>
                        </button>
                        
                    </div>
                   
                </div>
            </section>
            <div className="mb-sidebar-overlay" id="mb-sidebar-overlay"></div>
        </Styles>
    )
}

export default MobileMenu