import signature from '../assets/images/Signature.png';

const Navbar = () => {
    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="navbar" id="navbar">
            <div className="navbar-container">
                <div className="logo" onClick={ScrollToTop}>
                    <img src={signature} alt="Signature" />
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#about" className="nav-link">
                            <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="nav-link">
                            <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </svg>
                            <span>Skills</span>
                        </a>
                    </li>
                    <li>
                        <a href="#certifications" className="nav-link">
                            <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="8" r="7" />
                                <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                            </svg>
                            <span>Certifications</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="nav-link">
                            <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                            </svg>
                            <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="nav-link">
                            <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                            <span>Experience</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;