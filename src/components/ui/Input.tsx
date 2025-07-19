type InputProps = {
    label?: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
};

export const Input = ({ label, value, onChange, placeholder, disabled }: InputProps) => {
    return (
        <div className="flex flex-col gap-sm">
            {label && <label className="text-sm text-text-primary font-medium">{label}</label>}
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className="border border-border px-sm py-xs rounded-md text-base text-text-primary bg-surface focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            />
        </div>
    );
};
