import React from "react";
import Image from "next/image";

interface ResponsiveCardProps {
  imageSrc: string;
  header: string;
  description: string;
  imageAlt?: string;
}

const ResponsiveCard: React.FC<ResponsiveCardProps> = ({
  imageSrc,
  header,
  description,
  imageAlt = "Exhibitor Image",
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 p-6 bg-white shadow-lg rounded-lg w-full max-w-xl mx-auto transition-shadow hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative w-40 h-40 flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left flex-grow">
        <h2 className="text-lg md:text-xl font-bold text-gray-800">
          {header}
        </h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ResponsiveCard;
