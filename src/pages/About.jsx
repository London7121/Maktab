import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd'; 
import { aboutData } from '../fakeDatas/about'; 
import newsItems from '../fakeDatas/news';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import MoreDescription from '../components/MoreDescription';
const About = () => {
  const [loading, setLoading] = useState(true);
  const truncateDescription = (description) => {
    return description.length > 70 ? description.slice(0, 99) + '...' : description;
  };
  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
    <div className='text-center my-10 border-b pb-4 bg-[#f9f7f7] font-afacad'>
      <h1 className='text-3xl font-bold my-6 text-[#2b82fc]'>{aboutData.title}</h1>
      <p className='text-2xl shadow-md my-4 p-2 rounded-md mx-4 text-start'>{aboutData.description}</p>
      <MoreDescription description={aboutData.school_datas}/>
      {/* <p className='text-xl text-gray-600 mx-4 text-start'>{aboutData.school_datas}</p> */}
      <h2 className='text-3xl font-semibold my-10 text-[#2b82fc]'>Maqsadlarimiz</h2>
      <ul className='text-2xl list-inside mx-auto flex items-center justify-around flex-wrap'>
        {aboutData.goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
