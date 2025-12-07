// src/components/ui/card.tsx

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`border border-border rounded-lg p-4 bg-card text-card-foreground shadow-sm ${className}`}>
            {children}
        </div>
    );
}