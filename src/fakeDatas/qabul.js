export const tableColumns = [
    {
        title: {
            uz: 'Sana',
            ru: 'Дата',
        },
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: {
            uz: 'Vaqt',
            ru: 'Время',
        },
        dataIndex: 'time',
        key: 'time',
    },
];

export const tableData = [
    {
        key: '1',
        date: { uz: '1-iyul', ru: '1 июля' },
        time: { uz: '10:00 - 16:00', ru: '10:00 - 16:00' },
    },
    {
        key: '2',
        date: { uz: '2-iyul', ru: '2 июля' },
        time: { uz: '10:00 - 16:00', ru: '10:00 - 16:00' },
    },
    {
        key: '3',
        date: { uz: '3-iyul', ru: '3 июля' },
        time: { uz: '10:00 - 16:00', ru: '10:00 - 16:00' },
    },
];

export const qabulInfo = {
    title: {
        uz: "Qabul",
        ru: "Прием",
    },
    subtitle: {
        uz: "Qanday hujjat topshiriladi?!!!",
        ru: "Как подавать документы?!!!",
    },
    description: {
        uz: "Respublika ixtisoslashtirilgan dizayn maktabiga 2022-2023 o’quv yili uchun 7-sinfni bitirgan o’quvchilar qabul qilinadi",
        ru: "В Республиканскую специализированную школу дизайна принимаются ученики, завершившие 7 класс в 2022-2023 учебном году",
    },
    documents: [
        { uz: "Direktor nomiga ariza", ru: "Заявление на имя директора" },
        { uz: "O'quvchilarning ijodiy ishlari (shart) 10-15 dona", ru: "Творческие работы учащихся (обязательно) 10-15 штук" },
        { uz: "7-sinfni bitirganligi to'g'risida maktabdan ma'lumotnoma", ru: "Справка из школы об окончании 7 класса" },
        { uz: "3x4 hajmdagi 4 dona fotosurati", ru: "Фотография размером 3x4 (4 штуки)" },
        { uz: "Tug'ilganlik haqidagi guvohnoma", ru: "Свидетельство о рождении" },
    ],
    directions: {
        uz: [
            "Dizayn (turlari bo’yicha)",
            "Rangtasvir (turlari bo’yicha)",
            "Haykaltaroshlik (turlari bo’yicha)",
            "Amaliy san’at (turlari bo’yicha)",
        ],
        ru: [
            "Дизайн (по направлениям)",
            "Живопись (по направлениям)",
            "Скульптура (по направлениям)",
            "Прикладное искусство (по направлениям)",
        ],
    },
    specialties: {
        uz: [
            "Kompyuter grafikasi dizayni",
            "Inter'er dizayni",
            "Mebellar dizayni",
            "Arxitektura dizayneri",
            "Liboslar dizayneri",
            "Charm buyumlari dizayneri",
            "Dastgohli rangtasvir rassomi",
            "Mahobatli rangtasvir rassomi",
            "Tarixiy teatr liboslari san'ati rassomi",
        ],
        ru: [
            "Дизайн компьютерной графики",
            "Дизайн интерьера",
            "Дизайн мебели",
            "Архитектор-дизайнер",
            "Дизайнер одежды",
            "Дизайнер кожаных изделий",
            "Художник по настенной живописи",
            "Художник по декоративной живописи",
            "Художник по историческим театральным костюмам",
        ],
    },
};
