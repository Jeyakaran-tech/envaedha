// src/components/ui/button.tsx

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
}

export default function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
    const base = "group relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium transition-all active:scale-95";

    // Check if className contains a custom background color
    const hasCustomBg = className.includes('bg-');

    const styles = {
        primary: hasCustomBg ? "" : "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700",
        outline: "border border-border hover:bg-muted",
        ghost: "text-muted-foreground hover:bg-muted"
    };

    return (
        <button className={`${base} ${styles[variant]} ${className}`} {...props}>
            <span className="relative inline-block overflow-hidden align-middle">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                    {children}
                </span>
                <span className="absolute top-0 left-0 block w-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-full group-hover:translate-y-0">
                    {children}
                </span>
            </span>
        </button>
    );
}