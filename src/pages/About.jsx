import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import SocialMedia from '../components/SocialMedia';

const About = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 850,
          easing: "ease-out-cubic",
        });
      }, []);

  return (
    <div className='about' data-aos="zoom-y-out" data-aos-delay="50">

      <div className='about'>
        <h1>Hello my name is <b>Shubham Pandey</b>.</h1>
        <h2>I have expertise in front end development</h2>
        <h3>Checkout my projects on the portfolio page
            U can contact me with</h3>
          <span className='gmail'> shubhamprakash170@gmail.com</span> 
      </div> 
      
      <div className='social-media-about'>
      <SocialMedia/>
      </div>
    </div>
  )
}

export default About
