'use client';

import React from 'react';
import { SiDiscord } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { FaBtc } from "react-icons/fa6";
import { TbCurrencySolana } from "react-icons/tb";
import { SiThreads } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFigma } from "react-icons/si";

const ContactForm: React.FC = () => {
    return (
        <>
            <div className="flex flex-col w-[76%] h-auto m-auto py-8 gap-8">
                <div className="flex gap-5">
                    <div className="text-indigo-700 text-3xl font-semibold">/</div>
                    <div className="text-white text-3xl font-semibold">contacts</div>
                    <div className="hidden md:flex self-center" style={{ width: 580, height: 1, background: '#5158BB' }}></div>
                    <div className="md:hidden self-center" style={{ width: 25, height: 1, background: '#5158BB' }}></div>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex text-gray-400 text-base items-start font-medium leading-relaxed">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</div>
                    <div className="w-auto h-auto flex flex-col">
                        <div className="w-auto h-auto p-4 border border-gray-400 flex-col justify-start items-start gap-2 inline-flex mt-1">
                            <div className="text-white text-base font-medium">Message me here</div>
                            <div className="flex items-center gap-2">
                                <SiDiscord />
                                <div className="text-gray-400 text-base font-normal">eneuem</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <AiOutlineMail />
                                <div className="text-gray-400 text-base font-normal">naim.chelbat@gmail.com</div>
                            </div>
                        </div>
                        <div className="w-auto h-auto p-4 border border-gray-400 flex-col justify-start items-start gap-2 inline-flex mt-1">
                            <div className="text-white text-base font-medium">Support me here</div>
                            <div className="flex items-center gap-2">
                                <FaBtc />
                                <div className="text-gray-400 text-base font-normal">4149500120690030</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <TbCurrencySolana />
                                <div className="text-gray-400 text-base font-normal">4149500120690030</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="text-indigo-700 text-3xl font-semibold">/</div>
                    <div className="text-white text-3xl font-semibold">all-medias</div>
                    <div className="hidden md:flex self-center" style={{ width: 580, height: 1, background: '#5158BB' }}></div>
                    <div className="md:hidden self-center" style={{ width: 25, height: 1, background: '#5158BB' }}></div>
                </div>
                <div className="w-auto h-auto p-4 flex justify-center items-start gap-8 mt-1">
                    <div className="flex items-center gap-2">
                        <SiThreads />
                        <div className="text-gray-400 text-base font-normal hover:bg-gray-400 hover:text-background">nembbm</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <SiLinkedin />
                        <div className="text-gray-400 text-base font-normal hover:bg-gray-400 hover:text-background">          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/na%C3%AFm-chelbat-83723b56/">naim-chelbat</a></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <SiGithub />
                        <div className="text-gray-400 text-base font-normal hover:bg-gray-400 hover:text-background"><a target="_blank" rel="noopener noreferrer" href="https://github.com/Eneuem">Eneuem</a></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;