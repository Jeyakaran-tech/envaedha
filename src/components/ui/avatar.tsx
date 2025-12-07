// src/components/ui/avatar.tsx

export default function Avatar({ src, size = 32 }: { src?: string; size?: number }) {
    return (
        <img
            src={src || "/placeholder-avatar.png"}
            style={{ width: size, height: size }}
            className="rounded-full object-cover"
        />
    );
}