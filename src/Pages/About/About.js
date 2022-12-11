import React from 'react';

const About = () => {
    return (
        <div className='w-11/12 mx-auto py-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10'>
                <div>
                    <img src='https://i.postimg.cc/4NRdyXds/bg.jpg' className='w-full rounded-lg' alt="" />
                </div>
                <div>
                    <h2 className='text-4xl mb-5 uppercase font-semibold'>About Me</h2>
                    <p className='text-justify'>
                        This is Sujan. I am a MERN stack developer. I also have two years of work experience as a web designer. Where I used HTML, CSS, JavaScript, Bootstrap and various animation libraries for design.
                        Currently I am researching and learning React JS for 1 year. As a result, knowledge about many topics related to React has been gained. In this regard I have knowledge of advanced JavaScript, ES6/ES7.
                        Some of my skills include JavaScript, ES6, ES7, Rest APIs, React Router dom, React Hooks, SPA, HTML, CSS, Bootstrap 4 & 5, React-Bootstrap, Tailwind CSS, Node.js, MongoDB, Firebase, Express.js
                        The tools I use are Vs Code, GitHub, Gitlab, Chrome Dev Tools, Netlify, Vercel, Photoshop, Figma.
                        My interpersonal skills are teamwork, fast learner and organizing. Also has the ability to google and solve code related bugs and errors.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;