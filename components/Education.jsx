import React from "react";
import FadeIn from 'react-fade-in';
import eduImg from '../assets/edu.svg';

function Education() {
    return (
        <div className="Education lg:mt-20">
        <div className="Education-header text-black font-bold xxxs:text-1xl sm:text-3xl md:text-4xl lg:text-5xl">
            <div>Education</div>
        </div>
        <div className="Education-content m-10 ">
            <ol className="relative border-s border-gray-200 ">
                <FadeIn delay="200">                  
                <li className="mb-10 ms-6">            
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:bg-blue-900 ">
                        <img src={eduImg} alt="edu" className="w-4 h-4" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 xxxs:text-sm sm:text-2xl  lg:text-3xl">King Mongkut's Institute of Technology Ladkrabang</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 xxxs:text-sm sm:text-xl  lg:text-2xl" >May, 2022 - June, 2026</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 xxxs:text-sm sm:text-lg  lg:text-xl">Software Engineering</p>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white  dark:bg-blue-900">
                        <img src={eduImg} alt="edu" className="w-4 h-4" />
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 xxxs:text-sm sm:text-2xl  lg:text-3xl">Assumption College English Program</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 xxxs:text-sm sm:text-xl  lg:text-2xl">Jan, 2018 - Feb, 2022</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 xxxs:text-sm sm:text-lg lg:text-xl">Science and Mathematics</p>
                </li>
                </FadeIn>
            </ol>
        </div>
        </div>
    );
}

export default Education;