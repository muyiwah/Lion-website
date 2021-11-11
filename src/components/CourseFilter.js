import React, { useEffect,useState } from 'react';
// import Datas from '../data/course/filter.json';
import HomeOne from '../HomeOne';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/courseFilter.js";
import {db} from '../firebase'
function CourseFilter() {
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
  
    
    return (
        <Styles>
            {/* Course Area */}
            <section className="course-filter">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="sec-title text-center">
                                <h4>We Do What We Love To Do. Find the Best Course To Fit Your Needs.</h4>
                            </div>
                        </Col>
                        <Col md="12">
                            
                            <Row className="filter-items">
                               {posts && 
                                    posts.slice(0,6).map((data, i) => (
                                        <Col lg="4" md="6" key={i} data-id={data.targetId}>
                                            <div className="course-item">
                                                <Link to={process.env.PUBLIC_URL  + "/course-details/" + data.courseLink}>
                                                    <div className="course-image" style={{backgroundImage: `url(${data.imgUrl})`}}>
                                                        <div className="author-img d-flex">
                                                          
                                                          
                                                        </div>
                                                        <div className="course-price">
                                                            <p>{data.price}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="course-content">
                                                    <h6 className="heading"><Link to={process.env.PUBLIC_URL  + "/course-details/" + data.courseLink}>{data.courseTitle}</Link></h6>
                                                    <p className="desc">{data.courseDesc}</p>
                                                    <div className="course-face d-flex justify-content-between">
                                                        <div className="duration">
                                                            <p><i className="las la-clock"></i>120</p>
                                                        </div>
                                                        <div className="rating">
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
                                                        <div className="student">
                                                            <p><i className="las la-chair"></i>60</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                }
                              
                            </Row>
                        </Col>
                        <Col md="12" className="text-center">
                            <div className="viewall-btn">
                                <Link to={process.env.PUBLIC_URL + "/course-grid"}>View All Courses</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default CourseFilter
