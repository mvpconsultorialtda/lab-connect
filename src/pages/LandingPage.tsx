import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Briefcase, Calendar } from 'lucide-react';
import logoCompleto from '../referencias/logo/logo_completo.png';
import logoReduzido from '../referencias/logo/logo_reduzido.png';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-dark text-brand-gray font-sans selection:bg-brand-primary selection:text-brand-dark overflow-x-hidden">
            {/* Navbar */}
            <nav className="fixed w-full z-50 backdrop-blur-md bg-brand-dark/80 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src={logoCompleto} alt="Lab Connect Logo" className="h-10 w-auto" />
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-gray/80">
                        <a href="#vagas" className="hover:text-brand-primary transition-colors">Vagas</a>
                        <a href="#mentoria" className="hover:text-brand-primary transition-colors">Mentoria</a>
                        <a href="#eventos" className="hover:text-brand-primary transition-colors">Eventos</a>
                        <a href="#sobre" className="hover:text-brand-primary transition-colors">Sobre</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-sm font-medium hover:text-white transition-colors">Entrar</button>
                        <button className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(222,102,35,0.3)]">
                            Criar Conta
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative pt-32 pb-20 px-6">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-primary text-xs font-semibold mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                            Exclusivo para Design UNEB
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
                            Conectando o <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                                Futuro do Design
                            </span>
                        </h1>
                        <p className="text-lg text-brand-gray/70 mb-8 max-w-xl leading-relaxed">
                            A plataforma oficial de networking, vagas e mentorias para egressos e estudantes da UNEB.
                            Impulsione sua carreira com conexões reais e oportunidades exclusivas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_30px_rgba(222,102,35,0.4)]">
                                Começar Agora
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg border border-white/10 hover:bg-white/5 transition-all text-white">
                                Saiba Mais
                            </button>
                        </div>

                        <div className="mt-12 flex items-center gap-4 text-sm text-brand-gray/50">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full border-2 border-brand-dark bg-brand-navy flex items-center justify-center text-xs text-white font-medium overflow-hidden">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-brand-dark bg-brand-navy flex items-center justify-center text-xs text-white font-medium overflow-hidden">
                                    <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-brand-dark bg-brand-navy flex items-center justify-center text-xs text-white font-medium overflow-hidden">
                                    <img src="https://i.pravatar.cc/100?img=8" alt="User" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-brand-dark bg-brand-navy flex items-center justify-center text-xs text-white font-medium bg-brand-primary/20">
                                    +500
                                </div>
                            </div>
                            <p>Designers já conectados</p>
                        </div>
                    </motion.div>

                    {/* Hero Visual / Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-brand-navy/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            {/* Mock UI Card */}
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Oportunidades em Destaque</h3>
                                    <p className="text-sm text-white/50">Curadoria exclusiva</p>
                                </div>
                                <div className="p-2 bg-brand-primary/20 rounded-lg">
                                    <Briefcase className="w-6 h-6 text-brand-primary" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                                    <div className="flex justify-between items-start mb-2">
                                        <img src={logoReduzido} alt="Company Logo" className="w-10 h-10 rounded-lg opacity-80 object-contain bg-white/5 p-1" />
                                        <span className="text-xs font-medium px-2 py-1 rounded bg-brand-primary/20 text-brand-primary">Pleno</span>
                                    </div>
                                    <h4 className="font-semibold text-white group-hover:text-brand-primary transition-colors">UX/UI Designer</h4>
                                    <p className="text-sm text-white/50">Studio K • Híbrido • Salvador</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">N</div>
                                        <span className="text-xs font-medium px-2 py-1 rounded bg-blue-500/20 text-blue-400">Júnior</span>
                                    </div>
                                    <h4 className="font-semibold text-white group-hover:text-brand-primary transition-colors">Designer Gráfico</h4>
                                    <p className="text-sm text-white/50">Nubank • Remoto</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold">I</div>
                                        <span className="text-xs font-medium px-2 py-1 rounded bg-purple-500/20 text-purple-400">Estágio</span>
                                    </div>
                                    <h4 className="font-semibold text-white group-hover:text-brand-primary transition-colors">Product Design Intern</h4>
                                    <p className="text-sm text-white/50">Inter • Belo Horizonte</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-brand-primary text-brand-dark p-4 rounded-2xl shadow-xl z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-black/10 rounded-lg">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold opacity-80">Mentores Ativos</p>
                                    <p className="text-xl font-black">50+</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -left-10 bg-brand-gray text-brand-dark p-4 rounded-2xl shadow-xl z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-brand-secondary/10 rounded-lg">
                                    <Calendar className="w-6 h-6 text-brand-secondary" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold opacity-80">Eventos este mês</p>
                                    <p className="text-xl font-black">12</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </main>

            {/* About Section */}
            <section id="sobre" className="py-20 bg-brand-navy/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Por que o Lab Connect?</h2>
                        <p className="text-brand-gray/60 max-w-2xl mx-auto">
                            Nascemos dentro da UNEB para fortalecer a comunidade de design. Somos a ponte entre o ambiente acadêmico e o mercado de trabalho.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-primary/50 transition-colors">
                            <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center mb-4 text-brand-primary">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Networking Real</h3>
                            <p className="text-brand-gray/60">Conecte-se com veteranos que já estão no mercado e expanda sua rede de contatos profissionais.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-primary/50 transition-colors">
                            <div className="w-12 h-12 bg-brand-secondary/20 rounded-xl flex items-center justify-center mb-4 text-brand-secondary">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Vagas Exclusivas</h3>
                            <p className="text-brand-gray/60">Acesso a oportunidades curadas especificamente para o perfil dos designers formados na UNEB.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-primary/50 transition-colors">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-purple-500">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Mentoria e Eventos</h3>
                            <p className="text-brand-gray/60">Participe de workshops, palestras e programas de mentoria para acelerar seu desenvolvimento.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5 bg-brand-dark">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <img src={logoCompleto} alt="Lab Connect Logo" className="h-8 w-auto opacity-80 grayscale hover:grayscale-0 transition-all" />
                    </div>
                    <div className="text-brand-gray/40 text-sm">
                        © 2025 Lab Connect. Todos os direitos reservados.
                    </div>
                    <div className="flex gap-6 text-brand-gray/40">
                        <a href="#" className="hover:text-brand-primary transition-colors">Termos</a>
                        <a href="#" className="hover:text-brand-primary transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-brand-primary transition-colors">Contato</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
