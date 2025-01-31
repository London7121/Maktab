import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { slides } from "../fakeDatas/bannerData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = ({ slide }) => {
    if (!slide || slide.length === 0) return null;

    return (
        <div className="relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                onSwiper={(swiper) => {
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span className="${className}" style="background-color: #32CD32; width: 12px; height: 12px;"></span>`;
                    },
                }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop
                className="max-w-full"
            >
                {/* <div className="swiper-button-next-custom" style={{ color: '#32CD32', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>Next</div> */}
                {/* <div className="swiper-button-prev-custom" style={{ color: '#32CD32', position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>Prev</div> */}
                {slide.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative mx-auto  w-full h-[300px] md:h-screen">
                            <div
                                className="absolute inset-0 bg-cover bg-center filter blur-s brightness-50"
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-start top-[150px] text-center text-white p-4 z-10">
                                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold animate-pulse">
                                    {item.title}
                                </h2>
                                <p className="mt-2 sm:mt-4 text-lg md:text-xl lg:text-2xl animate-pulse">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


export default Banner;