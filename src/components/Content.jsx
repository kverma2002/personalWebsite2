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
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <p className="mb-4">
                Throughout my time at the <span className="text-yellow-500">University of Southern California</span>, I've immersed myself in the world of software development, gaining hands-on experience with a variety of programming languages and technologies. 
                My journey has been driven by a passion for turning ideas into reality through code, and I've built several projects that have real-world applications.
            </p>
            <p className="mb-4">
                As a senior with experience in <span className="text-purple-500">Node.js</span>, <span className="text-teal-500">Python</span>, and <span className="text-pink-500">C++</span>, I've developed a strong foundation in backend engineering. 
                My coursework, including <span className="text-indigo-500">Advanced Backend Development</span>, <span className="text-orange-500">Software Engineering</span>, <span className="text-green-500">Machine Learning</span>, and <span className="text-yellow-500">Operating Systems</span>, has provided me with a deep understanding of both theoretical and practical aspects of software development. 
                I’m constantly looking for new challenges and opportunities to <span className="text-blue-500">grow my skills</span> and explore emerging technologies.
            </p>
            <p className="mb-4">
                When I’m not at the computer, I’m usually running, reading, 
                hanging out with my dog, 
                or trying to find the <span className="text-green-500">best food in town</span>.
            </p>
        </section>
        <section id="Experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
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
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            <div>
                <ul className='group/list'>
                    
                    {projects.map((project, index) => (
                        <li className="mb-12">
                        <ProjectBox
                            key={index}
                            title={project.title}
                            link={project.link}
                            description={project.description}
                            technologies={project.technologies}
                            screenshot={project.screenshot}
                        />
                        </li>   
                    ))}
                    
                </ul>
                
            </div>
        </section>
        <section id="Technology" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Technologies</h2>
            </div>
            <TechCarousel/>
        </section>
        {/* Add more sections as needed */}
    </div>
  )
}

export default Content
