import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd'; // Ant Design Skeleton komponenti
import { aboutData } from '../fakeDatas/about'; // aboutData ni import qilamiz

const About = () => {
  const [loading, setLoading] = useState(true); // Yuklanish holati

  useEffect(() => {
    // Ma'lumotlar yuklanishini simulyatsiya qilish
    setTimeout(() => {
      setLoading(false); // Yuklanish tugadi
    }, 1000); // 1 soniya kutish
  }, []);

  if (loading) {
    return (
      <div className="text-center flex flex-col gap-4 items-center mx-auto md:flex-row">
        <Skeleton.Input active paragraph={{ rows: 1 }} />
        <Skeleton.Input active paragraph={{ rows: 3 }} />
        <Skeleton.Input active paragraph={{ rows: 3 }} />
      </div>
    );
  }

  return (
    <div className='text-center my-8 bg-[#f9f7f7]'>
      <h1 className='text-3xl font-bold my-6 text-[#32CD32]'>{aboutData.title}</h1>
      <p className='text-lg mx-4'>{aboutData.description}</p>
      <h2 className='text-2xl font-semibold my-4 text-[#32CD32]'>Maqsadlarimiz</h2>
      <ul className='list-disc list-inside mx-auto'>
        {aboutData.goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
