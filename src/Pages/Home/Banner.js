import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.postimg.cc/4NRdyXds/bg.jpg")` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md"> 
                    <h1 className="mb-0 text-5xl font-semibold text-info">I'm S. M. SUJAN</h1>
                    <h3 className="mb-5 text-2xl font-light text-white">Fornt-end Developer <br/>|| <br/>MERN Stack Developer</h3>
                    <p className="mb-5">This is sujan, expert frontend developer based on ReactJs. Also I have JavaScript (ES6+), REST APIs, React Hooks, Context API, Bootstrap, React-Bootstrap, Tailwind CSS, Node.js, MongoDB, Firebase, Express.js as strong skill.</p>
                    <a href="https://drive.google.com/file/d/1LSFQacWEFmTYxxvdEi8Bh5t4D2jZepMt/view?usp=share_link" target='_blank' rel="noreferrer"><button className="btn btn-circle btn-primary w-32">See Resume</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;