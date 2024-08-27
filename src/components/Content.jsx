import React from 'react'
import ExperienceBox from './ExperienceBox'
import ProjectBox from './ProjectBox'
import TechCarousel from './TechCarousel'
import { experiences } from '../constants/experience'
import { projects } from '../constants/projects'

function Content() {

  return (
    <div className="pt-24 lg:w-1/2 lg:py-24">
        {/* Scrollable Content Sections */}
        <section id="About" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <p className="mb-4">
                Back in <span className="text-blue-500">2019</span>, I took my first programming class and I was hooked. 
                I loved the challenge of solving problems and the satisfaction of 
                seeing my code come to life. Since then, I’ve been learning as much
                as I can about software development and building projects that
                <span className="text-green-500"> make a difference</span>.
            </p>
            <p className="mb-4">
                I’m a senior at the <span className="text-yellow-500">University of Southern California</span> and a backend engineer with experience in 
                <span className="text-purple-500"> Node.js</span>, <span className="text-teal-500">Python</span>, and 
                <span className="text-pink-500"> Java</span>. I’m passionate about building scalable, maintainable 
                applications and <span className="text-indigo-500">solving complex problems</span>. I’m always looking 
                for new ways to <span className="text-orange-500">improve my skills</span> and learn new technologies.
            </p>
            <p className="mb-4">
                When I’m not at the computer, I’m usually running, reading, 
                hanging out with my dog, 
                or trying to find the <span className="text-green-500">best food in town</span>.
            </p>
        </section>
        <section id="Experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            
            <div className="max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                    <ExperienceBox
                        key={index}
                        years={exp.years}
                        place={exp.place}
                        description={exp.description}
                        skills={exp.skills}
                    />
                ))}
            </div>
        </section>
        <section id="Projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectBox
                        key={index}
                        title={project.title}
                        link={project.link}
                        description={project.description}
                        technologies={project.technologies}
                        screenshot={project.screenshot}
                    />
                ))}
            </div>
        </section>
        <section id="Technology" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <TechCarousel/>
        </section>
        {/* Add more sections as needed */}
    </div>
  )
}

export default Content
