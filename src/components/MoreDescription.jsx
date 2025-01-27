import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MoreDescription = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const wordsLimit = 70;
    const { t } = useTranslation();

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const renderDescription = () => {
        if (isExpanded || description.split(' ').length <= wordsLimit) {
            return description;
        }
        return description.split(' ').slice(0, wordsLimit).join(' ') + '...';
    };

    return (
        <div className='text-xl shadow-md my-4 p-2 text-gray-600 rounded-md mx-4 text-start'>
            <p>{renderDescription()}</p>
            {description.split(' ').length > wordsLimit && (
                <button
                    onClick={toggleDescription}
                    className='flex items-center text-blue-500 mt-2'
                >
                    {isExpanded ? `${t("hide")}` : `${t("moreDesc")}`}
                    {isExpanded ? <FaChevronUp className='ml-1' style={{fontSize:"14px"}}/> : <FaChevronDown className='ml-1' style={{fontSize:"14px"}}/>}
                </button>
            )}
        </div>
    );
};

export default MoreDescription;
