import React from 'react';

const ProjectBox = ({ title, link, description, technologies, screenshot }) => {
    return (
        <div className="p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{title}</h3>
                {screenshot ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <div className="relative group">
                            <img
                                src={screenshot}
                                alt={`${title} screenshot`}
                                className="h-20 w-36 rounded-lg object-cover transition-transform duration-300 transform hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300 rounded-lg"></div>
                        </div>
                    </a>
                ) : (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-sm hover:underline"
                    >
                        Visit
                    </a>
                )}
            </div>
            <p className="text-gray-300 mt-4">{description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-[#0F172A] text-teal-400 text-sm font-medium py-1 px-3 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectBox;
