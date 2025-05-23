import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Image, Skeleton } from 'antd';
import teachers from '../fakeDatas/teachers';
import { useTranslation } from 'react-i18next';

const Teachers = () => {
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation(); 
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='w-full px-4 sm:px-6 md:px-8 lg:px-10 mx-auto font-afacad'>
      <h1 className='text-2xl sm:text-3xl font-bold my-4 sm:my-6 text-[#6e54d8] uppercase'>
        {t("teachers")}
      </h1>
      
      <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4'>
        {loading ? (
          [...Array(4)].map((_, index) => (
            <div 
              key={index} 
              className='border rounded-lg border-[#2b82fc] shadow-lg overflow-hidden'
            >
              <Skeleton 
                loading={loading} 
                active
                avatar={{ shape: 'square', size: 'large' }} 
                paragraph={{ rows: 2 }} 
              />
            </div>
          ))
        ) : (
          teachers.map((teacher, index) => (
            <div 
              key={index} 
              className='border flex flex-col items-center justify-between rounded-lg shadow-lg transition-transform transform hover:scale-105 overflow-hidden bg-white'
              data-aos="fade-up"
              data-aos-delay={index % 4 * 100}
            >
              <div className='w-full aspect-square overflow-hidden'>
                <Image 
                  src={teacher.image} 
                  alt={teacher.name[i18n.language]} 
                  width="100%"
                  height="100%"
                  className='w-full h-full object-cover'
                  placeholder={
                    <Skeleton.Image 
                      active 
                      style={{ width: '100%', height: '100%' }} 
                    />
                  }
                />
              </div>
              
              <div className='w-full p-3 sm:p-4'>
                <h2 className='text-sm sm:text-base md:text-lg font-semibold text-[#2b82fc] text-start'>
                  {teacher.name[i18n.language]}
                </h2>
                <p className='text-xs sm:text-sm md:text-base text-gray-600 text-start'>
                  {teacher.subject[i18n.language]}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Teachers;