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
    text: string;  // Added text for each image
}

// Image data array
const images: ImageData[] = [
    {
        src: image1,
        text: "Mega Festival of Ayurveda",
    },
    {
        src: image2,
        text: "Mega Festival of Ayurveda",
    },
    {
        src: image3,
        text: "Mega Festival of Ayurveda",
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
                {/* Dimmed Image with filter */}
                <Image
                    src={images[currentIndex].src}
                    alt={`Slider Image ${currentIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-500 ease-in-out cursor-pointer opacity-80" // Apply dim effect here
                />
                {/* Overlay to darken the image */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>

                {/* Centered Text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold z-10 text-heading">
                    {images[currentIndex].text}
                </div>

                {/* Heading with custom styles */}
                <div className="absolute top-1/3 sm:top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-heading text-white text-sm sm:text-xs lg:text-sm mt-2 sm:mt-4">
                    HIGHLIGHT
                </div>


                {/* Conditional "Read More" button on 2nd and 3rd images */}
                {(currentIndex === 1 || currentIndex === 2) && (
                    <button
                        className="absolute top-[calc(50%+20px)] left-1/2 transform -translate-x-1/2 px-2 py-1 mt-6 border-2 border-white text-white text-sm sm:text-sm rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300 ease-in-out z-10"
                    >
                        Read More
                    </button>
                )}

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
