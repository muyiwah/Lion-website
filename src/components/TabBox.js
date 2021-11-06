import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Styles } from "./styles/tabBox.js";

class TabBox extends Component {

    render() {
        return (
            <Styles>
                {/* Tab Box Area */}
                <section className="tab-section">
                    <Container>
                        <Tab.Container defaultActiveKey="why">
                            <Row>
                                <Col lg="3" md="4">
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="why"><i className="las la-arrow-right"></i>Who We Are</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="mission"><i className="las la-arrow-right"></i> What We Do </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="vision"><i className="las la-arrow-right"></i> Our Vision</Nav.Link>
                                        </Nav.Item>
                                       
                                    </Nav>
                                </Col>
                                <Col lg="9" md="8">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="why">
                                            <h4 className="tab-title">Who We Are</h4>
                                            <p className="tab-desc">Lion DynastyFX (LDFX)is a a subsidiary of Lion Dynasty MultiGlobal Company. A comprehensive educational system conceived directly from the need for people to learn about Forex trading and also for traders to improve on their knowledge at their own pace in a comfortable, interactive environment. Founded by the trading experts with over 5 years trading experience who has also taught and mentored lots of people to have a profitable trading career. LDFX offers traders of all levels the courses they need to sharpen their trading skills and enhance their knowledge of the world of Forex.

In addition to courses about specific technical trading strategies and Forex trading basics, LDFX also offers a range of lessons dealing with the complexities of trading psychology, which enable traders to better understand their strengths, their weaknesses and who they’re in the Market. LDFX brought about an affordable service that was built with the understanding that Forex trading requires a mix of collaborative research and independent thinking, and that each trader must find the strategy with which he is most comfortable.</p>
                                           
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="mission">
                                            <h4 className="tab-title">What We Do</h4>
                                            <p className="tab-desc">To this end, LDFX provides a range of courses, complete with videos, quizzes and PDF documents to help traders identify their blind spots and to focus on the different aspects of Forex trading. LDFX has developed its own unique Forex Strategies which allows our students choose from the whole lot what they are comfortable with. Throughout their studies, traders will be tested on the information they've learned so that they can see where they excel and where they need additional instruction. The lessons are constructed in such a way that the deeper a student delves into the material, the more levels he can reach. Each lesson is accompanied by additional reading material and links to related lessons and articles. Because we have an understanding of how complex the market is we’ve decided to create a community where irrespective of your level of exposure in the forex world you’ll have the opportunity to communicate with people from different levels of experience in the market, every LDFX student will be able to ask questions and receive answers from other traders and professional Forex educators so that every Forex trading concept will be totally comprehensible and beneficial to the participant.

All registered members will receive notifications of additional lessons, Forex trading strategies and any new educational material we consider relevant. Since FX Academy is not owned by any brokerage, our users are able to review some of the material as often as possible until they feel 100% prepared to start trading. </p>
                                           
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vision">
                                            <h4 className="tab-title">Our Mission</h4>
                                            <p className="tab-desc">At LDFX , our goal is to help traders at all levels increase their confidence, their understanding of the market and their ability to trade profitably. We have built an exclusive program that we hope will reach the maximum number of traders and provide them with the best scholastic material available in the Forex arena.

We value feedback and insights from our members and will continue to update and improve our program in an effort to provide the best holistic place for Forex traders and most importantly those who wish to become one.</p>
                                          
                                        </Tab.Pane>
                                       
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default TabBox
