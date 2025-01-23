"use client"
import React from 'react';
import BookStall from '../Icons/BookStallIcon';
import RegisterStallIcon from '../Icons/RegisterStallIcon';

const Section_2: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 p-16">
            {/* Book a Stall Section */}
            <div className="flex flex-col items-center text-center gap-4 max-w-sm">
                <div className="text-orange-500">
                    <BookStall className="w-12 h-12 text-orange-500" />
                </div>
                <h2 className="text-xl font-bold ">BOOK A STALL</h2>
                <p className="text-gray-500">
                    <strong>Promote your brand in the largest expo in AYUSH sector, Dehradun, Uttarakhand</strong>
                </p>
                <button onClick={() => window.open('https://nextjs.org/docs/', '_blank')} className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
                    Register Now
                </button>
            </div>

            {/* Delegate Registration Section */}
            <div className="flex flex-col items-center text-center gap-4 max-w-sm">
                <div className="text-orange-500">
                    <RegisterStallIcon className="w-12 h-12 text-orange-500" />
                </div>
                <h2 className="text-xl font-bold">DELEGATE REGISTRATION</h2>
                <p className="text-gray-500">
                    <strong>The 10th WAC is organised by World Ayurveda Foundation, an initiative of Vijnana Bharati</strong>
                </p>
                <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
                    Register Now
                </button>
            </div>
        </div>
    );
};

export default Section_2;
