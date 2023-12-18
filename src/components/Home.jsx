import React, {useState, useEffect} from "react";
import FadeIn from 'react-fade-in';

function Home() {
    
    return (
        <div className="Home xxxs:mt-5 lg:mt-20 w-max text">
            <FadeIn delay="200">
            <div className="flex-row w-fit mb-10 ">
                <div className="flex justify-start animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-black font-bold xxxs:text-1xl sm:text-3xl md:text-4xl lg:text-5xl">HELLO, I'M PEERANAT PATARAKITTISOPOL</div>
            </div>
            <div className="Home-content flex flex-wrap justify-start mb-10 ss:text-lg">
                <div>I'm a second-year software engineering student at KMITL. I've had a passion for learning new things, particularly in technology, since I was young. My main focus is on software development, and I also have some experience with hardware.</div>
            </div>
            <div className="">
            </div>
            </FadeIn>
        </div>
    );
}

export default Home;