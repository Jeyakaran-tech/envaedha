// src/components/ui/button.tsx

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
}

export default function Button({ variant = "primary", className, ...props }: ButtonProps) {
    const base = "px-4 py-2 rounded-full text-sm font-medium transition-all";

    const styles = {
        primary: "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700",
        outline: "border border-border hover:bg-muted",
        ghost: "text-muted-foreground hover:bg-muted"
    };

    return <button className={`${base} ${styles[variant]} ${className}`} {...props} />;
}