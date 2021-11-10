import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {auth} from  '../firebase';
import './dashboard.css';
import course from '../asset/courses.svg';
import home from '../asset/courses.svg';
import account from '../asset/account.svg';
import logout from '../asset/out.svg';
import feature from '../asset/feature.svg';
import logo from '../asset/logo.png';
import play from '../asset/play.svg';
import forex from '../asset/forex.png';
import hamburger from '../asset/hamburger.svg';
import {useHistory} from 'react-router-dom';

function AccountPage() {
    const [openMenu, setOpenMenu] = useState(false);
    
    const mobileClick = () => {
        setOpenMenu(!openMenu)
    }

    const history = useHistory();

  

    return (
       
            <>
            <div classname='dashboard__main'>
                <div className="dashboard__container">
                    <div className="dashboard__sidebar">
                            <div className="logo">
                                <img src={logo} alt="" height='200px'/>
                            </div>
                            <div className="dashboard__links">
                                <Link to='/' className="my__links ">
                                  <img src={course} alt="" />  Home
                                </Link>
                                <Link  to='/dashboard' className="my__links ">
                                    <img src={course} alt="" />  My Courses
                                </Link>
                                <Link to='/account' className="my__links active">
                                    <img src={account} alt="" />  Account
                                </Link>
                            
                             
                            </div>
                    </div>
                    <div className="dashboard__content">
                        <div className="main__contentDash">
                               
                            <div className="dashboard__courses">
                                <h5>  Account Page</h5>
                            </div>
    
                            <div className="dashboardCourse__list">
                                      
                            </div>
    
                            <div className="dashboard__footer">
                            © copyright 2021. Lion Dynasty FX
                            </div>
                        </div>
                    </div>
                    <div className="header__mobile">
                        <img src={logo} alt="" width='80px'/>
                      <img onClick={mobileClick} src={hamburger} alt="" height='20px' />
                    </div>
                </div>
            </div>
    
            <div className={`${openMenu ? "mobile__menu active__menu " : 'mobile__menu'}`}>
            <div className="mobile__top">
            <div className="header__logo">
                <img src={logo} alt="" width='150px'/>
            </div>
                <button onClick={mobileClick}> ✖ </button>
            </div>
            <div className="dashboard__links">
                                <div className="my__links ">
                                    <Link to='/'> <img src={course} alt="" />  Home </Link>
                                </div>
                                <div className="my__links active">
                                    <Link to='/'> <img src={course} alt="" />  My Courses</Link>
                                </div>
                                <div className="my__links">
                                    <Link to='/'> <img src={account} alt="" />  Account</Link>
                                </div>
                             
                            </div>
            </div>
            </>
        )
    }
export default AccountPage
