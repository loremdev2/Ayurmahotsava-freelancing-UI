"use client"
import { useEffect, useState } from 'react';

// Define the structure of an Exhibitor
type Exhibitor = {
    id: number;
    title: string;
    description: string;
    image_link: string;
};

export default function Home() {
    const [exhibitors, setExhibitors] = useState<Exhibitor[]>([]);

    useEffect(() => {
        const fetchExhibitors = async () => {
            try {
                const response = await fetch('/api/exhibitors');
                const data = await response.json();
                setExhibitors(data);
            } catch (error) {
                console.error('Error fetching exhibitors:', error);
            }
        };

        fetchExhibitors();
    }, []);

    return (
        <div>
            <h1>Exhibitors</h1>
            <ul>
                {exhibitors.map((exhibitor) => (
                    <li key={exhibitor.id}>
                        <h2>{exhibitor.title}</h2>
                        <p>{exhibitor.description}</p>
                        <img src={exhibitor.image_link} alt={exhibitor.title} style={{ maxWidth: '300px' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

