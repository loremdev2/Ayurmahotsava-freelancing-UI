"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "@/public/assets/carousel/image-1.png";
import image2 from "@/public/assets/carousel/image-2.png";
import image3 from "@/public/assets/carousel/image-3.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface for image data
interface ImageData {
    src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
    {
        src: image1,
    },
    {
        src: image2,
    },
    {
        src: image3,
    },
];

export default function ImageSlider(): any {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const prevSlide = (): void => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [isHovered]);

    const handleMouseOver = (): void => {
        setIsHovered(true);
    };

    const handleMouseLeave = (): void => {
        setIsHovered(false);
    };

    return (
        <div className="relative w-full mx-auto">
            <div
                className="relative h-[460px] group"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    src={images[currentIndex].src}
                    alt={`Slider Image ${currentIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-500 ease-in-out cursor-pointer"
                />
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 h-full w-10 flex items-center justify-center bg-transparent text-white rounded-l-md transition-all duration-300 ease-in-out"
                    onClick={prevSlide}
                >
                    <ChevronLeft className="text-gray-300 group-hover:text-white" />
                </button>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full w-10 flex items-center justify-center bg-transparent text-white rounded-r-md transition-all duration-300 ease-in-out"
                    onClick={nextSlide}
                >
                    <ChevronRight className="text-gray-300 group-hover:text-white" />
                </button>
            </div>
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)} // Navigate to the clicked image
                        className={`h-2 w-2 mx-2 ${index === currentIndex
                            ? "bg-[#ff8d46] scale-110"
                            : "bg-gray-300"
                            } rounded-full transition-all duration-500 ease-in-out`}
                    ></button>
                ))}
            </div>

        </div>
    );
}
