"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import all images
import image1 from "@/public/assets/carousel-2/i1.png";
import image2 from "@/public/assets/carousel-2/i2.png";
import image3 from "@/public/assets/carousel-2/i3.png";
import image4 from "@/public/assets/carousel-2/i4.png";
import image5 from "@/public/assets/carousel-2/i5.png";
import image6 from "@/public/assets/carousel-2/i6.png";
import image7 from "@/public/assets/carousel-2/i7.png";
import image8 from "@/public/assets/carousel-2/i8.png";
import image9 from "@/public/assets/carousel-2/i9.png";
import image10 from "@/public/assets/carousel-2/i10.png";
import image11 from "@/public/assets/carousel-2/i11.png";
import image12 from "@/public/assets/carousel-2/i12.png";
import image13 from "@/public/assets/carousel-2/i13.png";
import image14 from "@/public/assets/carousel-2/i14.png";
import image15 from "@/public/assets/carousel-2/i15.png";
import image16 from "@/public/assets/carousel-2/i16.png";
import image17 from "@/public/assets/carousel-2/i17.png";
import image18 from "@/public/assets/carousel-2/i18.png";
import image19 from "@/public/assets/carousel-2/i19.png";
import image20 from "@/public/assets/carousel-2/i20.png";
import image21 from "@/public/assets/carousel-2/i21.png";
import image22 from "@/public/assets/carousel-2/i22.png";
import image23 from "@/public/assets/carousel-2/i23.png";
import image24 from "@/public/assets/carousel-2/i24.png";
import image25 from "@/public/assets/carousel-2/i25.png";
import image26 from "@/public/assets/carousel-2/i26.png";
import image27 from "@/public/assets/carousel-2/i27.png";

// Interface for image data
interface ImageData {
    src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image6 },
    { src: image7 },
    { src: image8 },
    { src: image9 },
    { src: image10 },
    { src: image11 },
    { src: image12 },
    { src: image13 },
    { src: image14 },
    { src: image15 },
    { src: image16 },
    { src: image17 },
    { src: image18 },
    { src: image19 },
    { src: image20 },
    { src: image21 },
    { src: image22 },
    { src: image23 },
    { src: image24 },
    { src: image25 },
    { src: image26 },
    { src: image27 },
];
export default function ImageSlider(): any {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollToIndex = (index: number): void => {
        if (sliderRef.current) {
            sliderRef.current.scrollTo({
                left: index * 300, // Adjust width if needed
                behavior: "smooth",
            });
        }
        setCurrentIndex(index);
    };

    const scrollLeft = (): void => {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1);
        }
    };

    const scrollRight = (): void => {
        if (currentIndex < images.length - 1) {
            scrollToIndex(currentIndex + 1);
        }
    };

    return (
        <div className="relative w-full">
            {/* Slider Container */}
            <div
                ref={sliderRef}
                className="relative flex overflow-x-hidden whitespace-nowrap scroll-smooth"
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative flex-shrink-0 w-[300px] h-[400px] mx-2"
                    >
                        <Image
                            src={image.src}
                            alt={`Image ${index + 1}`}
                            fill
                            style={{ objectFit: "cover" }} // Updated
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        className={`h-3 w-3 mx-1 ${index === currentIndex
                            ? "bg-[#ff8d46] scale-110"
                            : "bg-gray-300"
                            } rounded-full transition-all duration-500 ease-in-out`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
