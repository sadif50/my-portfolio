import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const {id, name, intro, cover_photo} = project;
    return (
        <div className="card glass">
            <figure><img src={cover_photo} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title uppercase">{name}</h2>
                <p>{intro}</p>
                <div className="card-actions justify-end">
                    <Link to={`/projectDetails/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;