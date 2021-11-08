import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {auth} from  '../firebase';
import './dashboard.css';
 export default function Dashboard() {




    return (
        <div>
             < Header />
               
           <h1>this is Dashboard Route</h1> 
            <Footer />
        </div>
    )
}
