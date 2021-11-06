import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import { Styles } from './styles/account.js';
import Header from '../../components/Header';
import {auth, db, provider} from '../../firebase';
import Footer from '../../components/Footer';
import {useDispatch} from 'react-redux';
import {login} from '../../features/userSlice';



function Register() {
 
    const history = useHistory();
    const [userNameEmail, setUsernameEmail] = useState('');
    
    const [userNamePassword, setUsernamePassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    const [userName, setUsername] = useState('');

    // const dispatch = useDispatch()
var name2 = ""
   
    // const parameter = {
    //     Fistname: firstName,
    //     Lastname: lastName,
    //     Username: userName,
    // } 
  
    const setUserData = (user)=> {
        db.collection("users").doc().set({
            Firstname:firstName,
            Lastname: lastName,
            Username: userName,
            Email: email,
            // Emailverified:result.user.emailVerified,
            uid:user.uid
            
        },{
            merge: true
        }
        )
        
    }
    const d= new Date().toISOString().slice(0, 10);
    const registerWithEmailAndPassword = (e) => {e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password)
      .then( async (result)=>{
          if (result.user.emailVerified  === false){
              await (await auth.currentUser).sendEmailVerification({
                  handleCodeInApp:true,
                  url:"http://localhost:3000/"
              })
               db.collection("users").doc().set({
            Firstname:firstName,
            Lastname: lastName,
            Username: userName,
            Email: email,
            Emailverified:result.user.emailVerified,
            uid:result.user.uid,
            Date: d
        },{
            merge: true
        }
        )
     
              setFirstName("")
              setLastName("")
              setUsername("")
              setEmail("")
              setPassword("")
            history.push("/dashboard") 
          }
          else {
              const payload= {
                  ...result.user
              }
           setUserData(payload)
          }
        })
         
      .catch((err)=>
      {console.log(err);})
          
      };
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper registration-page">

                <Header />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Registration" />

                {/* Registration Area */}
                <section className="registration-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="registration-box">
                                    <div className="registration-title text-center">
                                        <h3>Registration</h3>
                                    </div>
                                    <form id="form_registration" className="form">
                                        <p className="form-control">
                                            <label htmlFor="registration_fname">First Name</label>
                                            <input type="text" placeholder="First name" id="registration_fname" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_lname">Last Name</label>
                                            <input type="text" placeholder="Last name" id="registration_lname" value={lastName} onChange={e => setLastName(e.target.value)}/>

                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_email">Email Address</label>
                                            <input type="email" placeholder="Email address" id="registration_email" value={email} onChange={e=> setEmail(e.target.value)}/>
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_user">User Name</label>
                                            <input type="text" placeholder="Username" id="registration_user" value={userName} onChange={e=> setUsername(e.target.value)}/>
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_password">Password</label>
                                            <input type="password" placeholder="*******" id="registration_password" value={password} onChange={e=> setPassword(e.target.value)}/>
                                            <span className="registration_input-msg"></span>
                                        </p>
                                 
                                        <button onClick={registerWithEmailAndPassword}>Register Now</button>
                                    </form>
                                    <div className="have_account-btn text-center">
                                        <p>Already have an account? <Link to="/login">Login Here</Link></p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Footer />

            </div>
        </Styles>
    )
}

export default Register