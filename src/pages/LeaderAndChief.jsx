import React, { useState } from 'react';
import { Segmented } from 'antd';
import Director from './SchoolLeads/Director';
import Chiefs from './SchoolLeads/Chiefs';
import Manaviy from './SchoolLeads/Manaviy';
import KasbiyDirec from './SchoolLeads/KasbDirec';
import ReadDirectors from './SchoolLeads/ReadDirectors';

export default function LeaderAndChief() {
    const [activeKey, setActiveKey] = useState('1'); // Faol segmentni kuzatish uchun state

    const segments = [
        { label: <div className='font-afacad'>Maktab direktori</div>, value: '1' },
        {
            label: (
                <div className='font-afacad'>
                    <span>Ma'naviy va ma'rifiy ishlar</span>
                    <p>bo'yicha direktor o'rinbosari</p>
                </div>
            ),
            value: '2',
        },
        {
            label: (
                <div className='font-afacad'>
                    <span>O'quv ishlari bo'yicha</span>
                    <p>direktor o'rinbosari</p>
                </div>
            ),
            value: '3',
        },
        {
            label: (
                <div className='font-afacad'>
                    <span>Kasbiy ta’lim bo’yicha</span>
                    <p>direktor o'rinbosari</p>
                </div>
            ),
            value: '4',
        },
        {
            label: <div className='font-afacad'>
                Bo'lim boshliqlar
            </div>, value: '5'
        },
    ];

    const content = {
        1: <Director />,
        2: <Manaviy />,
        3: <ReadDirectors />,
        4: <KasbiyDirec />,
        5: <Chiefs />,
    };

    return (
        <div className='w-[98%] mx-auto max-w-[1380px] gap-2'>
            <div className='w-[350px] sm:w-[760px] lg:w-[1000px] xl:w-full overflow-x-auto scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200'>
                <Segmented
                    // block={true}
                    // vertical={true}
                    // size='small'
                    options={segments}
                    value={activeKey}
                    onChange={setActiveKey}
                    style={{ padding: "8px", }}
                    className="border shadow-xl"
                />
            </div>
            <div className="border p-3 rounded-lg mt-4 shadow-lg">
                {content[activeKey]}
            </div>
        </div>
    );
}
