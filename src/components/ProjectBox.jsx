import React from 'react';

const ProjectBox = ({ title, link, description, technologies, screenshot }) => {
    return (
        <div className="mb-4 transition-transform duration-300 hover:scale-105 text-white hover:text-teal-300 flex flex-row ">
            
            <div className="mr-6 flex items-center justify-center">
                <img
                    src={screenshot}
                    alt={`${title} screenshot`}
                    className="h-24 w-80 rounded border-2 border-slate-200/10 sm:order-1 sm:col-span-2"
                />
            </div>
            <div className="flex-grow">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg transition-colors duration-300">
                        {title}
                    </h3>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 inline-block transform transition-transform duration-300 group text-white hover:text-teal-300 bg-teal-400/10 rounded-full py-1 px-3"
                        >
                            Visit
                            <span className="inline-block ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                                ↗
                            </span>
                        </a>
                    
                </div>
                <p className="text-gray-300 mt-2 text-sm leading-normal">{description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-teal-400/10 text-teal-300 text-sm font-medium py-1 px-3 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectBox;
