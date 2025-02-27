import React, { useState } from "react";
import './css/projects.css';
import arrow from './assets/arrow.png';
import catWorking from './assets/catworking.gif';
import { NavBar } from './App.jsx'; 

function Projects() { 
    const [selected, setSelected] = useState([]);

    const toggleOption = (id) => {
        setSelected((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item) => item !== id)
                : [...prevSelected, id]
        );
    };

    const data = [
        // Type here whatever skill you want
        { id: 'UXDesign', title: 'UX Design' },
        { id: 'React.js', title: 'React.js' },
        { id: 'Python', title: 'Python' },
        { id: 'C++', title: 'C++' },
        { id: 'Javascript', title: 'Javascript' },
        { id: 'Java', title: 'Java' },
        { id: 'Blender', title: 'Blender' },
        { id: 'mySQL', title: 'SQL' },
        { id: 'APIdev', title: 'API Development' },

    ];

    const projects = [
        // this is where information about your project will go, image not required
        { 
            id: 1, 
            title: 'Project Title One', 
            image: './src/assets/ProjectCover.png', 
            date: 'Jan 2024- October 2024',  
            skills: ['React.js', 'Python'], 
            descr: 'This project demonstrates advanced development techniques using frameworks and programming languages listed. The application enables users to interact with real-time data and provides a detailed interface.', 
            link: "https://example.com/project-one" 
          },
          { 
            id: 2, 
            title: 'Project Title Two', 
            image: './src/assets/ProjectCover.png', 
            date: 'Jan 2024- May 2024',   
            skills: ['React.js', 'C++'], 
            descr: 'This project involves designing a complex database system modeled after a real-world application. The system handles extensive data and user interactions efficiently.', 
            link: "https://example.com/project-one"
          },
          { 
            id: 3, 
            title: 'Project Title Three', 
            image: './src/assets/ProjectCover.png', 
            date: 'August 2024- December 2024',   
            skills: ['Python', 'C++'], 
            descr: 'This project focuses on building a robust application using object-oriented programming to enhance operational efficiency in healthcare settings.', 
            link: "https://github.com/project-one" 
          },
          { 
            id: 4, 
            title: 'Project Title Four', 
            image: './src/assets/ProjectCover.png', 
            date: 'Jan 2022 - December 2022',   
            skills: ['Python', 'C++'], 
            descr: 'This UX design project aims to streamline user interactions in a mobile application, enhancing accessibility and usability.', 
            link: "https://github.com/project-one" 
          },
          { 
            id: 5, 
            title: 'Project Title Five', 
            image: './src/assets/ProjectCover.png', 
            date: 'May 2022- December 2022',   
            skills: ['Python', 'React.js'], 
            descr: 'This project explores UX/UI design principles to create an intuitive and responsive dashboard for weather monitoring.', 
            link: "https://github.com/project-one"
          },
              ];

    const filteredProjects = selected.length
        ? projects.filter(project => selected.some(skill => project.skills.includes(skill)))
        : projects;

        return (
            <div className="entire-page">
                <NavBar />
                <div className="proj-intro">
                   <h4>Open-source projects I've made over the years, including this website, an emulator, and various games, apps, frameworks, and boilerplates.</h4>
                   <h3>Select what skills you want to see</h3>
                </div>
                <div>
                    <div className="multi-select">
                        {data.map(option => (
                            <button
                                key={option.id}
                                className={`multi-select-button ${selected.includes(option.id) ? 'selected' : ''}`}
                                onClick={() => toggleOption(option.id)}
                            >
                                {option.title}
                            </button>
                        ))}
                    </div>
                </div>
                
        
                <div className="projects-list">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="skills">
                                {project.skills.map(skill => (
                                    <span key={skill} className={`skill-badge ${skill.replace(/\s+/g, '-')}`}>{skill}</span>
                                ))}
                            </div>
                            <h4>{project.date}</h4>
                            <h2>{project.title}</h2>
                            <p>{project.descr}</p>
                            <div className="together">
                                <button onClick={() => window.location.href = project.link}>
                                    Source <img src={arrow} className="source-arrow"></img>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-projects">
                        <img src={catWorking} alt="Cat working" />
                        <p>No projects found for the selected skills.</p>
                    </div>
                    )}
                </div>

                </div>
        );
    }
    
export default Projects;