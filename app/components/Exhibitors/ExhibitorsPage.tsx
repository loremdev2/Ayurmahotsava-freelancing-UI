import React from "react";
import ResponsiveCard from "./ResponsiveCard";
import { cards } from "./cardsData";

const ExhibitorsPage: React.FC = () => {


    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center space-y-8 p-4">
            <p className="text-2xl font-bold ">What We Do</p>
            <div className="h-1 w-24 bg-orange-500 mx-auto"></div>
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
