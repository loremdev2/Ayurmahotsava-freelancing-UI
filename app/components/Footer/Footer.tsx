import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className=" text-black py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="mb-2 md:mb-0">&copy; 2025 ayurmahotsava.com</p>
                    <p>Powered by ayurmahotsava.com</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
