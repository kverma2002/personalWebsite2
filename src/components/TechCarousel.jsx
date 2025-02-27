import React from 'react';
import { useEffect, useRef } from 'react';

import reactLogo from '../assets/react.svg';
import nodeLogo from '../assets/node.png';
import jsLogo from '../assets/js.webp';
import cppLogo from '../assets/C++.png';
import pythonLogo from '../assets/python.svg';
import awsLogo from '../assets/aws.png';
import dockerLogo from '../assets/docker.webp';
import githubLogo from '../assets/github.png';
import kubeLogo from '../assets/kube.png'; 
import laravelLogo from '../assets/laravel.svg';
import springLogo from '../assets/sb.png';
import terraformLogo from '../assets/terraform.png';



const TechCarousel = () => {

    const technologies = [
        { name: 'AWS', image: awsLogo },
        { name: 'Docker', image: dockerLogo },
        { name: 'Kubernetes', image: kubeLogo },
        { name: 'Github', image: githubLogo},
        { name: 'Terraform', image: terraformLogo },
        { name: 'Python', image: pythonLogo },
        { name: 'JavaScript', image: jsLogo },
        { name: 'React', image: reactLogo },
        { name: 'Node.js', image: nodeLogo },
        { name: 'C++', image: cppLogo },
        
        { name: 'Laravel', image: laravelLogo},
        { name: 'Spring Boot', image: springLogo},
        // Add more technologies as needed
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
                <div key={index} className="group relative">
                    <img
                        src={tech.image}
                        alt={tech.name}
                        className="h-16 w-auto mx-auto transition-transform transform hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-black bg-opacity-70 text-white text-xs p-1 rounded">{tech.name}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechCarousel;
