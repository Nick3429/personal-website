import { useState, useEffect, useCallback } from 'react';

export const useCarousel = (totalItems: number, autoRotateDelay: number = 3000) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback (() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, [totalItems]);

    const prevSlide = useCallback (() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    }, [totalItems]);

    const goToSlide = useCallback ((index: number) => {
        setCurrentIndex(index);
    }, []);

    useEffect (() => {
        const interval = setInterval(nextSlide, autoRotateDelay);
        return () => clearInterval(interval);
    }, [nextSlide, autoRotateDelay]);

    return {
        currentIndex,
        nextSlide,
        prevSlide,
        goToSlide
    };
};