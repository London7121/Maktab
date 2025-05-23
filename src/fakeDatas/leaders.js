import masuddin from '../assets/leaders/masuddin.png'
import uchqun from '../assets/leaders/uchqun.png'
import baxtiyor from '../assets/leaders/Baxtiyor.png'
import jaxongir from '../assets/leaders/jaxongir.png'
import bekzod from '../assets/leaders/bekzod.png'
import aziza from '../assets/leaders/aziza.png'
import gozal from '../assets/leaders/gozal.png'
import nargiza from '../assets/leaders/nargiza.png'
import ravshan from '../assets/leaders/ravshan.png'

const leaders = {
    director: {
        id: 1,
        title: {
            uz: "Respublika ixtisoslashtirilgan dizayn maktabi direktori",
            ru: "Директор республиканской специализированной школы дизайна"
        },
        description: {
            uz: "Salahiddinov Ma'suddin Sadriddinovich",
            ru: "Салахиддинов Масуддин Садриддинович"
        },
        image: masuddin,
        link: '/leaders/1',
    },
    kasbiy_talim: {
        id: 1,
        title: {
            uz: "Respublika ixtisoslashtirilgan dizayn maktabi kasbiy ta’lim bo’yicha direktor o’rinbosari",
            ru: "Заместитель директора по профессиональному обучению республиканской специализированной школы дизайна"
        },
        description: {
            uz: "Jamoldinov Baxtiyor Shaxobiddinovich",
            ru: "Джамолдинов Бахтиёр Шахобиддинович"
        },
        image: baxtiyor,
        link: '/leaders/1',
    },
    manaviy: {
        id: 1,
        title: {
            uz: "Respublika ixtisoslashtirilgan dizayn maktabi ma'naviy va marifiy bo’yicha direktor o’rinbosari",
            ru: "Заместитель директора по духовному и образовательному воспитанию республиканской специализированной школы дизайна"
        },
        description: {
            uz: "Nigmatov Jaxongir Muhammadaliyevich",
            ru: "Нигматов Джахонгир Мухаммадалиевич"
        },
        image: jaxongir,
        link: '/leaders/1',
    },
    leaders: {
        id: 1,
        title: {
            uz: "Respublika ixtisoslashtirilgan dizayn maktabi o’quv ishlari bo’yicha direktor o’rinbosari",
            ru: "Заместитель директора по учебной работе республиканской специализированной школы дизайна"
        },
        description: {
            uz: "Shakarimov Uchqun Shaislamovich",
            ru: "Шакаримов Учкун Шайсланович"
        },
        image: uchqun,
        link: '/leaders/1',
    },
    addel_kadrs: [
        {
            id: 1,
            title: {
                uz: "Rangtasvir bo’limi boshlig’i",
                ru: "Руководитель отдела живописи"
            },
            description: {
                uz: "Ashurov Bekzod Marifovich",
                ru: "Ашуров Бекзод Марифович"
            },
            image: bekzod,
            link: '/leaders/1',
        },
        {
            id: 2,
            title: {
                uz: "Umumta’lim bo’limi boshlog’I",
                ru: "Руководитель отдела общего образования"
            },
            description: {
                uz: "Sharipova Aziza Mustafayevna",
                ru: "Шарипова Азиза Мустафаевна"
            },
            image: aziza,
            link: '/leaders/1',
        },
        {
            id: 3,
            title: {
                uz: "Libos bo’lim boshlig’i",
                ru: "Руководитель отдела одежды"
            },
            description: {
                uz: "Nuriddinova Go'zal Akmalovna",
                ru: "Нуриддинова Гозал Акмаловна"
            },
            image: gozal,
            link: '/leaders/1',
        },
        {
            id: 4,
            title: {
                uz: "Arxitektura bo’limi boshlig’i",
                ru: "Руководитель отдела архитектуры"
            },
            description: {
                uz: "Norova Nargiza Saidovna",
                ru: "Норова Нардиза Саидовна"
            },
            image: nargiza,
            link: '/leaders/1',
        },
        {
            id: 5,
            title: {
                uz: "Amaliy san’at bo’limi boshlig’i",
                ru: "Руководитель отдела прикладного искусства"
            },
            description: {
                uz: "Meliboyev Ravshan Tursunbayevich",
                ru: "Мелибоев Равшан Турсунбаевич"
            },
            image: ravshan,
            link: '/leaders/1',
        },
    ]
};

export default leaders;
