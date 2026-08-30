import { useEffect, useRef, useState, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import type { Experience as ExperienceEntry } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const experienceData: ExperienceEntry[] = [
    {
        id: 'ey-current',
        title: 'Technology Consultant',
        company: 'Ernst & Young',
        date: 'Current',
        responsibilities: [
            'Managed the migration of a full-stack document intelligence solution from Azure to AWS, enabling cloud-platform alignment and accelerating AI discovery efforts for future enterprise implementation',
            'Led enhancements to a pre-existing RAG solution by implementing caching and chat history, driving 100% of the SOW value',
            'Lead developer on feasibility analysis for a QA/QC solution to identify discrepancies between legacy system documents and current system documents',
            'Implemented a batch solution in Databricks to update the client\'s catalog, schema, and table descriptions, facilitating the future development of an AI/BI Genie solution',
            'Collaborated with developers using Databricks Notebooks and Azure DevOps for version control to implement unit tests for an automated test development suite increasing test coverage by over 50%'
        ]
    },
    {
        id: 'blues-2024',
        title: 'Analytics Intern (Volunteer)',
        company: 'St. Louis Blues',
        date: 'Summer 2024',
        responsibilities: [
            'Enhanced the St. Louis Blues database with historical salary cap data by web scraping player salary data off CapFriendly using Python packages like bs4, Selenium, and Requests'
        ]
    },
    {
        id: 'ey-2023',
        title: 'Technology Consultant Intern',
        company: 'Ernst & Young',
        date: 'Summer 2023',
        responsibilities: [
            'Developed a mock ChatGPT plugin connected to a client\'s backend API and integrated with an LLM, enabling real-time inventory query responses via a Streamlit front-end interface'
        ]
    },
    {
        id: 'cbb-analytics',
        title: 'Data Science Intern',
        company: 'CBB Analytics',
        date: 'Dec 2022 – Mar 2023',
        responsibilities: [
            'Designed and implemented a comprehensive suite of college basketball streakiness metrics in Google BigQuery using SQL, enabling clients to make more informed decisions',
            'Pioneered a daily newsletter, delivering essential statistical highlights from the previous night\'s conference games to clients each morning, facilitating real-time updates on their opponents'
        ]
    },
    {
        id: 'eze-castle',
        title: 'Intern',
        company: 'Eze Castle Integration',
        date: 'Summer 2022',
        responsibilities: [
            'Created Azure resource topology diagrams in PowerShell to reveal interconnectedness of technology resources',
            'Developed PowerShell test scripts to validate client server configurations and ensure compliance with technical specifications',
            'Audited and migrated existing scripts to GitHub to ensure production scripts remained current and version-controlled'
        ]
    }
];

const SEGMENT_HEIGHT = 260;
const ROAD_WIDTH = 400;
const LEFT_X = 100;
const RIGHT_X = 300;

const stops = experienceData.map((exp, index) => ({
    ...exp,
    x: index % 2 === 0 ? LEFT_X : RIGHT_X,
    y: index * SEGMENT_HEIGHT + SEGMENT_HEIGHT / 2,
    side: index % 2 === 0 ? 'left' : 'right' as const
}));

const totalHeight = experienceData.length * SEGMENT_HEIGHT;

const buildRoadPath = () => {
    if (stops.length === 0) return '';

    let d = `M ${stops[0].x} 0 `;
    d += `C ${stops[0].x} ${SEGMENT_HEIGHT * 0.25}, ${stops[0].x} ${stops[0].y - SEGMENT_HEIGHT * 0.25}, ${stops[0].x} ${stops[0].y} `;

    for (let i = 1; i < stops.length; i++) {
        const prev = stops[i - 1];
        const curr = stops[i];
        const midY = (prev.y + curr.y) / 2;
        d += `C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y} `;
    }

    const last = stops[stops.length - 1];
    d += `C ${last.x} ${last.y + SEGMENT_HEIGHT * 0.25}, ${last.x} ${totalHeight}, ${last.x} ${totalHeight}`;

    return d;
};

const roadPath = buildRoadPath();

const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState<ExperienceEntry | null>(null);

    useIntersectionObserver([containerRef as RefObject<HTMLElement>], { threshold: 0.15 });

    useEffect(() => {
        if (!selected) return;

        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelected(null);
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [selected]);

    return (
        <section id="experience">
            <h2 className="section-title">Experience</h2>
            <div className="experience-road" ref={containerRef} style={{ height: `${totalHeight}px` }}>
                <svg
                    className="road-svg"
                    viewBox={`0 0 ${ROAD_WIDTH} ${totalHeight}`}
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path className="road-asphalt" d={roadPath} />
                    <path className="road-line" d={roadPath} />
                </svg>

                {stops.map((stop, index) => (
                    <div
                        key={stop.id}
                        className="road-stop"
                        style={{
                            top: `${stop.y}px`,
                            left: `${(stop.x / ROAD_WIDTH) * 100}%`,
                            transitionDelay: `${index * 0.12}s`
                        }}
                    >
                        <span className="road-dot" />
                        <button
                            type="button"
                            className={`road-label road-label-${stop.side}`}
                            onClick={() => setSelected(stop)}
                        >
                            <span className="road-company">{stop.company}</span>
                            <span className="road-date">{stop.date}</span>
                        </button>
                    </div>
                ))}
            </div>

            {selected && createPortal(
                <div className="experience-modal-overlay" onClick={() => setSelected(null)}>
                    <div
                        className="experience-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="experience-modal-title"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="experience-modal-close"
                            aria-label="Close"
                            onClick={() => setSelected(null)}
                        >
                            &times;
                        </button>
                        <h3 id="experience-modal-title">{selected.title}</h3>
                        <p className="experience-modal-meta">{selected.company} &middot; {selected.date}</p>
                        {selected.responsibilities.length > 0 ? (
                            <ul>
                                {selected.responsibilities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="experience-modal-placeholder">Details coming soon.</p>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default Experience;
