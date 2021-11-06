import React, { Component } from 'react';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import AboutUs from '../../components/AboutUs';
import IconBox from '../../components/IconBox';
import TabBox from './../../components/TabBox';
import { Styles } from "./styles/about.js";
import Footer from '../../components/Footer';
import Header from '../../components/Header';

class About extends Component {

    render() {
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper about-page">

                    {/* Header 2 */}
                    <Header />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="About Us" />

                    {/* About Area */}
                    <AboutUs />

                    {/* Icon Box Area */}
                    <IconBox />

                    {/* Tab Section */}
                    <TabBox />

                   
                    {/* Footer 2 */}
                    <Footer />

                </div>
            </Styles>
        )
    }
}

export default About