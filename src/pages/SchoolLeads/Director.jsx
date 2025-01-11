import React, { useState, useEffect } from 'react';
import { Image, Skeleton } from 'antd';
import directors from '../../fakeDatas/leaders';

const Director = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    if (!directors) {
        return <h2 className="text-center text-red-500">Ma'lumot topilmadi!</h2>;
    }

    return (
        <div className='max-w-[1380px] mx-auto p-4 mt-1 font-afacad'>
            <div className='flex flex-row items-start lg:items-start gap-6'>
                {/* Chap tarafdagi rasm */}
                <div className='w-[30%] flex items-center justify-center'>
                    {loading ? (
                        <Skeleton.Image className='w-[300px] h-[200px]' active />
                    ) : (
                        <Image
                            src={directors?.director.image}
                            alt={directors?.director.title}
                            width="100%"
                            height="auto"
                            className='rounded-md'
                        />
                    )}
                </div>

                {/* O'ng tarafdagi ma'lumotlar */}
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-2xl sm:text-3xl font-bold text-[#2b82fc] text-center lg:text-left'>
                        {directors?.director.title}
                    </h1>
                    <p className='text-base sm:text-lg mt-4 text-justify'>
                        {directors?.director.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Director;
