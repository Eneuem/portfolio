'use client';

import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactForm: React.FC = () => {
    return (
        <>
            <div className="flex flex-col w-[76%] h-auto m-auto py-8 gap-8">
                <div className="flex">
                    <div className="text-indigo-700 text-3xl font-semibold">/</div>
                    <div className="text-white text-3xl font-semibold">contacts</div>
                </div>
                <div className="w-96 h-36 relative">
                    <div className="w-96 left-0 top-0 absolute text-gray-400 text-base font-medium leading-relaxed">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</div>
                    <div className="w-96 h-36 left-[622px] top-0 absolute">
                        <div className="w-auto h-36 p-4 left-[197px] top-0 absolute border border-gray-400 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="text-white text-base font-semibold">Message me here</div>
                            <div className="flex-col justify-start items-start gap-2 flex">
                                <div className="justify-start items-center gap-1 inline-flex">
                                    <div className="w-8 h-8 pl-0.5 pr-1 py-1.5 justify-center items-center flex" />
                                    <div className="text-gray-400 text-base font-normal">eneuem</div>
                                </div>
                                <div className="justify-start items-center gap-1 inline-flex">
                                    <div className="w-8 h-8 px-1 pt-1.5 pb-2 justify-center items-center flex" />
                                    <div className="text-gray-400 text-base font-normal">naim.chelbat@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-auto h-20 p-4 left-0 top-0 absolute border border-gray-400 flex-col justify-start items-start gap-2 inline-flex">
                            <div className="text-white text-base font-medium">Support me here</div>
                            <div className="text-gray-400 text-base font-normal">4149500120690030</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;