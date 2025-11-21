import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Loader2 } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    isLoading,
    children,
    disabled,
    ...props
}) => {
    const variants = {
        primary: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:brightness-110 shadow-md hover:shadow-lg border-transparent",
        secondary: "bg-brand-navy text-white hover:bg-brand-navy/90 border-transparent",
        outline: "bg-transparent border-brand-navy/20 text-brand-navy hover:bg-brand-navy/5",
        ghost: "bg-transparent text-brand-navy hover:bg-brand-navy/5 border-transparent shadow-none"
    };

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none border",
                variants[variant],
                className
            )}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </button>
    );
};

export default Button;
