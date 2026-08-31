import { useEffect } from 'react';

export const useScrollEffect = () => {
    useEffect (() => {
        const navbar = document.getElementById('navbar');
        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (navbar) {
                if (currentScroll > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }

                //Hide navbar on scroll down, show on scroll up
                if (currentScroll > lastScroll && currentScroll > 500) {
                    navbar.style.transform = 'translateY(-100)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
            }

            lastScroll = currentScroll;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
};

export const useActiveNavLink = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const handleScroll = () => {
            let current = '';
            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id') || '';
                }
            });

            navLinks.forEach((link) => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href?.slice(1) === current) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
};

export const useScrollProgress = () => {
    useEffect(() => {
        const scrollProgress = document.createElement('div');
        scrollProgress.style.position = 'fixed';
        scrollProgress.style.top = '0';
        scrollProgress.style.left = '0'
        scrollProgress.style.height = '3px'
        scrollProgress.style.background = 'rgba(255,255,255,0.7)';
        scrollProgress.style.width = "0%";
        scrollProgress.style.zIndex = '9999';
        scrollProgress.style.transition = 'width 0.1s ease';
        document.body.appendChild(scrollProgress);

        const handleScroll = () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            scrollProgress.style.width = scrolled + '%';
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.removeChild(scrollProgress);
        };
    }, []);
};

export const useSmoothScroll = () => {
    useEffect (() => {
        const handleClick = (e:MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a[href^="#"]');
            if (anchor) {
                e.preventDefault();
                const href = anchor.getAttribute('href');
                if (href) {
                    const targetElement = document.querySelector(href) as HTMLElement | null;
                    if (targetElement) {
                        const navbar = document.getElementById('navbar');
                        const navbarHeight = navbar ? navbar.offsetHeight : 0;
                        const title = targetElement.querySelector('.section-title') as HTMLElement | null;
                        const scrollTarget = title ?? targetElement;
                        const offsetTop = scrollTarget.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);
};