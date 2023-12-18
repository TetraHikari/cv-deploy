import React from 'react';

import FadeIn from 'react-fade-in';
import callimg from '../assets/call.svg';
import sms from '../assets/sms.svg';
import location from '../assets/location.svg';



function Contact() {
    return (
        <div className="Contact lg:mt-20">
        <div className="Contact-header text-black font-bold xxxs:text-1xl sm:text-3xl md:text-4xl lg:text-5xl">
            <div>Contact</div>
        </div>
        <div className="content m-10">
        <FadeIn delay="200"> 
            <div className='flex flex-wrap p-5 gap-5 pl-0'>
                <img src={callimg} alt="phone" />
                <div>+66 93 250 3300</div>
            </div>
            <div className='flex flex-wrap p-5 gap-5 pl-0'>
                <img src={location} alt="location" />
                <div>Bangkok, Thailand</div>
            </div>
            <div className='flex flepx-wra p-5 gap-5 pl-0'>
                <img src={sms} alt="email" />
                <div>peeranatpee1@gmail.com</div>
            </div>
        </FadeIn>
        <div>
        <FadeIn delay="500" className='links flex flex-wrap gap-10 mt-7'> 
            <a href="https://linkedin.com/in/peeranat-patarakittisopol-965ba3221">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="linkedin" className='w-10 h-10'/> 
            </a>
            <a href="https://github.com/TetraHikari">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" className='w-10 h-10' />
            </a>
        </FadeIn>
        </div>
        </div>
        </div>
    );
}

export default Contact;