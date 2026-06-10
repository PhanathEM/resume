import React from "react";
import imageCV from "./assets/cv/image.png";
import { Link } from "react-router-dom";

function CV() {
    return (
        <div className="min-h-screen bg-[#efefef] py-10 px-4 [font-family:Poppins,sans-serif]">
            <div className="max-w-5xl mx-auto bg-white p-10 text-black">
                {/* HEADER */}
                <div className="flex items-start gap-10">
                    {/* IMAGE */}
                    <img
                        src={imageCV}
                        alt="Profile"
                        className="w-[150px] h-[185px] object-cover mt-4 border-1 border-black"
                    />

                    {/* INFO */}
                    <div className="flex-1">
                        <h1 className="text-[42px] font-bold text-[#5b19ff] uppercase">
                            Mr. Phanath Em
                        </h1>

                        <div className="mt-3 space-y-2 text-[18px]">
                            <p>
                                Apply for: Developer Internship
                            </p>
                            <p>
                               Place: Dongdok Village, Xaythany District, Vientiane Capital, Lao PDR
                            </p>

                            <p>
                                Email: emphanath@gmail.com
                            </p>
                            <p>
                                WhatsApp: +856 20 9634 3410
                            </p>
                        </div>
                    </div>
                </div>

                {/* LINE */}

                {/* SUMMARY */}
                <div className="mt-6">
                    <h2 className="text-[20px] font-bold text-[#5b19ff] uppercase">
                        Summary
                    </h2>
                    <div className="border-b border-black mt-1"></div>

                    <p className="mt-3 text-[18px] leading-[42px]">
                        I am a third-year Website Development student at the National
                        University of Laos, passionate about building modern and responsive
                        web applications using React.js, Tailwind CSS, Laravel, and MySQL.

                        I enjoy creating clean user interfaces and continuously improving
                        my skills in front-end and back-end to become a skilled
                        Full-Stack Developer.

                        I am also pursuing an Associate Degree in English Communication at
                        Logos Institute of Foreign Languages, where I have developed strong
                        English communication and teamwork skills.
                    </p>
                </div>

                {/* EDUCATION */}
                <div className="mt-8">
                    <h2 className="text-[20px] font-bold text-[#5b19ff] uppercase">
                        Education
                    </h2>

                    <div className="border-b border-black mt-1"></div>

                    {/* ITEM */}
                    <div className="flex justify-between mt-3">
                        <div>
                            <h3 className="text-[20px]">
                                National University of Laos
                            </h3>

                            <p className="italic text-[18px]">
                                Bachelor of Information Technology
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-[18px]">
                                Vientiane, Laos
                            </p>

                            <p className="italic text-[18px]">
                                2023 – Present
                            </p>
                        </div>
                    </div>

                    {/* ITEM */}
                    <div className="flex justify-between mt-5">
                        <div>
                            <h3 className="text-[20px]">
                                Logos Institute of Foreign Languages
                            </h3>

                            <p className="italic text-[18px]">
                                Associate’s Degree
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-[18px]">
                                Vientiane, Laos
                            </p>

                            <p className="italic text-[18px]">
                                2023 – Present
                            </p>
                        </div>
                    </div>

                    {/* ITEM */}
                    <div className="flex justify-between mt-5">
                        <div>
                            <h3 className="text-[20px]">
                                Royal University of Phnom Penh
                            </h3>

                            <p className="italic text-[18px]">
                                Bachelor of Information Technology
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-[18px]">
                                Phnom Penh, Cambodia
                            </p>

                            <p className="italic text-[18px]">
                                October 2022
                            </p>
                        </div>
                    </div>

                    {/* ITEM */}
                    <div className="flex justify-between mt-5">
                        <div>
                            <h3 className="text-[20px]">
                                Highway International School
                            </h3>

                            <p className="italic text-[18px]">
                                General English Program P1, P2, P3
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-[18px]">
                                Takeo, Cambodia
                            </p>

                            <p className="italic text-[18px]">
                                April, 2016
                            </p>
                        </div>
                    </div>
                </div>

                {/* WORK EXPERIENCE & VOLUNTEER */}
                <div className="mt-8">
                    <h2 className="text-[20px] font-bold text-[#5b19ff] uppercase">
                        Work Experience & Volunteer
                    </h2>

                    <div className="border-b border-black mt-1"></div>

                    {/* ITEM */}
                    <div className="flex justify-between mt-4">
                        <div>
                            <h3 className="text-[20px]">
                                Vimean Pich Real Estate Co., Ltd.
                            </h3>

                            <p className="italic text-[18px]">
                                Sales Assistant
                            </p>

                            <ul className="list-disc ml-6 mt-2 text-[18px] space-y-1">
                                <li>
                                    Promoted and sold products to customers
                                </li>

                                <li>
                                    Assisted in marketing campaigns on Facebook and TikTok
                                </li>
                            </ul>
                        </div>

                        <div className="text-right">
                            <p className="text-[18px]">
                                Phnom Penh, Cambodia
                            </p>

                            <p className="italic text-[18px]">
                                2022
                            </p>
                        </div>
                    </div>

                    {/* ITEM */}
                    <div className="flex justify-between mt-6">
                        <div>
                            <h3 className="text-[20px]">
                                A Million Smiles
                            </h3>

                            <p className="italic text-[18px]">
                                Volunteer
                            </p>

                            <ul className="list-disc ml-6 mt-2 text-[18px] space-y-1">
                                <li>
                                    Participated in a Cambodian student-led charity,
                                    donating food, clothing,<br /> books, sports equipment,
                                    and educational materials to students and teachers.
                                </li>
                            </ul>
                        </div>

                        <div className="text-right">
                            <p className="text-[18px]">
                                Vientiane, Laos
                            </p>

                            <p className="italic text-[18px]">
                                2024
                            </p>
                        </div>
                    </div>
                </div>

                {/* KEY SKILLS */}
                <div className="mt-8">
                    <h2 className="text-[20px] font-bold text-[#5b19ff] uppercase">
                        Key Skills
                    </h2>

                    <div className="border-b border-black mt-1"></div>

                    <div className="mt-4 text-[18px] space-y-5">
                        <div>
                            <ul className="list-disc ml-6 mt-2 space-y-1">
                                <li>
                                    Microsoft Office: Word, Excel, PowerPoint
                                </li>

                                <li>
                                    Programming & Database: HTML, CSS, JavaScript,
                                    Java, React, Node.js, MySQL, MongoDB
                                </li>
                                <li>
                                    Soft Skills: Communication, Teamwork, Problem-Solving,
                                    Time Management
                                </li>
                                <li>
                                    Languages: Khmer (Native), English (Good), Lao
                                    (Intermediate)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ACHIEVEMENTS */}
                <div className="mt-8">
                    <h2 className="text-[20px] font-bold text-[#5b19ff] uppercase">
                        Achievements
                    </h2>

                    <div className="border-b border-black mt-1"></div>

                    {/* ITEM */}
                    <div className="flex justify-between mt-3 text-[18px]">
                        <p>
                            Completed Full-Stack Web Development Bootcamp – Udemy
                        </p>

                        <p>
                            Aug 18, 2025
                        </p>
                    </div>

                    {/* ITEM */}
                    <div className="flex justify-between mt-5 text-[18px]">
                        <p>
                            Certificate of Programming with JavaScript – Coursera
                        </p>

                        <p>
                            Jun 10, 2024
                        </p>
                    </div>

                    {/* ITEM */}
                    <div className="flex justify-between mt-5 text-[18px]">
                        <p>
                            The Praising Certificate for the excellent scores of the
                            achievement – Highway International School
                        </p>

                        <p>
                            2016
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto flex justify-end gap-4 mb-6 mt-6">
                <Link
                    to="/"
                    className="text-white px-6 py-3 rounded-lg text-[17px] font-medium transition duration-300 bg-gray-500 hover:bg-gray-600"
                >
                    Back to Home
                </Link>

                <a
                    href="/IT_Internship_CV_PhanathEM.pdf"
                    download
                    className="bg-[#5b19ff] hover:bg-[#4814d1] text-white px-6 py-3 rounded-lg text-[17px] font-medium transition duration-300"
                >
                    Download CV
                </a>
            </div>
        </div>
    );
}

export default CV;