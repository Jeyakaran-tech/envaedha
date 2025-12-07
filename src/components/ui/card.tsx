// src/components/ui/card.tsx

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`border border-neutral-200 rounded-lg p-4 bg-white shadow-sm ${className}`}>
            {children}
        </div>
    );
}