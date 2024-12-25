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
                className="fixed bottom-5 z-10 text-[20px] right-5 p-3 w-[50px] rounded-full bg-[#32CD32] text-white text-lg shadow-md hover:bg-[#36CD32] transition-all duration-300"
            >
                ↑
            </button>
        )
    );
};