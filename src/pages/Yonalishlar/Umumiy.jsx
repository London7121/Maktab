import React, { useState } from 'react';
import { Segmented } from 'antd';
import { useTranslation } from 'react-i18next';
import Arxitektura from './Arxitektura';
import Dizayn from './Dizayn';
import Libos from './Libos';
import Tasviriy from './Tasviriy';

export default function LeaderAndChief() {
    const [activeKey, setActiveKey] = useState('1');
    const { t } = useTranslation();

    const segments = [
        { label: <div className='font-afacad'>{t("arx")}</div>, value: '1' },
        {
            label: (
                <div className='font-afacad'>
                    <p>{t("dizayn")}</p>
                </div>
            ),
            value: '2',
        },
        {
            label: (
                <div className='font-afacad'>
                    <p>{t("libos")}</p>
                </div>
            ),
            value: '3',
        },
        {
            label: (
                <div className='font-afacad'>
                    <p>{t("tasvir")}</p>
                </div>
            ),
            value: '4',
        },
    ];
//fffff
    const content = {
        1: <Arxitektura />,
        2: <Dizayn />,
        3: <Libos />,
        4: <Tasviriy />,
    };

    return (
        <div className='w-[100%] mx-auto gap-2 flex flex-col items-center justify-center'>
            <div className='w-[300px] sm:w-[760px] lg:w-full overflow-x-auto scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200'>
                <Segmented
                    options={segments}
                    value={activeKey}
                    onChange={setActiveKey}
                    style={{ padding: "8px", }}
                    className="border shadow-xl w-full"
                />
            </div>
            <div className="border p-3 rounded-lg mt-4 shadow-lg">
                {content[activeKey]}
            </div>
        </div>
    );
}
