import React, { Component } from 'react';
import Datas from '../data/hero/hero-image.json';
import { Container, Row, Col } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';
import { Styles } from "./styles/heroImage.js";

class HeroImage extends Component {
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
                {/* Hero Image */}
                <section className="hero-image-area" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.heroBackground})` }}>
                <div className="round-shape" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.heroRoundShape})` }}></div>
                    <div className="hero-table">
                        <div className="hero-tablecell">
                            <Container>
                                <Row>
                                    <Col md="12">
                                        <div className="hero-box text-center">
                                            <h1>{Datas.heroTitle}</h1>
                                            <p>{Datas.heroSubtitle}</p>
                                          
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </section>
            </Styles>
        )
    }
}

export default HeroImage
