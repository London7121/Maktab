import { Image, Skeleton } from 'antd'
import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import leaders from '../../fakeDatas/leaders'

export default function Chiefs() {
    const { t, i18n } = useTranslation(); // useTranslation hook'ini chaqiramiz

    const [loading, setLoading] = useState(true);
    const truncateDescription = (description) => {
        return description.length > 70 ? description.slice(0, 99) + '...' : description;
    };
    useEffect(() => {
        Aos.init();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div>
            <div className='text-start font-afacad'>
                <h1 className='text-3xl font-bold my-10 text-[#6e54d8] ml-8'>{t("zam7")}</h1>
                <div className='w-auto mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                    {loading ? (
                        [...Array(5)].map((_, index) => (
                            <div key={index} className='w-full'>
                                <Skeleton.Image style={{ width: '200px',height:"300px" }} active loading={loading} paragraph={{ rows: 3 }} />
                            </div>
                        ))
                    ) : (
                        leaders?.addel_kadrs.map((news, index) => (
                            <div
                                key={index}
                                className='border rounded-lg shadow-md flex flex-col items-center gap-2'
                                // data-aos={index % 2 === 0 ?  "fade-right": "fade-up"}
                            >
                                <Image style={{ objectFit: 'cover' }} width={"100%"} height={200} src={news.image} alt={news.title[i18n.language]} className='object- rounded' />
                                <div className='flex flex-col items-start py-2'>
                                    <h2 className='text-xl font-semibold text-start p-2'>{news.title[i18n.language]}</h2>
                                    <p className='text-lg text-start pl-2'>{truncateDescription(news.description[i18n.language])}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
