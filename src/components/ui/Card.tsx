type CardProps = {
    children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
    return (
        <div className="bg-surface shadow-md rounded-lg p-md border border-border">{children}</div>
    );
};
