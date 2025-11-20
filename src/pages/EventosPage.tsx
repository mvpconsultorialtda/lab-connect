import React from 'react';
import Navbar from '../components/Navbar';

const EventosPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-dark text-brand-gray font-sans">
            <Navbar />
            <div className="pt-32 px-6 max-w-7xl mx-auto">
                <h1 className="text-4xl font-display font-bold text-white mb-8">Eventos</h1>
                <p className="text-lg text-brand-gray/70">Workshops, palestras e encontros.</p>
            </div>
        </div>
    );
};

export default EventosPage;
