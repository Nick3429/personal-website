// Typescript interfaces for the portfolio website

export interface Skillcard {
    icon: string;
    title: string;
    description: string;
}

export interface Certification {
    category: 'microsoft' | 'databricks' | 'openai';
    icon: string;
    title: string;
    issuer: string;
    year: string;
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

export interface Experience {
    title: string;
    company: string;
    date: string;
    responsibilities: string[];
    id: string;
}