import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../services/firebase';
import { signOut } from 'firebase/auth';
import logoCompleto from '../assets/logo_completo.png';

const Navbar = () => {
    const { user } = useAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <nav className="fixed w-full z-50 backdrop-blur-md bg-brand-gray/95 border-b border-brand-navy/5 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logoCompleto} alt="Lab Connect Logo" className="h-10 w-auto" />
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-navy/80">
                    <Link to="/vagas" className="hover:text-brand-primary transition-colors">Vagas</Link>
                    <Link to="/mentoria" className="hover:text-brand-primary transition-colors">Mentoria</Link>
                    <Link to="/eventos" className="hover:text-brand-primary transition-colors">Eventos</Link>
                    <Link to="/sobre" className="hover:text-brand-primary transition-colors">Sobre</Link>
                </div>
                <div className="flex items-center gap-4">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-brand-navy">Olá, {user.displayName || 'Usuário'}</span>
                            <button
                                onClick={handleLogout}
                                className="text-sm font-medium text-brand-navy hover:text-red-500 transition-colors"
                            >
                                Sair
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="text-sm font-medium text-brand-navy hover:text-brand-primary transition-colors">Entrar</Link>
                            <Link to="/cadastro" className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-[0_4px_14px_rgba(222,102,35,0.3)]">
                                Criar Conta
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
