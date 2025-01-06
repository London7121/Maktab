import React, { useState, useEffect } from 'react';

export const ScrollToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        isVisible && (
            <button
                onClick={handleScrollToTop}
                className="fixed bottom-5 z-10 text-[28px] right-5 p-2 w-[50px] h-[50px] bg-[#6e54d8] rounded-full backdrop-blur-lg text-white text-lg shadow-md transition-all duration-300"
            >
                ↑
            </button>
        )
    );
};