import React, { forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, id, ...props }, ref) => {
        // Generate a random ID if none is provided to ensure accessibility
        const inputId = id || React.useId();

        return (
            <div className="w-full">
                {label && (
                    <label htmlFor={inputId} className="block text-sm font-medium text-brand-navy mb-1">
                        {label}
                    </label>
                )}
                <input
                    id={inputId}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-brand-navy/20 bg-white px-3 py-2 text-sm placeholder:text-brand-navy/40 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all",
                        error && "border-red-500 focus:ring-red-500/50 focus:border-red-500",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <p className="text-xs text-red-500 mt-1">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
