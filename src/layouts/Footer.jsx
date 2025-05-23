import logo from "../assets/icons/logo.png";
import instagram from "../assets/icons/instagram.svg";
import telegram from "../assets/icons/telegram.svg";
import twitter from "../assets/icons/twitter.svg";
import youtube from "../assets/icons/youtube.svg";
export default function Footer() {
    const footerDescriptions = {
        title: "Aloqa uchun",
        descriptions: [
            "71-272-88-13",
            "71-272-88-18",
            "71-272-73-15",
            "71-272-73-30",
        ],
    };
    const footerDescriptions1 = {
        title: "Boshqa sahifalar",
        descriptions: ["Maxfiylik siyosati", "Foydalanish shartlari & qoidalari"],
    };
    const footerBottomData = [
        {
            icon: twitter,
            descriptions: "Twitter",
            linkAddress: "https://www.facebook.com/dizayn.maktabi?mibextid=LQQJ4d",
        },
        {
            icon: instagram,
            descriptions: "Instagram",
            linkAddress: "https://instagram.com/art.dizayn_maktabi?igshid=YmMyMTA2M2Y=",
        },
        {
            icon: youtube,
            descriptions: "YouTube",
            linkAddress: "https://youtube.com/@user-qn6sy3qv8t",
        },
        {
            icon: telegram,
            descriptions: "Telegram",
            linkAddress: "https://t.me/+sA_MICEbXUlmN2Zi",
        },
    ];

    return (
        <div
            style={{
                background:
                    "linear-gradient(to top,rgba(245, 205, 205, 0.64), #FFFFFF)",
            }}
            className="border w-full  mx-auto h-auto p-8 sm:p-6 flex flex-col gap-5 items-center justify-between font-afacad"
        >
            <div className="w-full px-2">
                <div className="footer-top w-full flex flex-col md:flex-row sm:items-center justify-between gap-10">
                    <div className="flex items-center gap-4 juctify-between w-[80%] sm:w-[40%] md:w-[21%]">
                        <img className="w-[90px]" src={logo} alt="logo" />
                        <p className="text-[#4D525F] font-semibold">
                            <span className="text-[#2b82fc]">
                                RIDM– RESPUBLIKA IXTISOSLASHTIRILGAN
                            </span>
                            <span className="text-red-500"> DIZAYN MAKTABI</span>
                        </p>
                    </div>
                    <div className="w-full sm:w-[50%] h-auto flex flex-row sm:items-center justify-between">
                        <ul>
                            <p className="text-[#01081B] font-bold">
                                {footerDescriptions.title}
                            </p>
                            {footerDescriptions.descriptions.map((description, index) => (
                                <div>
                                    <li className="text-[#4D525F]" key={index}>
                                        <a href={`tel:+998${description}`}>{description}</a>
                                    </li>
                                </div>
                            ))}
                        </ul>
                        <ul className="ml-12 sm:ml-0">
                            <p className="text-[#01081B] font-bold">
                                {footerDescriptions1.title}
                            </p>
                            {footerDescriptions1.descriptions.map((description, index) => (
                                <div>
                                    <li className="text-[#4D525F]" key={index}>
                                        <a href="#">{description}</a>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom border-t-2 border-[#E7E7E8] w-full pt-4 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="w-full sm:w-[45%] md:w-[30%]">
                        <ul className="flex items-center justify-between">
                            {footerBottomData.map((data, index) => (
                                <li key={index}>
                                    <a
                                        className="flex items-center justify-between gap-1"
                                        href={data.linkAddress}
                                        rel="noopener noreferrer"
                                    >
                                        <img src={data.icon} className="w-5" alt="instagram" />
                                        {data.descriptions}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-[#4D525F]">
                        2025 © RIDM. Barcha huquqlar himoyalangan.
                    </div>
                </div>
            </div>
        </div>
    );
}
