import { useCarousel } from '../hooks/useCarousel';
import type { Skillcard } from '../types';
import codeIcon from '../assets/icons/icons8-code-48.png';
import laptopCodingIcon from '../assets/icons/icons8-laptop-coding-48.png';
import dataAnalysisIcon from '../assets/icons/icons8-data-analysis-48.png';
import toolsIcon from '../assets/icons/icons8-tools-48.png';
import databaseIcon from '../assets/icons/icons8-database-48.png';
import testingIcon from '../assets/icons/icons8-testing-48.png';

const skillsData: Skillcard[] = [
    {
        icon: codeIcon,
        title: 'Programming Languages',
        description: 'Python, R, SQL, JavaScript, Java, C'
    },
    {
        icon: laptopCodingIcon,
        title: 'Web Development',
        description: 'React, HTML, CSS, Streamlit'
    },
    {
        icon: dataAnalysisIcon,
        title: 'Data Analysis',
        description: 'SQL, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, Excel'
    },
    {
        icon: toolsIcon,
        title: 'Tools & Platforms',
        description: 'Windows, Git, Azure, Databricks'
    },
    {
        icon: databaseIcon,
        title: 'Databases',
        description: 'MongoDB, MySQL, Azure Cosmos DB'
    },
    {
        icon: testingIcon,
        title: 'Testing & DevOps',
        description: 'Unit Tests, Integration Tests, UAT, CI/CD'
    },
];

const Skills = () => {
    const { currentIndex, nextSlide, prevSlide } = useCarousel(skillsData.length, 3000);

    const getCardClass = (index: number) => {
        const totalCards = skillsData.length;
        const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
        const nextIndex = (currentIndex +1) % totalCards;

        if (index === currentIndex) return 'skill-card active';
        if (index === prevIndex) return 'skill-card prev';
        if (index === nextIndex) return 'skill-card next';
        return 'skill-card';
    };

    return (
        <section id= 'skills'>
            <h2 className='section-title'>Skills</h2>
            <div className='skill-carousel-container'>
                <button
                    className='skill-arrow skill-arrow-left'
                    aria-label='Previous'
                    onClick={prevSlide}
                >
                    <svg width="24" height="24" viewBox='0 0 24 24' fill='none'>
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div className="skill-card-display">
                    {skillsData.map((skill, index) => (
                        <div key={index} className={getCardClass(index)}>
                            <img src={skill.icon} alt={skill.title} className="skill-icon"/>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
                <button
                    className="skill-arrow skill-arrow-right"
                    aria-label="Next"
                    onClick={nextSlide}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Skills;