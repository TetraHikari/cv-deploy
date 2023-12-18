import React from 'react';
import SkillLevel from './SkillLevel';
import mySkills from './SkillList';

const Skills = ({skills}) => {
  return (
    <div className='sm:m-10 lg:m-20'>
        <div className="text-black font-bold xxxs:mb-5 sm:mb-10 xxxs:text-1xl sm:text-3xl md:text-4xl lg:text-5xl">Skills</div>
        <div className="flex flex-wrap xxxs:gap-5 sm:gap-20 lg:gap-40">
            {mySkills.map((skill) => (
                <SkillLevel
                    key={skill.name}
                    skill={skill.name}
                    level={skill.level}
                    pic={skill.pic}
                    maxLevel={5}
                />
            ))}
        </div>
    </div>
  );
};

export default Skills;
