import React, { useEffect } from 'react';
import Datas from '../data/faq-event/faq-event.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/faqEvent.js";

function FaqEvent() {
    useEffect(() => {
        const accordionButton = document.querySelectorAll(".accordion-button");
        accordionButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "accordion-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "accordion-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });

    return (
        <Styles>
            {/* Faq & Event */}
            <section className="event-faq-area">
                <Container>
                    <Row>
                        
                        <Col md="12">
                            <div className="faq-area">
                                <div className="sec-title">
                                    <h4>Frequently Ask <span>Question</span></h4>
                                </div>
                                <div className="faq-box">
                                    {
                                        Datas.faqDataList.map((faqData, i) => (
                                            <div className="faq-item" key={i}>
                                                <button className="accordion-button active">
                                                    <div className="accordion-icon"><i className="las la-plus"></i></div>
                                                    <p>{faqData.faqTitle}</p>
                                                </button>
                                                <div className="accordion-content show">
                                                    <p>{faqData.faqDesc}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="sec-title py-5">
                                    <h4>Our most  <span>trusted broker</span></h4>
                                </div>
                                <div className="sec-title">
                                    <a className="viewall-btn" href="https://www.hotforex.com/?refid=342643" target='_blank' style={{color: 'black',
                        background: 'gold', padding: '15px 35px', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold'
                    }}> Hot Forex </a>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default FaqEvent
