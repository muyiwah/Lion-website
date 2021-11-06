import React, { Component } from 'react';
import Datas from '../data/icon-box/icon-box.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/iconBox.js";
import { Link } from 'react-router-dom';

class IconBox extends Component {
    render() {
        return (
            <Styles>
                {/* Icon Box */}
                <section className="icon-box-area">
                    <Container>
                        <Row>
                            {
                                Datas.map((data, i) => (
                                    <Col md="4" key={i}>
                                        <a href={data.link} target="_blank" rel="noopener noreferrer">
                                        <div className="full-icon-box">
                                            <div className="icon-box d-flex">
                                                <div className={data.uniqClass}>
                                                    <img src={`/assets/images/${data.boxIcon}`}/>
                                                </div>
                                                <div className="box-title">
                                                    <h6>{data.title}</h6>
                                                    <p>{data.subTitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                        </a>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default IconBox
