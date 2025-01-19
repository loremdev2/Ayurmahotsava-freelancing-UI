import React from "react";
import ResponsiveCard from "./ResponsiveCard";

const ExhibitorsPage: React.FC = () => {
    const cards = [
        {
            imageSrc: "/assets/ExhibitorImages/ayubal-wellness.png",
            header: "AYUBAL WELLNESS",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            imageSrc: "/assets/ExhibitorImages/aiml.png",
            header: "HERBAL PRODUCTS",
            description:
                "Discover a wide range of natural and herbal products crafted with care to promote health and wellness.",
        },
        {
            imageSrc: "/assets/ExhibitorImages/uma_ayurveda.png",
            header: "UMA AYURVEDA",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            imageSrc: "/assets/ExhibitorImages/zandu.png",
            header: "ZANDU",
            description:
                "Discover a wide range of natural and herbal products crafted with care to promote health and wellness.",
        },
        {
            imageSrc: "/assets/ExhibitorImages/THE_ARYA_VAIDYA_PHARMACY.png",
            header: "THE ARYA VAIDYA PHARMACY",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            imageSrc: "/assets/ExhibitorImages/kairali.png",
            header: "KAIRALI",
            description:
                "Discover a wide range of natural and herbal products crafted with care to promote health and wellness.",
        },
        {
            imageSrc: "/assets/ExhibitorImages/pravek.png",
            header: "PRAVEK",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            imageSrc: "/assets/ExhibitorImages/vitthal.png",
            header: "VITTHAL",
            description:
                "Discover a wide range of natural and herbal products crafted with care to promote health and wellness.",
        },
        {
            imageSrc: "/assets/ExhibitorImages/kayakalp.png",
            header: "KAYAKALP",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            imageSrc: "/assets/ExhibitorImages/shree_mohta.png",
            header: "SHREE MOHTA",
            description:
                "Discover a wide range of natural and herbal products crafted with care to promote health and wellness.",
        },
        {
            imageSrc: "/assets/ExhibitorImages/sevasadan.png",
            header: "SEVASADAN",
            description:
                "Discover a wide range of natural and herbal products crafted with care to promote health and wellness.",
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center space-y-8 p-4">
            {cards.map((card, index) => (
                <ResponsiveCard
                    key={index}
                    imageSrc={card.imageSrc}
                    header={card.header}
                    description={card.description}
                />
            ))}
        </div>
    );
};

export default ExhibitorsPage;
