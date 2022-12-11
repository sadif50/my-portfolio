import React, { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            setProjects(data);
        })
    }, [])
    return (
        <div className='w-11/12 mx-auto py-20'>
            <div>
                <h1 className='text-center text-4xl uppercase'>Recent Projects</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-5 mt-10'>
                {
                    projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;