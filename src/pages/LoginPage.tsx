import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Button from '../components/Button';
import { AlertCircle } from 'lucide-react';

const loginSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage = () => {
    const navigate = useNavigate();
    const [authError, setAuthError] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormInputs) => {
        setAuthError(null);
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            navigate('/');
        } catch (error: any) {
            console.error("Login error:", error);
            if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                setAuthError('Email ou senha incorretos.');
            } else {
                setAuthError('Ocorreu um erro ao fazer login. Tente novamente.');
            }
        }
    };

    return (
        <div className="min-h-screen bg-brand-gray font-sans text-brand-navy">
            <Navbar />

            <div className="pt-32 pb-20 px-6 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-brand-navy/5">
                    <div className="text-center mb-8">
                        <h1 className="font-display text-3xl font-bold text-brand-navy mb-2">Bem-vindo de volta</h1>
                        <p className="text-brand-navy/60">Acesse sua conta para continuar</p>
                    </div>

                    {authError && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 text-red-600 text-sm">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <p>{authError}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <Input
                            label="Email"
                            type="email"
                            placeholder="seu@email.com"
                            error={errors.email?.message}
                            {...register('email')}
                        />

                        <div className="space-y-1">
                            <Input
                                label="Senha"
                                type="password"
                                placeholder="••••••••"
                                error={errors.password?.message}
                                {...register('password')}
                            />
                            <div className="flex justify-end">
                                <Link to="/recuperar-senha" className="text-xs font-medium text-brand-primary hover:text-brand-secondary transition-colors">
                                    Esqueceu a senha?
                                </Link>
                            </div>
                        </div>

                        <Button type="submit" className="w-full h-12 text-base" isLoading={isSubmitting}>
                            Entrar
                        </Button>
                    </form>

                    <div className="mt-8 text-center text-sm text-brand-navy/60">
                        Não tem uma conta?{' '}
                        <Link to="/cadastro" className="font-bold text-brand-primary hover:text-brand-secondary transition-colors">
                            Cadastre-se gratuitamente
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
