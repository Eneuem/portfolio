'use client';

import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactForm: React.FC = () => {
    return (
        <>
            <div className="flex flex-col w-[76%] h-auto m-auto py-8 justify-around items-center gap-8">
                <div className="justify-start items-start inline-flex">
                    <div className="text-indigo-700 text-3xl font-semibold">/</div>
                    <div className="text-white text-3xl font-semibold">contacts</div>
                </div>
                <div className=" text-white text-base font-normal">Who am i?</div>
            </div>
        </>
    );
};

export default ContactForm;