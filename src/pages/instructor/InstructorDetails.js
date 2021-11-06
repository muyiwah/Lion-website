import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import { Styles } from './styles/instructor.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

     

function InstructorDetails({img, name, position, description}) {
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper instructor-details-page">

                {/* Header 2 */}
                <Header />

                {/* Breadcroumb */}
                {/* <BreadcrumbBox title="Team Details" /> */}

                {/* Instructor Details Area */}
                <section className="instructor-details-area">
                    <Container>
                        <Row>
                            <Col md="4">
                                <div className="instructor-img">
                                    <img src={img} alt="" className="img-fluid" />
                                   
                                </div>
                            </Col>
                            <Col md="8">
                                <div className="instructor-content">
                                    <h4>{name}</h4>
                                    <span>{position}</span>
                                    <p>{description}</p>
                                </div>
                                <div className="qual-expe d-flex">
                                    
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

export default InstructorDetails
