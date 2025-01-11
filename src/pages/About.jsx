import React, { useState, useEffect } from "react";
import { Skeleton } from "antd";
import { aboutData } from "../fakeDatas/about";
import AOS from "aos";
import "aos/dist/aos.css";
import MoreDescription from "../components/MoreDescription";
import CountUp from "../components/CountUp";
import telegram from "../assets/icons/telegram.svg";

const About = () => {
  const [loading, setLoading] = useState(true);
  const truncateDescription = (description) => {
    return description.length > 70
      ? description.slice(0, 120) + "..."
      : description;
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
    <div className="text-center sm:my-10 border-b pb-4 bg-[#f9f7f7] font-afacad">
      <h1 className="text-3xl font-bold my-6 text-[#6e54d8]">
        {aboutData.title}
      </h1>
      <div className="w-full h-auto p-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 items-center justify-between gap-4">
        <div className="flex flex-col items-center bg-red-500 hover:bg-red-600 hover:shadow-red-600 border-red-200 rounded-md w-auto h-auto p-2 shadow-sm duration-150 hover:scale-105 hover:duration-150 hover:shadow-lg">
          <CountUp
            from={aboutData.studentsCount - 209}
            to={aboutData.studentsCount}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-[40px] font-afacad font-medium text-white"
          />
          <p className="text-xl sm:text-2xl text-gray-100 mx-4 text-start">
            ta o'quvchi
          </p>
        </div>
        <div className="flex flex-col items-center  bg-green-500 hover:bg-green-600 hover:shadow-green-600 border-green-200  rounded-md w-auto h-auto p-2 shadow-sm duration-150 hover:scale-105 hover:duration-150 hover:shadow-lg">
          <CountUp
            from={0}
            to={aboutData.teacherssCount}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-[40px] font-afacad font-medium text-white"
          />
          <p className="text-xl sm:text-2xl text-gray-100 mx-4 text-start">
            ta o'qituvchi
          </p>
        </div>
        <div className="flex flex-col items-center  bg-blue-500 hover:bg-blue-600 hover:shadow-blue-600 border-blue-200 rounded-md w-auto h-auto p-2 shadow-sm duration-150 hover:scale-105 hover:duration-150 hover:shadow-lg">
          <CountUp
            from={0}
            to={aboutData.classsesCount}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-[40px] font-afacad font-medium text-white"
          />
          <p className="text-xl sm:text-2xl text-gray-100 mx-4 text-start">
            ta sinf
          </p>
        </div>
        <div className="flex flex-col items-center  bg-yellow-500 hover:bg-yellow-400 hover:shadow-yellow-500  rounded-md w-auto h-auto p-2 shadow-sm duration-150 hover:scale-105 hover:duration-150 hover:shadow-lg">
          <CountUp
            from={0}
            to={aboutData.predmetsCount}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-[40px] font-afacad font-medium text-white"
          />
          <p className="text-xl sm:text-2xl text-gray-100 mx-4 text-start">
            ta fan
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between mx-4">
        <p className="text-2xl shadow-md my-4 p-2 rounded-md mx- text-start">
          {aboutData.description}
        </p>
        <div className="w-auto h-auto py-1 px-2 rounded-lg duration-150 hover:bg-white hover:duration-150 bg-blue-400 text-white">
          <a
            href="https://t.me/+sA_MICEbXUlmN2Zi"
            className="flex items-center w-full gap-1 justify-between"
          >
            <img className="w-6" src={telegram} alt="telegram_icon" />
            <p> Telegram kanalga o'tish</p>
          </a>
        </div>
      </div>
      <MoreDescription description={aboutData.school_datas} />
      {/* <p className='text-xl text-gray-600 mx-4 text-start'>{aboutData.school_datas}</p> */}
      {/* <h2 className="text-3xl font-semibold my-10 text-[#6e54d8]">
        Maqsadlarimiz
      </h2>
      <ul className="text-2xl list-inside mx-auto flex items-center justify-around flex-wrap">
        {aboutData.goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default About;
