import React from 'react';

const ExperienceBox = ({ years, place, description, skills }) => {
    return (
        <div className=" mb-6 transition-transform duration-300 hover:scale-105 text-white hover:text-teal-300">
            <div className="flex justify-between items-center">
                <span className="font-medium">{years}</span>
                <a href="#" className="font-semibold text-lg hover:underline">
                    {place}
                </a>
            </div>
            <p className="text-gray-300 mt-4">{description}</p>
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
