'use client';

import React from 'react';
import Image from 'next/image';
import { SiDiscord } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { FaBtc } from "react-icons/fa6";
import { TbCurrencySolana } from "react-icons/tb";
import { SiThreads } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiEthereum } from "react-icons/si";

const ContactForm: React.FC = () => {
    return (
        <>
            <div className="flex flex-col m-auto mt-20 justify-around w-[76%] py-8">
                <div className="flex gap-5">
                    <div className="text-secondary text-3xl font-semibold">/</div>
                    <div className="text-primary text-3xl font-semibold">contacts</div>
                    <div className="hidden md:flex self-center w-96 h-1 bg-secondary" ></div>
                    <div className="md:hidden self-center w-10 h-1 bg-secondary"></div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 w-[100%]">
                    <div className="flex-col text-primary text-base items-start font-medium pt-6 w-auto">
                        I’m interested in freelance or job opportunities. However, if you have other request or question, don’t hesitate to contact me
                        <Image src="/mobileHands.png" alt="Mobile Hands" width={150} height={150} className="object-contain m-auto"/>
                    </div>
                    <div className="w-auto h-auto flex flex-col">
                        <div className="w-auto h-auto p-4 border border-primary flex-col justify-start items-start gap-2 inline-flex mt-1">
                            <div className="text-primary text-base font-medium">Message me here</div>
                            <div className="flex items-center gap-2">
                                <SiDiscord className="text-primary" />
                                <div className="text-primary text-base font-normal">eneuem</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <AiOutlineMail className="text-primary"/>
                                <div className="text-primary text-base font-normal">naim.chelbat@gmail.com</div>
                            </div>
                        </div>
                        <div className="w-auto h-auto p-4 border border-primary flex-col justify-start items-start gap-2 inline-flex mt-1">
                            <div className="text-primary text-base font-medium">Support me here</div>
                            <div className="flex items-center gap-2">
                                <FaBtc className="text-xl text-primary" />
                                <div className="text-primary text-base font-normal">8mC5TsACY5Ux7LGLwmBYmyuwwWbrcQTYUdRN3yNFFdNZ</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <TbCurrencySolana className="text-xl text-primary"/>
                                <div className="text-primary text-base font-normal">3KRgL7thzuhmqTM1VQWWxqKwSPXTYWyUki</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <SiEthereum className="text-xl text-primary"/>
                                <div className="text-primary text-base font-normal">0x416D0db977305528d741217B8A112BD56aBd025f</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 mt-10">
                    <div className="text-secondary text-3xl font-semibold">/</div>
                    <div className="text-primary text-3xl font-semibold">socials</div>
                    <div className="hidden md:flex self-center w-96 h-1 bg-secondary"></div>
                    <div className="md:hidden self-center w-10 h-1 bg-secondary"></div>
                </div>
                <div className="w-auto h-auto p-4 flex justify-center items-start gap-8 mt-1">
                    <div className="flex items-center gap-2">
                        <SiThreads className="text-primary" />
                        <div className="text-primary text-base font-normal hover:bg-primary hover:text-background"><a target="_blank" rel="noopener noreferrer" href="https://www.threads.net/@nembbm" >nembbm</a></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <SiLinkedin className="text-primary"/>
                        <div className="text-primary text-base font-normal hover:bg-primary hover:text-background">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/na%C3%AFm-chelbat-83723b56/">naim-chelbat</a></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <SiGithub className="text-primary"/>
                        <div className="text-primary text-base font-normal hover:bg-primary hover:text-background">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Eneuem">Eneuem</a></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;