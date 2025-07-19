import { clsx } from 'clsx';

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success';
    disabled?: boolean;
    onClick?: () => void;
};

export const Button = ({ children, variant = 'primary', disabled, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                'px-md py-sm rounded-md font-medium transition-all',
                variant === 'primary' && 'bg-primary text-white hover:bg-blue-700',
                variant === 'secondary' && 'bg-secondary text-white hover:bg-orange-600',
                variant === 'success' && 'bg-success text-white hover:bg-green-600',
                disabled && 'opacity-50 cursor-not-allowed'
            )}
        >
            {children}
        </button>
    );
};
