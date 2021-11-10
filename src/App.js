import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './helper/ScrollToTop';
import { GlobalStyle } from "./components/common/styles/global.js";
import HomeOne from './HomeOne';
import About from './pages/about/About';
import CourseGrid from './pages/courses/CourseGrid';
import CourseList from './pages/courses/CourseList';
import CourseDetails from './pages/courses/CourseDetails';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import Contact from './pages/contact/Contact';
import Faq from './pages/faq/Faq';
import Team_Prosper from './Team_Prosper';
import Team_ceo from './Team_ceo';
import Team__coo from './Team__coo';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import {auth} from './firebase';
import AccountPage from './pages/AccountPage';



function App() {
    
    const [myauth, setMyAuth] = useState('')
    

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged
      (userAuth => {
          const user = {
              uid: userAuth?.uid,
              email: userAuth?.email
          }
          if(user){
            setMyAuth(user)
          }
          else{
            setMyAuth(null)
          }
      })
      return unsubscribe;
    }, []);


    return (
            <Router>
            <GlobalStyle />
            <ScrollToTop />
           
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={HomeOne} />
                <Route path={`${process.env.PUBLIC_URL + "/team-prosper"}`} component={Team_Prosper} />
                <Route path={`${process.env.PUBLIC_URL + "/team-wisdom"}`} component={Team_ceo} />
                <Route path={`${process.env.PUBLIC_URL + "/team-caleb"}`} component={Team__coo} />
                <Route path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
                <Route path={`${process.env.PUBLIC_URL + "/course-grid"}`} component={CourseGrid} />
                <Route path={`${process.env.PUBLIC_URL + "/course-list"}`} component={CourseList} />
                <Route path={`${process.env.PUBLIC_URL + "/course-details/:id"}`} component={CourseDetails} />
                <Route path={`${process.env.PUBLIC_URL + "/login"}`} component={Login} />
                <Route path={`${process.env.PUBLIC_URL + "/registration"}`} component={Register} />
                <Route path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
                <Route path={`${process.env.PUBLIC_URL + "/faq"}`} component={Faq} />
      
            </Switch>

            <ProtectedRoute path='/dashboard' component={Dashboard} isAuth={myauth} />
            <ProtectedRoute path='/account' component={AccountPage} isAuth={myauth} />
        
        </Router>
      
    )        
}
export default App;