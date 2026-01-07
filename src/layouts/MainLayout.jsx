import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export default function MainLayout() {
    useTheme(); // Inject theme variables
    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-900">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
