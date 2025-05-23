import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Banner from "../components/Banner";
import logo from "../../src/assets/icons/logo.png";
import img1 from "../../src/assets/imagesBanner/img1.jpg";
import telegram from "../../src/assets/icons/telegram.svg";
import Footer from "./Footer";
import LanguageSwitcher from "../components/languageSwitch";
import { useTranslation } from "react-i18next";
import { CgMenuRightAlt } from "react-icons/cg";

const { Header, Content } = Layout;

const MainLayout = ({ children }) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const routeSlides = slides[location.pathname] || null;
    setShowBanner(!!routeSlides);
    setCurrentSlide(routeSlides);
  }, [location.pathname]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const slides = {
    "/": [
      {
        image: img1,
        title: "Bosh Sahifa 1",
        description: "Bosh sahifa haqida birinchi ma'lumot.",
      },
    ],
    "/about": [
      {
        image:
          "https://img.freepik.com/free-photo/black-friday-sales-elements-assortment-with-copy-space_23-2148665617.jpg",
        title: "Maktab Haqida 1",
        description: "Maktab haqida birinchi ma'lumot.",
      },
      {
        image: "https://ridm.uz/wp-content/uploads/2022/06/slider1-1.jpg",
        title: "Maktab Haqida 2",
        description: "Maktab haqida ikkinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Maktab+Haqida+3",
        title: "Maktab Haqida 3",
        description: "Maktab haqida uchinchi ma'lumot.",
      },
    ],
    "/leader": [
      {
        image:
          "https://img.freepik.com/free-photo/black-friday-sales-elements-assortment-with-copy-space_23-2148665617.jpg",
        title: "Raxbar1",
        description: "Maktab haqida birinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Maktab+Haqida+2",
        title: "Raxbar 2",
        description: "Maktab haqida ikkinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Maktab+Haqida+3",
        title: "Raxbar 3",
        description: "Maktab haqida uchinchi ma'lumot.",
      },
    ],
    "/teachers": [
      {
        image:
          "https://t4.ftcdn.net/jpg/06/77/02/57/360_F_677025783_psFcLAG8Pp5v4AHSM0JCk2rQttEzXT7N.jpg",
        title: "O'qituvchilar 1",
        description: "O'qituvchilar haqida birinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=O'qituvchilar+2",
        title: "O'qituvchilar 2",
        description: "O'qituvchilar haqida ikkinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=O'qituvchilar+3",
        title: "O'qituvchilar 3",
        description: "O'qituvchilar haqida uchinchi ma'lumot.",
      },
    ],
    "/news": [
      {
        image: "https://via.placeholder.com/800x400?text=Yangiliklar+1",
        title: "Yangiliklar 1",
        description: "Yangiliklar haqida birinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Yangiliklar+2",
        title: "Yangiliklar 2",
        description: "Yangiliklar haqida ikkinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Yangiliklar+3",
        title: "Yangiliklar 3",
        description: "Yangiliklar haqida uchinchi ma'lumot.",
      },
    ],
    "/contact": [
      {
        image: "https://ridm.uz/wp-content/uploads/2016/06/shutterstock_381527992.jpg",
        title: "Birinchi Qadam",
        description: "Samarali aloqa muvaffaqiyatga yo'l ochadi. Muloqotda samimiylik va e'tibor muhim.",
      },
      {
        image: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66433e25be4bd00d961a99fd_66434ea1be4bd00d962905f6/scale_1200",
        title: "Yaqin Bog'liqlik",
        description: "O'zaro tushunish va ishonch aloqa asosidir. Har bir suhbat imkoniyatdir.",
      },
      {
        image: "http://www.gerberaprintsinc.com/storage/images/E8wtjptuVJFznxvBFdZzsOAynB1coByZXJgSxF7r.jpg",
        title: "Yangi Cho'qqilar",
        description: "Har bir so'z yangi imkoniyatlar eshigini ochadi. Suhbatingiz samimiy bo'lsin.",
      },
    ],
    "/qabul": [
      {
        image: "https://via.placeholder.com/800x400?text=Qabul+1",
        title: "Qabul 1",
        description: "Qabul haqida birinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Qabul+2",
        title: "Qabul 2",
        description: "Qabul haqida ikkinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Qabul+3",
        title: "Qabul 3",
        description: "Qabul haqida uchinchi ma'lumot.",
      },
    ],
    "/galereya": [
      {
        image: "https://via.placeholder.com/800x400?text=Qabul+1",
        title: "galereya 1",
        description: "Qabul haqida birinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Qabul+2",
        title: "galereya 2",
        description: "Qabul haqida ikkinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Qabul+3",
        title: "galereya 3",
        description: "Qabul haqida uchinchi ma'lumot.",
      },
    ],
  };

  const handleMenuClick = (page) => {
    const index = {
      "/": 0,
      "/about": 1,
      "/leader": 2,
      "/teachers": 3,
      "/news": 4,
      "/contact": 5,
      "/qabul": 6,
      "/galereya": 7,
    }[page];
    setCurrentSlide(slides[index] || null);
  };

  const menuItems = [
    {
      key: "/",
      label: (
        <Link to="/" onClick={() => handleMenuClick("/")}>
          {t("home")}
        </Link>
      ),
    },
    {
      key: "/about",
      label: (
        <Link to="/about" onClick={() => handleMenuClick("/about")}>
          {t("about")}
        </Link>
      ),
    },
    {
      key: "/leader",
      label: (
        <Link to="/leader" onClick={() => handleMenuClick("/leader")}>
          {t("leader")}
        </Link>
      ),
    },
    {
      key: "/teachers",
      label: (
        <Link to="/teachers" onClick={() => handleMenuClick("/teachers")}>
          {t("teachers")}
        </Link>
      ),
    },
    {
      key: "/news",
      label: (
        <Link to="/news" onClick={() => handleMenuClick("/news")}>
          {t("news")}
        </Link>
      ),
    },
    {
      key: "/qabul",
      label: (
        <Link to="/qabul" onClick={() => handleMenuClick("/qabul")}>
          {t("acceptance")}
        </Link>
      ),
    },
    {
      key: "/galereya",
      label: (
        <Link to="/galereya" onClick={() => handleMenuClick("/galereya")}>
          {t("gallery")}
        </Link>
      ),
    },
    {
      key: "/contact",
      label: (
        <Link to="/contact" onClick={() => handleMenuClick("/contact")}>
          {t("contact")}
        </Link>
      ),
    },
  ];

  return (
    <Layout className="min-h-screen bg-[#f9f7f7] ">
      <div className="fixed w-full z-10 top-0 shadow h-auto py-2 sm:py-4 bg-misty-white backdrop-blur-md">
        <div className="w-full max-w-[1840px] mx-auto px-10 flex items-center justify-between md:py-0">
          <Link
            to="/"
            className="flex items-center justify-between w-[50%] sm:w-[50%] lg:w-[30%] xl:w-[28%] 2xl:w-[25%] gap-1"
          >
            <img className="w-[110px]" src={logo} alt="logo" />
            <div className="flex flex-col">
              <span className="text-[14px] lg:text-[14px] text-blue-800 font-medium font-afacad">
                RESPUBLIKA IXTISOSLASHTIRILGAN
              </span>
              <span className="text-[14px] sm:text-[20px] text-red-500 font-semibold font-afacad">
                DIZAYN MAKTABI
              </span>
            </div>
          </Link>
          <div className="hidden w-full lg:flex justify-center">
            <div className="w-[80%]">
              <Menu
                mode="horizontal"
                selectedKeys={[location.pathname]}
                items={menuItems}
                className="font-afacad"
                style={{
                  fontSize: "16px",
                  color: "#32CD32",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              />
            </div>
          </div>
          <div className="hidden lg:flex">
            <LanguageSwitcher />
          </div>
          <Button
            className="lg:hidden bg-transparent border-none hover:bg-transparent"
            style={{
              fontSize: "44px",
              backgroundColor: "transparent",
              hover: { backgroundColor: "transparent" }, // Shunchaki eslatma
            }}
            onClick={showDrawer}
            icon={<CgMenuRightAlt className="bg-transparent" />}
          />
        </div>
      </div>
      <Drawer
        title={
          <div className="flex justify-start items-start text-xl font-afacad text-[#2b82fc]">
            <Link
              to="/"
              className="flex items-center justify-between w-[50%] sm:w-[50%] lg:w-[30%] gap-1"
            >
              <img className="w-[110px]" src={logo} alt="logo" />
            </Link>
          </div>
        }
        width={300}
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Menu
          mode="inline"
          style={{ width: "100%", fontSize: "17px", color: "#32CD32" }}
          className="font-afacad"
          items={menuItems.map((item) => ({
            ...item,
            label: (
              <Link to={item.key} onClick={onClose}>
                {item.label}
              </Link>
            ),
          }))}
        />
        <div className="ml-6 flex flex-col items-start justify-between">
          <LanguageSwitcher />
        </div>
      </Drawer>

      {currentSlide && <Banner slide={currentSlide} />}
      <Content className="flex justify-center items-center h-auto my-8 md:my-8">
        <div className="w-full p-4">{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
