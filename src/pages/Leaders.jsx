import { Image, Skeleton } from 'antd'
import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import leaders from '../fakeDatas/leaders'

export default function Leaders() {

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
        <div>
            <div className='text-start font-afacad'>
                <h1 className='text-3xl font-bold my-10 text-[#6e54d8]'>Raxbariyat</h1>
                <div className='w-auto mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {loading ? (
                        [...Array(3)].map((_, index) => (
                            <div key={index} className='w-full'>
                                <Skeleton.Input style={{ width: '100%' }} active loading={loading} paragraph={{ rows: 3 }} />
                            </div>
                        ))
                    ) : (
                        leaders?.leaders.map((news, index) => (
                            <div
                                key={index} className='border rounded-lg shadow-md flex flex-col items-center justify-between'
                                data-aos={index % 2 === 0 ? "fade-up" : "fade-right"}
                            >
                                <Image style={{ objectFit: 'cover' }} width={"100%"} height={200} src={news.image} alt={news.title} className='object-cover rounded' />
                                <div className='py-3'>
                                    <h2 className='text-md font-semibold text-start p-2'>{news.title}</h2>
                                    <p className='text-lg text-start pl-2'>{truncateDescription(news.description)}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <h1 className='text-3xl font-bold my-10 text-[#2b82fc] ml-8'>Bo'lim boshliqlari</h1>
                <div className='w-auto mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                    {loading ? (
                        [...Array(3)].map((_, index) => (
                            <div key={index} className='w-full'>
                                <Skeleton.Input style={{ width: '100%' }} active loading={loading} paragraph={{ rows: 3 }} />
                            </div>
                        ))
                    ) : (
                        leaders?.addel_kadrs.map((news, index) => (
                            <div
                                key={index}
                                className='border rounded-lg shadow-md flex flex-col items-center justify-between'
                                data-aos={index % 2 === 0 ?  "fade-right": "fade-up"}
                            >
                                <Image style={{ objectFit: 'cover' }} width={"100%"} height={200} src={news.image} alt={news.title} className='object-cover rounded' />
                                <div className='flex flex-col items-start py-3'>
                                    <h2 className='text-xl font-semibold mt-2 text-start p-2'>{news.title}</h2>
                                    <p className='text-lg text-start pl-2'>{truncateDescription(news.description)}</p>
                                </div>

                                {/* <div className="flex justify-center mt-3 pl-[78%] pb-2">
                                    <Link to={news.link} className='text-[#32CD32] text-lg hover:text-[#36CD32] animate-pulse'>
                                        Batafsil
                                        <ArrowRightOutlined className="ml-2 animate-pulse" />
                                    </Link>
                                </div> */}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
