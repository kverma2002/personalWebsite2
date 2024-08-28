import React from 'react';

const ExperienceBox = ({ years, place, description, skills }) => {
    return (
        <div className=" mb-6 transition-transform duration-300 hover:scale-105 text-white hover:text-teal-300">
            <div className="flex justify-between items-center">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{years}</span>
                <h3>
                    <a href="#" className="font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base hover:underline">
                        {place}
                    </a>
                </h3>
                
            </div>
            <p className="mt-2 text-sm leading-normal text-[#94A3B8]">{description}</p>
            <div className="flex flex-wrap gap-2 mt-4 ">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="text-sm font-medium py-1 px-3 rounded-full bg-teal-400/10 text-teal-300"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ExperienceBox;
