"use client";

/**
 * CLIENT TICKER
 * A subtle infinite marquee of client sector logos (text-based since no assets).
 */

const LOGOS = [
    "APEX_CAPITAL", "MEDICORE_DX", "JURISPRUDENCE_LLP", "NORDVAULT_BANK",
    "PRISM_LOGISTICS", "AETHER_DEFENSE", "SYNTH_GENOMICS", "PIVOT_VENTURES",
    "CLEARWATER_OPS", "RESONANCE_LABS",
];

export default function ClientTicker() {
    const items = [...LOGOS, ...LOGOS]; // double for seamless loop

    return (
        <div
            className="py-10 overflow-hidden relative"
            style={{ borderTop: "1px solid rgba(59,130,246,0.08)", borderBottom: "1px solid rgba(59,130,246,0.08)", background: "#010c18" }}
        >
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #010c18, transparent)" }} />
            <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #010c18, transparent)" }} />

            <div
                className="flex gap-16 w-max"
                style={{ animation: "ticker 30s linear infinite" }}
            >
                {items.map((name, i) => (
                    <div key={i} className="flex items-center gap-3 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(59,130,246,0.3)" }} />
                        <span className="font-mono text-[11px] tracking-[0.15em]" style={{ color: "#1e3a5f" }}>
                            {name}
                        </span>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes ticker {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
}
