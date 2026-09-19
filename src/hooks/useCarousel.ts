import { useState, useCallback } from 'react';

export const useCarousel = (totalItems: number) => {
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

    return {
        currentIndex,
        nextSlide,
        prevSlide,
        goToSlide
    };
};