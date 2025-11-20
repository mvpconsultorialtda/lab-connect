import { Link } from 'react-router-dom';
import logoCompleto from '../referencias/logo/logo_completo.png';

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 backdrop-blur-md bg-brand-dark/95 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logoCompleto} alt="Lab Connect Logo" className="h-10 w-auto" />
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-gray/80">
                    <Link to="/vagas" className="hover:text-brand-primary transition-colors">Vagas</Link>
                    <Link to="/mentoria" className="hover:text-brand-primary transition-colors">Mentoria</Link>
                    <Link to="/eventos" className="hover:text-brand-primary transition-colors">Eventos</Link>
                    <Link to="/sobre" className="hover:text-brand-primary transition-colors">Sobre</Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/login" className="text-sm font-medium hover:text-white transition-colors">Entrar</Link>
                    <Link to="/cadastro" className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(222,102,35,0.3)]">
                        Criar Conta
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
