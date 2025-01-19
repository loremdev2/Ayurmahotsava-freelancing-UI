import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

const ExpoStatistics: React.FC = () => {
    return (
        <>
            <Head>
                <title>Expo Statistics</title>
            </Head>
            <div className="flex items-center justify-center py-16">
                <div className="grid grid-cols-2 gap-8 p-8 md:grid-cols-4 md:gap-16">
                    <div className="text-center">
                        <p className="text-4xl font-bold">75</p>
                        <p className="mt-2 text-sm">Companies Participation in Expo</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold">3700</p>
                        <p className="mt-2 text-sm">Delegates Participation</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold">1880</p>
                        <p className="mt-2 text-sm">Ayurveda Practitioner's</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold">9.8 Acre</p>
                        <p className="mt-2 text-sm">Area of National Arogya Expo</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExpoStatistics;
