import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../services/firebase';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Button from '../components/Button';
import { AlertCircle } from 'lucide-react';

const registerSchema = z.object({
    name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
});

type RegisterFormInputs = z.infer<typeof registerSchema>;

const CadastroPage = () => {
    const navigate = useNavigate();
    const [authError, setAuthError] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormInputs>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterFormInputs) => {
        setAuthError(null);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await updateProfile(userCredential.user, {
                displayName: data.name,
            });
            navigate('/');
        } catch (error: any) {
            console.error("Registration error:", error);
            if (error.code === 'auth/email-already-in-use') {
                setAuthError('Este email já está em uso.');
            } else if (error.code === 'auth/weak-password') {
                setAuthError('A senha é muito fraca.');
            } else {
                setAuthError('Ocorreu um erro ao criar a conta. Tente novamente.');
            }
        }
    };

    return (
        <div className="min-h-screen bg-brand-gray font-sans text-brand-navy">
            <Navbar />

            <div className="pt-32 pb-20 px-6 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-brand-navy/5">
                    <div className="text-center mb-8">
                        <h1 className="font-display text-3xl font-bold text-brand-navy mb-2">Crie sua conta</h1>
                        <p className="text-brand-navy/60">Junte-se à comunidade de design da UNEB</p>
                    </div>

                    {authError && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 text-red-600 text-sm">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <p>{authError}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <Input
                            label="Nome Completo"
                            placeholder="Seu nome"
                            error={errors.name?.message}
                            {...register('name')}
                        />

                        <Input
                            label="Email"
                            type="email"
                            placeholder="seu@email.com"
                            error={errors.email?.message}
                            {...register('email')}
                        />

                        <Input
                            label="Senha"
                            type="password"
                            placeholder="••••••••"
                            error={errors.password?.message}
                            {...register('password')}
                        />

                        <Input
                            label="Confirmar Senha"
                            type="password"
                            placeholder="••••••••"
                            error={errors.confirmPassword?.message}
                            {...register('confirmPassword')}
                        />

                        <Button type="submit" className="w-full h-12 text-base" isLoading={isSubmitting}>
                            Criar Conta
                        </Button>
                    </form>

                    <div className="mt-8 text-center text-sm text-brand-navy/60">
                        Já tem uma conta?{' '}
                        <Link to="/login" className="font-bold text-brand-primary hover:text-brand-secondary transition-colors">
                            Faça login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CadastroPage;
