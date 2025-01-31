import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons'; // Import Ant Design icon
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Image, Skeleton } from 'antd';
import newsItems from '../fakeDatas/news';
import { useTranslation } from 'react-i18next';

const News = () => {
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation(); // useTranslation hook'ini chaqiramiz

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const truncateDescription = (description) => {
    return description.length > 70 ? description.slice(0, 90) + '...' : description;
  };

  return (
    <div className='text-center font-afacad'>
      <h1 className='text-3xl font-bold my-6 text-[#6e54d8] font-afacad'>{t("news")}</h1>
      <div className='w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {loading ? (
          [...Array(3)].map((_, index) => (
            <div key={index} className='w-full'>
              <Skeleton.Input style={{ width: '100%' }} active loading={loading} paragraph={{ rows: 3 }} />
            </div>
          ))
        ) : (
          newsItems[i18n.language].map((news, index) => (
            <div key={index} className=' rounded-lg shadow-md flex flex-col items-center justify-between' >
              <Image width={"100%"} height={280} src={news.image} alt={news.title} className='object-cover rounded-md rounded-b-none' />
              <div className=' w-full flex flex-col items-start justify-between px-1'>
                <h2 className='text-xl font-semibold mt-2 text-start p-2'>{news.title}</h2>
                <p className='text-lg text-start pl-2'>{(news.description)}</p>
              </div>

              {/* Centered Link */}
              <div className="flex justify-center ml-[68%] md:ml-[72%] py-2">
                <Link to={news.link} className='text-[#2b82fc] text-md lg:text-lg hover:text-[#2b82fc] animate-pulse'>
                  {t("more")}
                  <ArrowRightOutlined className="ml-1 animate-pulse" />
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
