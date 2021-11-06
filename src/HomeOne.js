import React, { useState, useEffect,Component } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AboutUs from './components/AboutUs';
import CourseFilter from './components/CourseFilter';
import TestimonialSlider from './components/TestimonialSlider';
import FaqEvent from './components/FaqEvent';
import Footer from './components/Footer';
import IconBox from './components/IconBox';
import {db} from './firebase'
function HomeOne() {
 const [postJSON, setPostJSON] = useState([])

  // useEffect(()=>{
      //load hospitals into hospitalsList
     
     
//     const [blogs,setBlogs]=useState([])
//     const fetchBlogs=()=>{ db.collection('cities')
//     .get()
//     .then(snapshot => {
//       snapshot.docs.forEach(hospital => {
//           let currentID = hospital.id
//           let appObj = { ...hospital.data(), ['id']: currentID }
//           hospitals.push(appObj)})
//       }  )
//       console.log("loginol", hospitals);
//   }
   const [posts, setPosts]=useState([])
  useEffect(() => {
	db.collection('courses6')
      .onSnapshot((snapshot) => {
		setPosts(
			snapshot.docs.map((doc) => {
				return doc.data();
			})
		);
	});
}, []); 

// console.log("posts=",posts[2].authorFb);
  
//   useEffect(() => {
//     fetchBlogs();
//   }, [])
 
if (posts){console.log("home",posts)}


        return (
            <div className="main-wrapper"  >
                  
                {/* Header */}
                < Header />
               
                {/* Hero Slider */}
                < HeroSlider />

                <IconBox />

                {/* About Area */}
                < AboutUs />

                {/* Course Filter */}
                < CourseFilter />


                {/* Testimonial Slider */}
                < TestimonialSlider />

                {/* <FreeCourse /> */}


                {/* Faq & Event Area */}
                < FaqEvent />
            
                {/* Footer */}
                < Footer />

            </div >
        )
    }
export default HomeOne
