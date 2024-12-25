import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Skeleton } from 'antd'; // Ant Design komponentlari
import newsItems from '../fakeDatas/news'; // Yangiliklar ma'lumotlari

const SingleNews = () => {
    const { id } = useParams(); // URL dan `id`ni olish
    const [loading, setLoading] = useState(true); // Yuklanish holati
    const [news, setNews] = useState(null); // Yangilik ma'lumotlari

    useEffect(() => {
        // Ma'lumotlarni yuklashni simulyatsiya qilish
        setTimeout(() => {
            const foundNews = newsItems.find((item) => item.id === parseInt(id));
            setNews(foundNews);
            setLoading(false); // Yuklanish tugadi
        }, 1000); // 1 soniya vaqt yuklanish uchun
    }, [id]);

    if (loading) {
        return (
            <div className="w-[85%] max-w-[1380px] mx-auto p-4 my-8 flex flex-col lg:flex-row items-start gap-6">
                {/* Skeleton komponenti yuklanayotgan paytda */}
                <Skeleton.Image active style={{ width: '300px', height: '300px' }} />
                <Skeleton active paragraph={{ rows: 4 }} />
            </div>
        );
    }

    if (!news) {
        return <h2 className="text-center text-red-500">Yangilik topilmadi!</h2>;
    }

    return (
        <div className='w-[85%] max-w-[1380px] mx-auto p-4 my-8'>
            <div className='flex flex-col lg:flex-row items-start gap-6'>
                {/* Chap tarafdagi rasm */}
                <div className='w-full lg:w-1/2'>
                    {loading ? (
                        <Skeleton.Image active /> // Yuklanayotgan rasm uchun Skeleton
                    ) : (
                        <Image
                            src={news.image}
                            alt={news.title}
                            width="100%"
                            height="auto"
                            className='rounded-md'
                        />
                    )}
                </div>

                {/* O'ng tarafdagi ma'lumotlar */}
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-3xl font-bold text-[#32CD32]'>{news.title}</h1>
                    <p className='text-lg mt-4'>{news.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;
