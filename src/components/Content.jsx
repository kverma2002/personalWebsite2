import React from 'react'
import ExperienceBox from './ExperienceBox'
import ProjectBox from './ProjectBox'
import TechCarousel from './TechCarousel'
import { experiences } from '../constants/experience'
import { projects } from '../constants/projects'
import CertCarousel from './CertCarousel'

function Content() {

  return (
    <div className="pt-24 lg:w-1/2 lg:py-24">
        {/* Scrollable Content Sections */}
        <section id="About" className="mb-16 scroll-mt-16 md:mb-22 lg:mb-32 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <p className="mb-4">
                I recently graduated from the <span className="text-yellow-500">University of Southern California</span> with a Bachelor in Computer Science, where I built a strong foundation in software development and cloud development. My skills include back-end development, infrastructure automation, and cloud-native architectures.
            </p>
            <p className="mb-4">
                I’ve worked with <span className="text-purple-500">JavaScript</span>, <span className="text-teal-500">Python</span>, and <span className="text-pink-500">C++</span>, alongside frameworks like <span className="text-red-500">Node.js</span> and <span className="text-blue-600">React.js</span>. My focus has now shifted towards cloud engineering mainly focusing on <span className="text-indigo-500">AWS</span> and I now hold <span className="text-yellow-500">five AWS certifications.</span>
                <br/>
            </p>
            <p className="mb-4">
                When I’m not at the computer, I’m usually running, reading, 
                hanging out with my dog, 
                or trying to find the <span className="text-green-500">best food in town</span>.
            </p>
        </section>
        <section id="Certifications" className="mb-16 scroll-mt-16 md:mb-22 lg:mb-34 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Certifications</h2>
            </div>
            <CertCarousel/>
        </section>
        <section id="Experience" className="mb-16 scroll-mt-16 md:mb-22 lg:mb-36 lg:scroll-mt-24">
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
                        link={exp.link}
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
