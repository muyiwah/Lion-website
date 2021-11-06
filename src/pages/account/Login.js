import React, { useEffect, useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import { Styles } from './styles/account.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {auth, db, provider} from '../../firebase';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import {setActiveUser, selectUserName, selectUserEmail, selectLastName, selectFirstName} from '../../features/userSlice';





function Login() {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();
    
    const userName = useSelector (selectUserName)
    const userEmail = useSelector (selectUserEmail)
    const userFirstName = useSelector (selectFirstName)
    const userLastName = useSelector (selectLastName)
    const dispatch = useDispatch()

const googleLogin = () => {
    auth.signInWithPopup(provider).then((result) => {
        dispatch(setActiveUser({ 
            userName: result.user.displayName,
            userEmail: result.user.email
        }));
    }).catch((error) => {
        console.log(error.message)
    })
}

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
      const res = await auth.signInWithPopup(googleProvider);
      const user = res.user;
      const query = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get();
      if (query.docs.length === 0) {
        await db.collection("users").add({
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

//   const loginNow = async () => {
//     try {
//       const user = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
      
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

 const loginNow= async (e)=>{ e.preventDefault();
     try{firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    var user = result.user; console.log(user);
    dispatch(setActiveUser({
        userName: result.user.name,
        userEmail: result.user.email,
        userFirstName: result.user.firstName,
        userLastName: result.user.lastName,
    }))
    history.push("/");
    // 
  })}
  catch(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    // if (user){history.push('/');}
  }}

    
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper login-page">

                {/* Header 2 */}
                <Header />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Log In" />

                {/* Login Area */}
                <section className="login-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="login-box">
                                    <div className="login-title text-center">
                                        <h3>Log In</h3>
                                    </div>
                                    <form id="form_login" className="form">
                                        <p className="form-control">
                                            <label htmlFor="login_user">Email</label>
                                            <input type="text" placeholder="Email" id="login_user" required value={email} onChange={e => setEmail(e.target.value)}  />
                                           
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="login_password">Password</label>
                                            <input type="password" placeholder="*******" id="login_password"  value={password} onChange={e => setPassword(e.target.value)}/>
                                        </p>
                                        <button onClick={loginNow} >Log In</button>
                                        <div className="save-forget-password d-flex justify-content-between">
                                            
                                            <div className="forget-password">
                                                <Link to={process.env.PUBLIC_URL + "/"}>Forget Password?</Link>
                                            </div>
                                        </div>
                                        <div className="not_account-btn text-center">
                                            <p>Haven't Any Account Yet? <Link to={process.env.PUBLIC_URL + "/registration"}>Click Here</Link></p>
                                        </div>
                                        <div className="social-login text-center">
                                            <p>Login With Social</p>
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item" onClick={googleLogin} ><a href={process.env.PUBLIC_URL + "/"} ><i className="fab fa-google" ></i> Google</a></li>
                                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i> Facebook</a></li>
                                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i> Twitter</a></li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Footer 2 */}
                <Footer />

            </div>
        </Styles>
    )
}

export default Login