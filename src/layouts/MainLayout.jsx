import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout, Menu, Drawer, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons';
import Banner from '../components/Banner'

const { Header, Content, Footer } = Layout

const MainLayout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);
  const location = useLocation();

  // useEffect(() => {
  //   const showBannerRoutes = ['/', '/about', '/teachers', '/news', '/contact', '/qabul'];
  //   setShowBanner(showBannerRoutes.includes(location.pathname));
  // }, [location.pathname]);
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
    '/': [
      {
        image: "https://wallpapers.com/images/featured/sales-758f61svbv17elgb.jpg",
        title: "Bosh Sahifa 1",
        description: "Bosh sahifa haqida birinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Bosh+Sahifa+2",
        title: "Bosh Sahifa 2",
        description: "Bosh sahifa haqida ikkinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Bosh+Sahifa+3",
        title: "Bosh Sahifa 3",
        description: "Bosh sahifa haqida uchinchi ma'lumot.",
      },
    ],
    '/about': [
      {
        image: "https://img.freepik.com/free-photo/black-friday-sales-elements-assortment-with-copy-space_23-2148665617.jpg",
        title: "Maktab Haqida 1",
        description: "Maktab haqida birinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Maktab+Haqida+2",
        title: "Maktab Haqida 2",
        description: "Maktab haqida ikkinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Maktab+Haqida+3",
        title: "Maktab Haqida 3",
        description: "Maktab haqida uchinchi ma'lumot.",
      },
    ],
    '/teachers': [
      {
        image: "https://t4.ftcdn.net/jpg/06/77/02/57/360_F_677025783_psFcLAG8Pp5v4AHSM0JCk2rQttEzXT7N.jpg",
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
    '/news': [
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
    '/contact': [
      {
        image: "https://via.placeholder.com/800x400?text=Aloqa+1",
        title: "Aloqa 1",
        description: "Aloqa haqida birinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Aloqa+2",
        title: "Aloqa 2",
        description: "Aloqa haqida ikkinchi ma'lumot.",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Aloqa+3",
        title: "Aloqa 3",
        description: "Aloqa haqida uchinchi ma'lumot.",
      },
    ],
    '/qabul': [
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
    '/galereya': [
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
      '/': 0,
      '/about': 1,
      '/teachers': 2,
      '/news': 3,
      '/contact': 4,
      '/qabul': 5,
      '/galereya': 6,
    }[page];
    setCurrentSlide(slides[index] || null);
  };

  const menuItems = [
    { key: '/', label: <Link to="/" onClick={() => handleMenuClick('/')}>Bosh Sahifa</Link> },
    { key: '/about', label: <Link to="/about" onClick={() => handleMenuClick('/about')}>Maktab Haqida</Link> },
    { key: '/teachers', label: <Link to="/teachers" onClick={() => handleMenuClick('/teachers')}>O'qituvchilar</Link> },
    { key: '/news', label: <Link to="/news" onClick={() => handleMenuClick('/news')}>Yangiliklar</Link> },
    { key: '/contact', label: <Link to="/contact" onClick={() => handleMenuClick('/contact')}>Aloqa</Link> },
    { key: '/qabul', label: <Link to="/qabul" onClick={() => handleMenuClick('/qabul')}>Qabul</Link> },
    { key: '/galereya', label: <Link to="/galereya" onClick={() => handleMenuClick('/galereya')}>Galereya</Link> },
  ]

  return (
    <Layout className="min-h-screen bg-[#f9f7f7] ">
      <Header className="fixed w-full z-10 bg-white shadow ">
        <div className="container w-full mx-auto flex inset-0 bg-cover filter justify-between items-center py-4 md:py-0">
          <Link to="/" className="text-xl font-bold">Maktab Logo</Link>
          <div className="hidden md:inline w-full">
            <Menu mode="horizontal" items={menuItems} style={{ width: '100%', textAlign: 'right', display: 'flex', justifyContent: 'flex-end', fontSize: "20px", color: "#32CD32" }} />
          </div>
          <Button className="md:hidden" style={{ color: '#32CD32', borderColor: '#32CD32' }} onClick={showDrawer} icon={<MenuOutlined />} />
        </div>
      </Header>
      <Drawer title={
        <div className="flex justify-start items-start text-xl font-bold text-[#32CD32]">
          Menu
        </div>
      } width={300} placement="right" onClose={onClose} visible={visible}>
        <Menu mode="inline" style={{ width: '100%', fontSize: "17px", color: "#32CD32", fontFamily: '-moz-initial' }} items={menuItems.map(item => ({ ...item, label: <Link to={item.key} onClick={onClose}>{item.label}</Link> }))} />
      </Drawer>
      {showBanner && currentSlide && <Banner slide={currentSlide} />}
      <Content className="flex justify-center items-center h-auto my-8 md:my-8">
        <div className="w-full p-4">
          {children}
        </div>
      </Content>
      <Footer className="text-center bg-gray-100 bg-[#32CD32]">
        <p> {new Date().getUTCFullYear()} Maktab Nomi. Barcha huquqlar himoyalangan.</p>
      </Footer>
    </Layout>
  )
}

export default MainLayout
