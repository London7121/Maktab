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
        3: <ReadDirectors/>,
        4: <KasbiyDirec />,
        5: <Chiefs />,
    };

    return (
        <div>
            <Segmented
                block
                mode="vertical"
                options={segments}
                value={activeKey}
                onChange={setActiveKey}
                style={{
                    flex: '0 0 auto',
                    minWidth: '200px',
                    maxWidth: '100%',
                }}
            />
            <div className="border p-3 rounded-lg mt-4">
                {content[activeKey]}
            </div>
        </div>
    );
}
