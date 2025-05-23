import { Skeleton } from 'antd';
import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Marquee from 'react-fast-marquee';
import { arxitektura } from '../../fakeDatas/yonalish';
import { arxImages } from '../../fakeDatas/yonalish';

export default function Arxitektura() {
    const { t, i18n } = useTranslation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Aos.init();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl md:text-3xl font-bold md:my-10 text-[#6e54d8]">{t("arx")}</h1>

            {loading ? (
                <Skeleton active />
            ) : (
                <div className="flex flex-wrap items-center justify-center lg:flex-nowrap bg-white p-6 shadow-lg rounded-lg">
                    {/* Jadval (chap tomonda) */}
                    <div className="w-full lg:w-1/2 px-2 flex items-center justify-center">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 py-2">{t("Yo'nalishlar")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arxitektura.documentsArx.map((doc, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 py-2">{doc[i18n.language]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Rasmlar (o'ng tomonda) */}
                    <div className="w-full lg:w-1/2 overflow-hidden relative py-2">
                        <Marquee gradient={false} speed={100}>
                            {arxImages?.map((doc, index) => (
                                <img
                                    key={index}
                                    src={doc?.src}
                                    alt={doc[i18n.language]}
                                    className="w-40 h-40 object-cover rounded-lg shadow-md mx-2 "
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            )}
        </div>
    );
}