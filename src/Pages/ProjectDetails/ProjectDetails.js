import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProjectDetails = () => {
    const [project, setProject] = useState({});
    const [load, setLoad] = useState(true);
    const [desktop, setDesktop] = useState(true);
    const [tablet, setTablet] = useState(false);
    const [mobile, setMobile] = useState(false);

    const location = useLocation();
    const id = parseInt(location.pathname.split('/')[2]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const projectData = data.find(d => d.id === id);
                setProject(projectData);
                setLoad(false);
            })
            .catch(err => {
                console.log(err);
                setLoad(false);
            })
    }, [id]);

    const handleDevice = device => {
        if (device === 'desk') {
            setDesktop(true);
            setMobile(false);
            setTablet(false);
        }
        if (device === 'tab') {
            setDesktop(false);
            setMobile(false);
            setTablet(true);
        }
        if (device === 'mob') {
            setDesktop(false);
            setMobile(true);
            setTablet(false);
        }
    }

    if (load) {
        return <h1 className='text-center my-40 text-5xl'>Loading...</h1>
    }
    return (
        <div className='py-20 w-11/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='bg-gray-200 rounded-xl px-5'>
                    <div class="tabs py-1">
                        <Link onClick={() => handleDevice('desk')} class={`tab tab-bordered ${desktop && 'tab-active'}`}>Desktop</Link>
                        <Link onClick={() => handleDevice('tab')} class={`tab tab-bordered ${tablet && 'tab-active'}`}>Tablet</Link>
                        <Link onClick={() => handleDevice('mob')} class={`tab tab-bordered ${mobile && 'tab-active'}`}>Mobile</Link>
                    </div>
                    <div className='h-screen overflow-y-auto border border-gray-600 rounded'>
                        {desktop && <img src={project?.mainPhoto} className="w-full" alt="" />}
                        {tablet && <img src={project?.tabPhoto} className="w-full" alt="" />}
                        {mobile && <img src={project?.mobilePhoto} className="w-full" alt="" />}
                    </div>
                    <div>
                        <p>&nbsp;</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-5xl mb-3'>{project?.name}</h1>
                    <p>{project?.intro}</p>
                    <hr />
                    <div className='mt-3'>
                        <a href={project?.liveLink} className='btn btn-primary text-white btn-sm rounded mr-3' target="_blank" rel="noopener noreferrer">Live Link</a>
                        <a href={project?.clientLink} className='btn btn-primary text-white btn-sm rounded mr-3' target="_blank" rel="noopener noreferrer">Github Client</a>
                        <a href={project?.serverLink} className='btn btn-primary text-white btn-sm rounded mr-3' target="_blank" rel="noopener noreferrer">Github Server</a>
                    </div>
                    <div className='my-5'>
                        <h3 className='text-2xl mb-3 uppercase '>About this project:</h3>
                        <ul className='list-disc ml-14'>
                            {
                                project?.details.map((detail, i) => <li key={i}>{detail}</li>)
                            }
                        </ul>
                    </div>
                    <div className='my-5'>
                        <h3 className='text-2xl mb-3 uppercase '>Technology used:</h3>
                        <ul className='list-disc ml-14'>
                            {
                                project?.tech.map((tec, i) => <li key={i}>{tec}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;