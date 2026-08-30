import { useState } from 'react';
import type { Certification } from '../types';
import databricksIcon from '../assets/icons/icons8-databricks-48.png';
import azureIcon from '../assets/icons/icons8-azure-48.png';

const certificationsData: Certification[] = [
    {
        category: 'databricks',
        icon: databricksIcon,
        title: 'Databricks Data Engineer',
        issuer: 'Associate',
        year: '2025'
    },
    {
        category: 'databricks',
        icon: databricksIcon,
        title: 'Databricks Generative AI Engineer',
        issuer: 'Associate',
        year: '2025'
    },
    {
        category: 'databricks',
        icon: databricksIcon,
        title: 'Databricks Data Analyst',
        issuer: 'Associate',
        year: '2025'
    },
    {
        category: 'microsoft',
        icon: azureIcon,
        title: 'Azure Fundamentals',
        issuer: 'AZ-900',
        year: '2025'
    },
    {
        category: 'microsoft',
        icon: azureIcon,
        title: 'Azure AI Fundamentals',
        issuer: 'AI-900',
        year: '2025'
    },
    {
        category: 'microsoft',
        icon: azureIcon,
        title: 'Azure Data Fundamentals',
        issuer: 'DP-900',
        year: '2025'
    },
];

type FilterType = 'all' | 'microsoft' | 'databricks';

const Certifications = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');

    const filteredCerts = activeFilter === 'all'
        ? certificationsData
        : certificationsData.filter(cert => cert.category === activeFilter);

    return (
        <section id="certifications">
            <h2 className="section-title">Certifications</h2>
            <div className="cert-filters">
                <button
                    className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                    data-filter="all"
                    onClick={() => setActiveFilter('all')}
                >
                    All
                </button>
                <button
                    className={`filter-btn ${activeFilter ==='microsoft' ? 'active' : ''}`}
                    data-filter="microsoft"
                    onClick={() => setActiveFilter('microsoft')}
                >
                    Microsoft
                </button>
                <button
                    className={`filter-btn ${activeFilter ==='databricks' ? 'active' : ''}`}
                    data-filter="databricks"
                    onClick={() => setActiveFilter('databricks')}
                >
                    Databricks
                </button>
            </div>
            <div className="cert-container">
                {filteredCerts.map((cert, index) => (
                    <div
                        key={index}
                        className="cert-item"
                        data-category={cert.category}
                    >
                        <img src={cert.icon} alt={cert.category} className="cert-icon" />
                        <h3>{cert.title}</h3>
                        <p className = "issuer">{cert.issuer}</p>
                        <p className = "issuer">{cert.year}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;