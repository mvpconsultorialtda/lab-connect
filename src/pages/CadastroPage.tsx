import React from 'react';
import Navbar from '../components/Navbar';

const CadastroPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-dark text-brand-gray font-sans">
            <Navbar />
            <div className="pt-32 px-6 max-w-7xl mx-auto flex justify-center">
                <div className="w-full max-w-md bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h1 className="text-2xl font-display font-bold text-white mb-6 text-center">Criar Conta</h1>
                    {/* Form will go here */}
                    <p className="text-center text-brand-gray/50">Funcionalidade de cadastro em breve.</p>
                </div>
            </div>
        </div>
    );
};

export default CadastroPage;
