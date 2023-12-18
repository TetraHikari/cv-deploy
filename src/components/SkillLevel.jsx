import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';

const SkillLevel = ({ skill, level, pic, maxLevel }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Set animate to true after a short delay to create a staggered effect
    const timeout = setTimeout(() => setAnimate(true), 100);
    
    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center mb-4">
        <FadeIn delay="100">
      <div className='flex flex-row'>
        <div className='h-full flex items-middle xxxs:mt-1 sm:mt-2'>
        <img src={pic} alt={skill} className="xxxs:w-6 xxxs:h-6 sm:h-7 sm:w7 lg:h-7 lg:w-7 mr-2 " />
        </div>
      <div className='flex flex-col' >
      <span className="text-gray-700 font-semibold mr-2 w-20 xxxs:text-sm sm:text-xl lg:text-2xl">{skill}</span>
      <div className="flex">
        {[...Array(maxLevel)].map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 sm:h-3 sm:w-3 lg:h-4 lg:w-4 rounded-full ml-1 transition-opacity duration-500 ${
              i < level ? 'bg-blue-500' : 'bg-gray-300'
            } ${animate ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: `${i * 0.1}s` }} // Adjust the delay between dots
          />
        ))}
      </div>
      </div>
      </div>
        </FadeIn>
    </div>
  );
};

export default SkillLevel;
