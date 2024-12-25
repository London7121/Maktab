import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="w-24 h-24 rounded-full border-4 border-t-[#32CD32] border-r-[#32CD32] border-b-transparent border-l-transparent animate-spin"></div>
                </div>
                <div className="absolute top-2 left-2 w-24 h-24">
                    <div className="w-24 h-24 rounded-full border-4 border-t-[#32CD32] border-r-[#32CD32] border-b-transparent border-l-transparent animate-spin-reverse"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;