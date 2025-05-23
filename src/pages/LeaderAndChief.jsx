import React, { useState } from 'react';
import { Segmented } from 'antd';
import Director from './SchoolLeads/Director';
import Chiefs from './SchoolLeads/Chiefs';
import Manaviy from './SchoolLeads/Manaviy';
import KasbiyDirec from './SchoolLeads/KasbDirec';
import ReadDirectors from './SchoolLeads/ReadDirectors';
import { useTranslation } from 'react-i18next';

export default function LeaderAndChief() {
    const [activeKey, setActiveKey] = useState('1');
    const { t } = useTranslation();

    const segments = [
        { label: <div className='font-afacad'>{t("schoolChief")}</div>, value: '1' },
        {
            label: (
                <div className='font-afacad'>
                    <span>{t("zam1")}</span>
                    <p>{t("zam2")}</p>
                </div>
            ),
            value: '2',
        },
        {
            label: (
                <div className='font-afacad'>
                    <span>{t("zam3")}</span>
                    <p>{t("zam4")}</p>
                </div>
            ),
            value: '3',
        },
        {
            label: (
                <div className='font-afacad'>
                    <span>{t("zam5")}</span>
                    <p>{t("zam6")}</p>
                </div>
            ),
            value: '4',
        },
        {
            label: <div className='font-afacad'>
                {t("zam7")}
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
        <div className='w-[100%] mx-auto max-w-[1480px] gap-2'>
            <div className='w-[350px] sm:w-[760px] lg:w-[1200px] xl:w-full overflow-x-auto scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200'>
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
