export const Avatar = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <img
            src={src}
            alt={alt}
            className="w-10 h-10 rounded-full border border-border object-cover"
        />
    );
};
