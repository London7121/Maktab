import React, { useState, useEffect } from "react";
import { aboutData } from "../fakeDatas/about";
import AOS from "aos";
import "aos/dist/aos.css";
import MoreDescription from "../components/MoreDescription";
import Umumiy from "../pages/Yonalishlar/Umumiy";
import CountUp from "../components/CountUp";
import telegram from "../assets/icons/telegram.svg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="text-center sm:my-10 border-b pb-4 bg-[#f9f7f7] font-afacad">
      <h1 className="text-3xl font-bold my-6 text-[#6e54d8]">
        {t("about")}
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
            {t("students")}
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
            {t("teacher")}
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
            {t("class")}
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
            {t("predmet")}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between mx-4">
        <p className="text-2xl shadow-md my-4 p-2 rounded-md mx- text-start">
          {t("schoolDataTitle")}
        </p>
        <div className="w-auto h-auto py-1 px-2 rounded-lg duration-150 hover:bg-white hover:duration-150 bg-blue-400 text-white">
          <a
            href="https://t.me/+sA_MICEbXUlmN2Zi"
            className="flex items-center w-full gap-1 justify-between"
          >
            <img className="w-6" src={telegram} alt="telegram_icon" />
            <p>{t("tgChannel")}</p>
          </a>
        </div>
      </div>
      <MoreDescription description={t("schoolData")} />
      <Umumiy />
    </div>
  );
};

export default About;
