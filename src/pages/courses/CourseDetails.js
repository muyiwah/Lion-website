import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import ReviewForm from './components/ReviewForm';
import PopularCourse from './components/PopularCourse';
import CourseTag from './components/CourseTag';
import { Styles } from './styles/course.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {db} from '../../firebase'
import {useParams} from 'react-router-dom'


function CourseDetails() {
    // const {
    //     params: { personId },
    //   } = match;

    //   
    const {id} =useParams()
    console.log("this is id", id)
    const [posts, setPosts]=useState([])
    useEffect(() => {
        db.collection('courses6')
          .onSnapshot((snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => {
                    return doc.data();
                })
            );if(posts) console.log("Course Details=",posts);
        });
    }, []); 

    const show = posts.filter(post=> post.courseTitle==id)[0]
    console.log("show",show); 
    if (show!== []) {console.log(show);}
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
                                                {/* <Nav.Item>
                                                    <Nav.Link eventKey="instructor">Instructors</Nav.Link>
                                                </Nav.Item> */}
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
                                                        {/* <ul className="list-unstyled">
                                                            <li><i className="las la-arrow-right"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere excepturi aliquid dolor ducimus.</li>
                                                            <li><i className="las la-arrow-right"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere excepturi aliquid .</li>
                                                            <li><i className="las la-arrow-right"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere excepturi.</li>
                                                        </ul> */}
                                                    </div>
                                                    <div className="course-learn">
                                                        <h5>Learning Outcome</h5>
                                                        <p>{show && show.learningOutcomeFb}</p>
                                                        {/* <ul className="list-unstyled">
                                                            <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere Quae impedit eligendi perspiciatis animi maxime ab minus corporis omnis similique excepturi.</li>
                                                            <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere Quae impedit eligendi perspiciatis animi maxime ab minus corporis omnis similique excepturi.</li>
                                                            <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere Quae impedit eligendi perspiciatis animi maxime ab minus corporis omnis similique excepturi.</li>
                                                            <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere Quae impedit eligendi perspiciatis animi maxime ab minus corporis omnis similique excepturi.</li> */}
                                                        {/* </ul> */}
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
                                                    {/* <div className="course-element">
                                                        <h5>Course Content</h5>
                                                        <div className="course-item">
                                                            <button className="course-button active">Part 1:  <span>04 Lectures</span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-play"></i> Lecture: 01</span>
                                                                        <span className="lecture-title"></span>
                                                                        <span className="lecture-duration">00:00</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-play"></i> Lecture: 02</span>
                                                                        <span className="lecture-title"></span>
                                                                        <span className="lecture-duration">00:00</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-play"></i> Lecture: 03</span>
                                                                        <span className="lecture-title"></span>
                                                                        <span className="lecture-duration">00:00</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-play"></i> Lecture: 04</span>
                                                                        <span className="lecture-title"></span>
                                                                        <span className="lecture-duration">00:00</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="course-item">
                                                            <button className="course-button active">Part 2: <span>03 Lectures </span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-play"></i> Lecture: 01</span>
                                                                        <span className="lecture-title"></span>
                                                                        <span className="lecture-duration">00:00</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-play"></i> Lecture: 02</span>
                                                                        <span className="lecture-title"></span>
                                                                        <span className="lecture-duration">00:00</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-play"></i> Lecture: 03</span>
                                                                        <span className="lecture-title"></span>
                                                                        <span className="lecture-duration">00:00</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="course-item">
                                                            <button className="course-button active">Part 3:  <span>04 Lectures </span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-play"></i> Lecture: 01</span>
                                                                        <span className="lecture-title"></span>
                                                                        <span className="lecture-duration">00:00</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-play"></i> Lecture: 02</span>
                                                                        <span className="lecture-title"></span>
                                                                        <span className="lecture-duration">00:00</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-play"></i> Lecture: 03</span>
                                                                        <span className="lecture-title"></span>
                                                                        <span className="lecture-duration">00:00</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </Tab.Pane>
                                                {/* <Tab.Pane eventKey="instructor" className="instructor-tab">
                                                    <h5>Course Instructors</h5>
                                                    <div className="instructor-item">
                                                        <Row>
                                                            <Col md="4">
                                                                <div className="instructor-img">
                                                                    <img src={process.env.PUBLIC_URL + `/assets/images/instructor-1.jpg`} alt="" className="img-fluid" />
                                                                </div>
                                                            </Col>
                                                            <Col md="8">
                                                                <div className="instructor-content">
                                                                    <div className="instructor-box">
                                                                        <div className="top-content d-flex justify-content-between">
                                                                            <div className="instructor-name">
                                                                                <h6>{show && show.authorName}</h6>
                                                                                <p>Senior Instructor</p>
                                                                            </div>
                                                                            <div className="instructor-social">
                                                                                <ul className="social list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="instructor-desk">
                                                                            <p></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div className="instructor-item">
                                                        <Row>
                                                            <Col md="4">
                                                                <div className="instructor-img">
                                                                    <img src={process.env.PUBLIC_URL + `/assets/images/instructor-2.jpg`} alt="" className="img-fluid" />
                                                                </div>
                                                            </Col>
                                                            <Col md="8">
                                                                <div className="instructor-content">
                                                                    <div className="instructor-box">
                                                                        <div className="top-content d-flex justify-content-between">
                                                                            <div className="instructor-name">
                                                                                <h6></h6>
                                                                                <p>Senior Lecturer</p>
                                                                            </div>
                                                                            <div className="instructor-social">
                                                                                <ul className="social list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="instructor-desk">
                                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perferendis delectus voluptate reiciendis animi nisi nemo tenetur sequi cum laudantium sit totam libero quasi ducimus accusantium numquam eaque.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div className="instructor-item">
                                                        <Row>
                                                            <Col md="4">
                                                                <div className="instructor-img">
                                                                    <img src={process.env.PUBLIC_URL + `/assets/images/instructor-3.jpg`} alt="" className="img-fluid" />
                                                                </div>
                                                            </Col>
                                                            <Col md="8">
                                                                <div className="instructor-content">
                                                                    <div className="instructor-box">
                                                                        <div className="top-content d-flex justify-content-between">
                                                                            <div className="instructor-name">
                                                                                <h6>David Show</h6>
                                                                                <p>Senior Lecturer</p>
                                                                            </div>
                                                                            <div className="instructor-social">
                                                                                <ul className="social list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="instructor-desk">
                                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perferendis delectus voluptate reiciendis animi nisi nemo tenetur sequi cum laudantium sit totam libero quasi ducimus accusantium numquam eaque.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Tab.Pane> */}
                                                {/* <Tab.Pane eventKey="review" className="review-tab">
                                                    <Row>
                                                        <Col md="12">
                                                            <div className="review-comments">
                                                                <h5>Course Reviews</h5>
                                                                <div className="comment-box d-flex">
                                                                    <div className="comment-image">
                                                                        <img src={process.env.PUBLIC_URL + `/assets/images/testimonial-2.jpg`} alt="" />
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div className="content-title d-flex justify-content-between">
                                                                            <div className="comment-writer">
                                                                                <h6>Mark Shadow</h6>
                                                                                <p>Mar 26, 2020 | 06:30pm</p>
                                                                                <ul className="list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star-half-alt"></i></li>
                                                                                    <li className="list-inline-item">(4.5)</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="reply-btn">
                                                                                <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-desc">
                                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium nostrum dolore odit asperiores quisquam ad enim iusto laborum quas placeat perspiciatis saepe.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-box d-flex">
                                                                    <div className="comment-image">
                                                                        <img src={process.env.PUBLIC_URL + `/assets/images/testimonial-1.jpg`} alt="" />
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div className="content-title d-flex justify-content-between">
                                                                            <div className="comment-writer">
                                                                                <h6>Katrin Kay</h6>
                                                                                <p>Mar 26, 2020 | 06:30pm</p>
                                                                                <ul className="list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star-half-alt"></i></li>
                                                                                    <li className="list-inline-item">(4.5)</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="reply-btn">
                                                                                <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-desc">
                                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium nostrum dolore odit asperiores quisquam ad enim iusto laborum quas placeat perspiciatis saepe.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-box d-flex">
                                                                    <div className="comment-image">
                                                                        <img src={process.env.PUBLIC_URL + `/assets/images/testimonial-2.jpg`} alt="" />
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div className="content-title d-flex justify-content-between">
                                                                            <div className="comment-writer">
                                                                                <h6>David Show</h6>
                                                                                <p>Mar 26, 2020 | 06:30pm</p>
                                                                                <ul className="list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star-half-alt"></i></li>
                                                                                    <li className="list-inline-item">(4.5)</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="reply-btn">
                                                                                <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-desc">
                                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium nostrum dolore odit asperiores quisquam ad enim iusto laborum quas placeat perspiciatis saepe.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="review-form">
                                                                <h5>Submit Review</h5>
                                                                <ReviewForm />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane> */}
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </Col>
                            {/* <Col lg="3" md="4" sm="12">
                                <div className="single-details-sidbar">
                                    <Row>
                                        <Col md="12">
                                            <div className="course-details-feature">
                                                <h5 className="title">Course Details</h5>
                                                <ul className="list-unstyled feature-list">
                                                    <li><i className="las la-calendar"></i> Start Date: <span>Aug 21, 2020</span></li>
                                                    <li><i className="las la-clock"></i> Duration: <span>1 Year</span></li>
                                                    <li><i className="las la-globe"></i> Language: <span>English</span></li>
                                                    <li><i className="las la-sort-amount-up"></i> Skill Level: <span>Beginner</span></li>
                                                    <li><i className="las la-graduation-cap"></i> Subject: <span>Web</span></li>
                                                    <li><i className="las la-book"></i> Lectures: <span>51</span></li>
                                                    <li><i className="las la-bookmark"></i> Enrolled: <span>236</span></li>
                                                    <li><i className="las la-certificate"></i> Certification: <span>Yes</span></li>
                                                </ul>
                                                <button type="button" className="enroll-btn">Enroll Course</button>
                                            </div>
                                        </Col>
                                        <Col md="12">
                                            <PopularCourse />
                                        </Col>
                                        <Col md="12">
                                            <CourseTag />
                                        </Col>
                                    </Row>
                                </div>

                            </Col> */}
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