import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroImage from '../components/HeroImage';
import HeroSlider from '../components/HeroSlider';
import {auth} from  '../firebase';
import './dashboard.css';
 export default function Dashboard() {




    return (
        <div>
             < Header />
             <HeroImage />

            <Footer />
        </div>
    )
}
