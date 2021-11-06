import React, { Component } from 'react';
import Datas from '../data/about-us/about-us.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/aboutUs.js";

class AboutUs extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <Styles>
                {/* About Us */}
                <section className="about-us">
                    <Container>
                        <Row>
                        
                            <Col md="12">
                                <div className="about-content">
                                    <h4 className="about-title">{Datas.title}</h4>
                                    <p className="about-para">{Datas.desc1}</p>
                                   
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default AboutUs
