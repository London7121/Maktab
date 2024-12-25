import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons'; // Import Ant Design icon
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Skeleton } from 'antd';
import newsItems from '../fakeDatas/news';

const News = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    // Simulate data loading for 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const truncateDescription = (description) => {
    return description.length > 70 ? description.slice(0, 99) + '...' : description;
  };

  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold my-6 text-[#32CD32]'>Yangiliklar</h1>
      <div className='w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {loading ? (
          [...Array(3)].map((_, index) => (
            <div key={index} className='w-full'>
              <Skeleton.Input style={{ width: '100%' }} active loading={loading} paragraph={{ rows: 3 }} />
            </div>
          ))
        ) : (
          // Display actual content when loading is complete
          newsItems.map((news, index) => (
            <div key={index} className='border rounded-lg shadow-md flex flex-col items-start justify-between' data-aos="fade-up">
              <img src={news.image} alt={news.title} className='w-full h-48 object-cover rounded' />
              <h2 className='text-xl font-semibold mt-2 text-start p-2'>{news.title}</h2>
              <p className='text-lg text-start pl-2'>{truncateDescription(news.description)}</p>

              {/* Centered Link */}
              <div className="flex justify-center mt-3 pl-[78%] pb-2">
                <Link to={news.link} className='text-[#32CD32] text-lg hover:text-[#36CD32] animate-pulse'>
                  Batafsil
                  <ArrowRightOutlined className="ml-2 animate-pulse" />
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default News;
