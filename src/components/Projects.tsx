import type { Project } from '../types';

const projectsData: Project[] = [
    {
        title: 'NHL Best Forward Lines',
        description: 'A holistic evaluation of NHL Forward Lines to find out which lines performed the best offensively, defensively, and from an overall point of view during the 2023-2024 regular season using expected goals (xG)',
        technologies: ['Python', 'HTML'],
        link: 'https://medium.com/@nsofianakos/best-nhl-forward-lines-49e621b79486'
    },
    {
        title: 'NHL xG Model',
        description: 'Successfully built two expected goals (xG) models, Logistic Regression and XGBoost, based on NHL shot data for the 2023-2024 regular season, and ranked the top 15 players in terms of xG for the season',
        technologies: ['Python'],
        link: 'https://medium.com/@nsofianakos/nhl-expected-goals-xg-model-39bd2edba932'
    }
];

const Projects =()=> {
    return (
        <section id = "projects">
            <h2 className="section-title">Projects</h2>
            <div className = "projects-grid">
                {projectsData.map((project, index) => (
                    <div    
                        key={index}
                        className="project-card"
                    >
                        <div className="project-header">
                            <h3>{project.title}</h3>
                        </div>
                        <div className="project-body">
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech, techIndex) =>(
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <a href={project.link} className="project-visit-btn" target="_blank" rel="noopener noreferrer">
                            Visit
                        </a>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;