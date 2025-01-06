import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Image, Skeleton } from 'antd';  // Import Skeleton component
import teachers from '../fakeDatas/teachers';

const Teachers = () => {
  const [loading, setLoading] = useState(true);

  // Initialize AOS
  useEffect(() => {
    AOS.init();

    // Simulate data loading for 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='text-center w-[95%] mx-auto font-afacad'>
      <h1 className='text-3xl font-bold my-6 text-[#2b82fc]'>O'qituvchilar</h1>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {loading ? (
          [...Array(4)].map((_, index) => (
            <div key={index} className='border rounded-lg border-[#2b82fc] shadow-lg'>
              <Skeleton loading={loading} avatar paragraph={{ rows: 2 }} />
            </div>
          ))
        ) : (
          teachers.map((teacher, index) => (
            <div key={index} className='border flex flex-col items-center justify-between rounded-lg shadow-lg transition-transform transform hover:scale-105' data-aos="fade-up">
              <Image style={{ objectFit: 'cover' }} src={teacher.image} width={"100%"} height={200} alt={teacher.name} className='w-full md:h-[260px] object-cover rounded-t-lg' />
              <div className='flex flex-col items-start justify-between p-2 w-full'>
                <h2 className='text-[15px] sm:text-xl  font-semibold text-[#2b82fc]'>{teacher.name}</h2>
                <p className='text-lg '>{teacher.subject}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Teachers;
