import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, Menu, Button } from 'antd';
import { GlobalOutlined, DownOutlined } from '@ant-design/icons';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [selectedLang, setSelectedLang] = useState('uz');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLang(lng);
    };

    const menu = (
        <Menu>
            <Menu.Item key="uz" onClick={() => changeLanguage('uz')}>
                O'zbek
            </Menu.Item>
            <Menu.Item key="ru" onClick={() => changeLanguage('ru')}>
                Русский
            </Menu.Item>
        </Menu>
    );

    const getLangIcon = () => {
        switch (selectedLang) {
            case 'uz':
                return <span role="img" aria-label="uz" className='text-[15px] md:text-[20px] text-green-600'>UZ</span>;
            case 'ru':
                return <span role="img" aria-label="ru" className='text-[15px] md:text-[20px] text-blue-600'>RU</span>;
            default:
                return <span role="img" aria-label="uz" className='text-[15px] md:text-[20px] text-green-600'>UZ</span>;
        }
    };

    return (
        <Dropdown overlay={menu} placement="bottomCenter" arrow className='rounded-xl'>
            <Button icon={getLangIcon()}>
                <GlobalOutlined />
            </Button>
        </Dropdown>
    );
};

export default LanguageSwitcher;
