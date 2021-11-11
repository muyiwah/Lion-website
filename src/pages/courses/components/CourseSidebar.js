import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CourseSearch from './CourseSearch';
import CourseCategory from './CourseCategory';

class CourseSidebar extends Component {
    render() {
        return (
            <div className="course-sidebar">
                <Row>
                    <Col md="12">
                        <CourseSearch />
                    </Col>
                    <Col md="12">
                        <CourseCategory />
                    </Col>
                   
                </Row>
            </div>
        )
    }
}

export default CourseSidebar
