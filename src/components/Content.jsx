import React from 'react'
import ExperienceBox from './ExperienceBox'
import ProjectBox from './ProjectBox'
import { experiences } from '../constants/experience'
import { projects } from '../constants/projects'

function Content() {

  return (
    <div className="pt-24 lg:w-1/2 lg:py-24">
        {/* Scrollable Content Sections */}
        <section id="section1" className="scroll-section">
            <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </section>
        <section id="section2" className="scroll-section">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="max-w-4xl mx-auto px-4">
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
        <section id="section3" className="scroll-section">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="max-w-4xl mx-auto px-4">
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
        {/* Add more sections as needed */}
    </div>
  )
}

export default Content
