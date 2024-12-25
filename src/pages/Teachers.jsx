import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Skeleton } from 'antd';  // Import Skeleton component
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
    <div className='text-center w-[95%] mx-auto'>
      <h1 className='text-3xl font-bold my-6 text-[#32CD32]'>O'qituvchilar</h1>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {loading ? (
          // Skeleton Loader when loading
          [...Array(4)].map((_, index) => (
            <div key={index} className='border rounded-lg border-[#32CD32] shadow-lg'>
              <Skeleton loading={loading} avatar paragraph={{ rows: 2 }} />
            </div>
          ))
        ) : (
          // Display actual content when loading is complete
          teachers.map((teacher, index) => (
            <div key={index} className='border rounded-lg border-[#32CD32] shadow-lg transition-transform transform hover:scale-105' data-aos="fade-up">
              <img src={teacher.image} alt={teacher.name} className='w-full md:h-[260px] object-cover rounded-t-lg' />
              <h2 className='text-xl font-semibold mt-2 text-[#32CD32] p-2'>{teacher.name}</h2>
              <p className='text-lg p-2'>{teacher.subject}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Teachers;
