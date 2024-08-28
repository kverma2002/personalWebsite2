import React from 'react';

const ProjectBox = ({ title, link, description, technologies, screenshot }) => {
    return (
        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
            </div>
            <div className='z-10 sm:order-2 sm:col-span-6'>
                <h3>
                    <a className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
                        href={link} target="_blank" rel="noopener noreferrer">
                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                            {title}
                        </span>
                    </a>
                </h3>
                <p class="mt-2 text-sm leading-normal">
                    {description}
                </p>
            </div>
            <img alt="Build a Spotify Connected App Newline course marketing card" 
                loading="lazy" width="200" height="48" decoding="async" data-nimg="1" 
                class="rounded border-2 border-slate-200/10 transition 
                group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" 
                style="color:transparent" 
                src={screenshot}
                style={{ color: 'transparent' }}
            />
        </div>

        // <div className="mb-4 transition-transform duration-300 hover:scale-105 text-white hover:text-teal-300 flex flex-row group">
        //     <div className="mr-6">
        //         <div className="relative w-[160px] h-[90px]">  {/* 16:9 aspect ratio */}
        //             <img
        //                 src={screenshot}
        //                 alt={`${title} screenshot`}
        //                 className="absolute inset-0 w-full h-full object-cover rounded border-2 border-slate-200/10 group-hover:border-teal-300 transition-all duration-300"
        //             />
        //         </div>
        //     </div>
        //     <div className="flex-grow">
        //         <div className="flex justify-between items-center">
        //             <h3 className="font-semibold text-lg transition-colors duration-300">
        //                 {title}
        //             </h3>
        //             <a
        //                 href={link}
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //                 className="ml-2 inline-block transform transition-transform duration-300 text-white hover:text-teal-300 bg-teal-400/10 rounded-full py-1 px-3"
        //             >
        //                 Visit
        //                 <span className="inline-block ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
        //                     ↗
        //                 </span>
        //             </a>
        //         </div>
        //         <p className="text-gray-300 mt-2 text-sm leading-normal">{description}</p>
        //         <div className="flex flex-wrap gap-2 mt-4">
        //             {technologies.map((tech, index) => (
        //                 <span
        //                     key={index}
        //                     className="bg-teal-400/10 text-teal-300 text-sm font-medium py-1 px-3 rounded-full"
        //                 >
        //                     {tech}
        //                 </span>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    );
};

export default ProjectBox;
