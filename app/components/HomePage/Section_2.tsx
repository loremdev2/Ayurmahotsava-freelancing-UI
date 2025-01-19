import React from 'react';
import BookStall from '../Icons/BookStallIcon';
import RegisterStallIcon from '../Icons/RegisterStallIcon';

const Section_2: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 p-16 min-h-screen">
            {/* Book a Stall Section */}
            <div className="flex flex-col items-center text-center gap-6 max-w-md lg:max-w-lg">
                <div className="text-orange-500">
                    <BookStall className="w-16 h-16 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold">BOOK A STALL</h2>
                <p className="text-gray-600 text-lg">
                    Promote your brand in the largest expo in AYUSH sector, Dehradun, Uttarakhand
                </p>
                <button className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 text-lg">
                    Register Now
                </button>
            </div>

            {/* Delegate Registration Section */}
            <div className="flex flex-col items-center text-center gap-6 max-w-md lg:max-w-lg">
                <div className="text-orange-500">
                    <RegisterStallIcon className="w-16 h-16 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold">DELEGATE REGISTRATION</h2>
                <p className="text-gray-600 text-lg">
                    The 10th WAC is organised by World Ayurveda Foundation, an initiative of Vijnana Bharati
                </p>
                <button className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 text-lg">
                    Register Now
                </button>
            </div>
        </div>
    );
};

export default Section_2;
