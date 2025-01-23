// import type { NextApiRequest, NextApiResponse } from 'next';
// import pool from '../../lib/db';
// import { RowDataPacket } from 'mysql2/promise'; // Import RowDataPacket

// // Define the structure of an Exhibitor
// type Exhibitor = {
//     id: number;
//     title: string;
//     description: string;
//     image_link: string;
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'GET') {
//         try {
//             // Use RowDataPacket to type the returned rows
//             const [rows] = await pool.query<RowDataPacket[] & Exhibitor[]>('SELECT * FROM exhibitors');
//             res.status(200).json(rows);
//         } catch (error) {
//             console.error('Database error:', error);
//             res.status(500).json({ error: 'Failed to fetch exhibitors' });
//         }
//     } else {
//         res.status(405).json({ error: 'Method not allowed' });
//     }
// }
"use client"

import pool from "@/lib/db";



export default async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Database connected successfully');
        connection.release();
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

testConnection();
