import { useEffect, type RefObject } from 'react';

interface IntersectionObserverOptions {
    threshold?: number;
    rootMargin?: string;
    staggerDelay?: number;
}

export const useIntersectionObserver = (
    refs: RefObject<HTMLElement>[],
    options: IntersectionObserverOptions = {}
) => {
    const { threshold = 0.15, rootMargin = "0px 0px -50px 0px", staggerDelay = 100 } = options;

    useEffect (()=> {
        const observerOptions = {
            threshold,
            rootMargin
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if(entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * staggerDelay);
                }
            });
        }, observerOptions);

        refs.forEach((ref) => {
            if(ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            refs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [refs, threshold, rootMargin, staggerDelay]);
};