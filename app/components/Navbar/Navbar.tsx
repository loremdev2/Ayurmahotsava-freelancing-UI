import React, { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Drawer from './Drawer';
import Drawerdata from './Drawerdata';

interface NavigationItem {
    name: string;
    href: string;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Certificates', href: '/what-we-do' },
    { name: 'About Us', href: '/who-we-are' },
    { name: 'Exhibitors', href: '/our-partners' },
    { name: 'Contact Us', href: '/contact-us' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        // This will only run on the client side
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:py-4 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        {/* LOGO */}
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                {/* Mobile view */}
                                <Link href="/" passHref>
                                    <div className="block h-12 w-40 lg:hidden relative cursor-pointer">
                                        <Image
                                            src="/assets/logo/logo.png"
                                            alt="dsign-logo"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                </Link>
                                {/* Desktop view */}
                                <Link href="/" passHref>
                                    <div className="hidden lg:block relative h-12 w-40 cursor-pointer">
                                        <Image
                                            src="/assets/logo/logo.png"
                                            alt="dsign-logo"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                </Link>
                            </div>

                            {/* LINKS */}
                            <div className="hidden lg:block m-auto">
                                <div className="flex space-x-10">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                currentPath === item.href
                                                    ? 'text-black hover:opacity-100'
                                                    : 'hover:text-orange-500 hover:opacity-100',
                                                'px-3 py-4 text-lg font-normal opacity-75 space-links'
                                            )}
                                            aria-current={currentPath === item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* DRAWER FOR MOBILE VIEW */}
                        <div className="block lg:hidden">
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    );
};

export default Navbar;
