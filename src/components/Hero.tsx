import {useEffect, useRef} from 'react';
import linkedinIcon from '../assets/icons/icons8-linkedin-50.png';
import githubIcon from '../assets/icons/icons8-github-50.png';
import emailIcon from '../assets/icons/icons8-email-50.png';
import portrait from '../assets/images/NickSofianakosHS.jpeg';

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const heroContentRef = useRef<HTMLDivElement>(null);

    useEffect(()=> {
        const hero = heroRef.current;
        const heroContent = heroContentRef.current;

        if(!hero || !heroContent) return;

        const handleMouseMove = (e: MouseEvent) => {
            const xAxis = (window.innerWidth / 2 -e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 -e.pageY) / 25;
            heroContent.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`;
        };

        const handleMouseLeave =()=> {
            heroContent.style.transform = `translateX(0) translateY(0)`;
        };

        hero.addEventListener('mousemove', handleMouseMove);
        hero.addEventListener('mouseleave',handleMouseLeave);

        return () => {
            hero.removeEventListener('mousemove', handleMouseMove);
            hero.removeEventListener('mouseleave', handleMouseLeave)
        };
    }, []);

    return (
        <section className="hero" ref={heroRef}>
            <div className="hero-left">
                <div className="hero-content" ref={heroContentRef}>
                    <h1 className="hero-title">
                        <span className="hero-greeting">Hi, I'm</span>
                        <span className="hero-name">Nick Sofianakos</span>
                    </h1>
                    <p className="tagline">Consultant | Developer | Problem Solver</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/nick-sofianakos/" title = "LinkedIn">
                        <img src = {linkedinIcon} alt="LinkedIn" width="24" height ="24" />
                        </a>
                        <a href="https://github.com/Nick3429" title="GitHub">
                        <img src={githubIcon} alt="GitHub" width="24" height="24"/>
                        </a>
                        <a href="mailto:nsofianakos@gmail.com" title="Email">
                            <img src={emailIcon} alt="Email" width="24" height="24" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <div className="hero-photo">
                    <img src={portrait} alt="Nick Sofianakos" />
                </div>
            </div>
            <div className="scroll-indicator"></div>
        </section>
    );
};

export default Hero;