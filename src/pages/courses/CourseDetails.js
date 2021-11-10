import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import ReviewForm from './components/ReviewForm';
import PopularCourse from './components/PopularCourse';
import CourseTag from './components/CourseTag';
import { Styles } from './styles/course.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {auth, db} from '../../firebase'
import {useParams, useHistory} from 'react-router-dom'
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import './coursedetail.css';
import firebase from 'firebase';

function CourseDetails() {

    const history = useHistory();

    const login = () => {
        history.push('/login')
    };
    // const {
    //     params: { personId },
    //   } = match;
    const [user, setUser] = useState('');
    const [isPaid, setIsPaid] = useState(false);
    const [checkCourses, setCheckCourses] = useState('');
    //   
    const {id} =useParams()
    // console.log("this is id", id)
    const [myuser, setMyuser]=useState([])
    const [posts, setPosts]=useState([])
    useEffect(() => {
        db.collection('courses6')
          .onSnapshot((snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => {
                    return doc.data();
                })
            );
        });
    }, []); 

    // var userId = firebase.auth().currentUser?.uid
    // useEffect(() => {

    //     firebase.database().ref('users/' + userId).once("value", snap => {
    //         console.log(snap.val())
    //     })
    // }, []); 

    const show = posts.filter(post=> post.courseTitle==id)[0]
    // console.log("show",show); 
    useEffect(() => {
        const courseButton = document.querySelectorAll(".course-button");
        courseButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "course-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "course-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user)
            if(user){
                setUser(user)
            }
            else{
                setUser(null)
            }
    }, []);


    useEffect(() => {
        const paidCourse = JSON.parse(localStorage.getItem("user_course"));
        setCheckCourses(paidCourse)
        // setCheckCourses(paidCourse.course_title)
        //     if(paidCourse.course_title){
        //         setCheckCourses(paidCourse.course_title)
        //     }
        //     else{
        //         setCheckCourses(null)
        //     }
    }, []);

    console.log(checkCourses.My_course?.course_title)

      
   const config = {
    public_key: 'FLWPUBK_TEST-7b521e071b80d99d62e26ac695a0dbca-X',
    tx_ref: Date.now(),
    amount: 10,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: user?.email,
      phonenumber: '08101725687',
      name: user?.DisplayName,
    },
    customizations: {
      title: 'LionDynastyIntl',
      description: 'Payment for course',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Enroll for Course',
    callback: (response) => {
    //    console.log(response.status);
       if(response.status === 'successful') {

        var userId = firebase.auth().currentUser.uid
        setIsPaid(true)
        firebase.database()
            .ref('users/' + userId)
            .set(
            {
               My_course: {
                course_title: show.courseTitle,
                course_price: show.price,
                paid: true
                }
            }); 
              console.log('i have done it')
       } 

       else{
           console.log('payment not successful')
       }


      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };



    function EnrollButton() {
        if (user && checkCourses.My_course?.course_title !== show?.courseTitle){
            return <button type="button" className="enroll-btn" ><FlutterWaveButton {...fwConfig} /> </button>
            
        }

        else if(user && checkCourses.My_course?.course_title === show?.courseTitle ){
            return <button type="button" className="enroll-btn" >Already Enrolled</button>
        }

        else {
            return  <button type="button" className="enroll-btn" onClick={login}>Login to Enroll</button>
        }

    };

        
    return (
        <div className="main-wrapper course-details-page" >

            {/* Header 2 */}
            < Header />

            {/* Breadcroumb */}
            < BreadcrumbBox title="Course Details" />

            <Styles>
                {/* Course Details */}
                <section className="course-details-area">
                    <Container>
                        <Row>
                            <Col lg="9" md="8" sm="12">
                                <div className="course-details-top">
                                    <div className="heading">
                                        <h4>{show && show.courseTitle}</h4>
                                    </div>
                                    <div className="course-top-overview">
                                        <div className="d-flex overviews">
                                            <div className="author">
                                              { show && <img src={process.env.PUBLIC_URL +  `url(${show.imgUrl})`} alt="" />}
                                                <div className="author-name">
                                                    <h6>Author</h6>
                                                    <p>{show && show.authorName}</p>
                                                </div> 
                                            </div>
                                            <div className="category">
                                                <h6>Category</h6>
                                                <p>{show && show.categoryFb}</p>
                                            </div>
                                            <div className="rating">
                                                <h6>Rating</h6>
                                                <ul className="list-unstyled list-inline">
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star-half-alt"></i>
                                                    </li>
                                                    <li className="list-inline-item">(4.5)</li>
                                                </ul>
                                            </div>
                                            <div className="price">
                                                <h6>Price</h6>
                                                <p>{show && show.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-details-banner">
                                    {show ?    <img src={process.env.PUBLIC_URL + `${show.imgUrl}`} alt="" className="img-fluid" /> : <img src={process.env.PUBLIC_URL + `/assets/images/details-banner.jpg`} alt="" className="img-fluid" />}
                                    </div>
                                    <div className="course-tab-list">
                                        <Tab.Container defaultActiveKey="overview">
                                            <Nav className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="overview">Overview</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="curriculum">Curriculum</Nav.Link>
                                                </Nav.Item>
                                              
                                                <Nav.Item>
                                                    <Nav.Link eventKey="review">Reviews</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="overview" className="overview-tab">
                                                    <div className="course-desc">
                                                        <h5>Course Description</h5>
                                                        <p>{show && show.courseDesc}</p>
                                                    </div>
                                                    <div className="course-feature">
                                                        <h5>Course Feature</h5>
                                                        <p>{show && show.courseFeatureFb}</p>
                                                       
                                                    </div>
                                                    <div className="course-learn">
                                                        <h5>Learning Outcome</h5>
                                                        <p>{show && show.learningOutcomeFb}</p>
                                                       
                                                    </div>
                                                    <div className="course-share">
                                                        <h5>Share This Course</h5>
                                                        <ul className="social list-unstyled list-inline">
                                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-dribbble"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="curriculum" className="curriculum-tab">
                                                    <div className="course-curriculum">
                                                        <h5>Course Curriculum</h5>
                                                        <p>{show && show.curriculumFb}</p>
                                                    </div>
                                                   
                                                </Tab.Pane>
                                                
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" md="4" sm="12">
                                <div className="single-details-sidbar">
                                    <Row>
                                        <Col md="12">
                                            <div className="course-details-feature">
                                                <h5 className="title">Course Details</h5>
                                                <ul className="list-unstyled feature-list">
                                                    <li><i className="las la-calendar"></i> Start Date: <span>Dec 21, 2021</span></li>
                                                    <li><i className="las la-clock"></i> Duration: <span> One Time Offer</span></li>
                                                    <li><i className="las la-globe"></i> Language: <span>English</span></li>
                                                    <li><i className="las la-book"></i> Lectures: <span>51</span></li>
                                                    <li><i className="las la-bookmark"></i> Enrolled: <span>23</span></li>
                                                    <li><i className="las la-certificate"></i> Certification: <span>Yes</span></li>
                                                </ul>
                                               <EnrollButton />
                                            </div>
                                        </Col>
                                      
                                    </Row>
                                 
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>

            {/* Footer 2 */}
            <Footer />

        </div >
    )
}

export default CourseDetails