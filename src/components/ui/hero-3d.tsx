"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Stars, Float, PerspectiveCamera, Environment, Html } from "@react-three/drei";
import * as THREE from "three";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

function Saturn() {
    const ringRef = useRef<THREE.Group>(null);
    const planetRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (ringRef.current) ringRef.current.rotation.z += delta * 0.1;
        if (planetRef.current) planetRef.current.rotation.y += delta * 0.05;
    });

    return (
        <group position={[15, -10, -80]} rotation={[0.4, 0, 0.5]}>
            {/* The Planet */}
            <mesh ref={planetRef}>
                <sphereGeometry args={[6, 32, 32]} />
                <meshStandardMaterial
                    color="#e5e7eb"
                    emissive="#d1d5db"
                    emissiveIntensity={0.1}
                    metalness={0.4}
                    roughness={0.6}
                />
            </mesh>
            {/* The Rings */}
            <group ref={ringRef}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[8, 12, 64]} />
                    <meshStandardMaterial
                        color="#94a3b8"
                        transparent
                        opacity={0.4}
                        side={THREE.DoubleSide}
                        emissive="#64748b"
                        emissiveIntensity={0.5}
                    />
                </mesh>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[8.5, 11, 64]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        transparent
                        opacity={0.2}
                        side={THREE.DoubleSide}
                        wireframe
                    />
                </mesh>
            </group>
        </group>
    );
}

function GalacticGlow() {
    return (
        <group position={[0, 0, -150]}>
            <mesh scale={[500, 300, 1]}>
                <planeGeometry />
                <meshBasicMaterial
                    color="#1e3a8a"
                    transparent
                    opacity={0.05}
                    depthWrite={false}
                />
            </mesh>
            <mesh position={[50, 0, 0]} scale={[300, 200, 1]}>
                <planeGeometry />
                <meshBasicMaterial
                    color="#312e81"
                    transparent
                    opacity={0.03}
                    depthWrite={false}
                />
            </mesh>
        </group>
    );
}

function MovingStars() {
    const ref = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.z += delta * 0.02;
            ref.current.rotation.y += delta * 0.01;
        }
    });

    return (
        <group ref={ref}>
            {/* Main starfield */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            {/* Denser Milky Way belt */}
            <group rotation={[0, 0, Math.PI / 4]}>
                <Stars radius={150} depth={10} count={2000} factor={10} saturation={1} fade speed={2} />
            </group>
        </group>
    );
}

function SpaceshipCorridor() {
    const rings = useMemo(() => {
        return Array.from({ length: 15 }, (_, i) => ({
            z: -i * 15,
            rotation: i * 0.1
        }));
    }, []);

    return (
        <group>
            {rings.map((ring, i) => (
                <group key={i} position={[0, 0, ring.z]} rotation={[0, 0, ring.rotation]}>
                    <mesh>
                        <ringGeometry args={[8, 9, 8]} />
                        <meshStandardMaterial
                            color="#1e293b"
                            emissive="#3b82f6"
                            emissiveIntensity={0.5}
                            side={THREE.DoubleSide}
                        />
                    </mesh>
                    <mesh position={[0, 8.5, 0]}>
                        <boxGeometry args={[2, 0.2, 5]} />
                        <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={2} />
                    </mesh>
                </group>
            ))}
        </group>
    );
}

function JourneyManager({ displayed, scrollTarget }: { displayed: string, scrollTarget: React.RefObject<any> }) {
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start start", "end start"]
    });

    const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const zPos = useTransform(springScroll, [0, 1], [15, -110]);
    const camRef = useRef<THREE.PerspectiveCamera>(null);
    const contentOpacity = useTransform(springScroll, [0, 0.2, 0.5, 0.8], [1, 1, 1, 0]);

    useFrame(() => {
        if (camRef.current) {
            camRef.current.position.z = zPos.get();
        }
    });

    return (
        <>
            <PerspectiveCamera ref={camRef} makeDefault fov={75} />

            <MovingStars />
            <GalacticGlow />
            <Saturn />
            <SpaceshipCorridor />

            <group position={[0, 0, -20]}>
                <Html
                    transform
                    style={{
                        width: "100vw",
                        pointerEvents: "none",
                        background: "transparent"
                    }}
                >
                    <motion.div
                        style={{ opacity: contentOpacity }}
                        className="flex flex-col items-center text-center px-6"
                    >
                        <h1 className="leading-[1.08] select-none">
                            <span className="block text-5xl sm:text-8xl font-extrabold tracking-tight text-[#e2eeff]">
                                AI Consulting for
                            </span>
                            <span className="block text-5xl sm:text-8xl font-extrabold tracking-tight text-[#3b82f6]">
                                Melbourne SMBs
                            </span>
                        </h1>
                        <p className="mt-12 text-2xl sm:text-4xl font-mono text-[#93c5fd] tracking-[0.25em] uppercase">
                            Engineering {displayed}
                            <span className="animate-blink text-[#3b82f6]">|</span>
                        </p>
                    </motion.div>
                </Html>
            </group>
        </>
    );
}

export default function Hero3D({ displayed, scrollTarget }: { displayed: string, scrollTarget: React.RefObject<any> }) {
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start start", "end start"]
    });

    const overallOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

    return (
        <motion.div
            style={{ opacity: overallOpacity }}
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        >
            <div className="sticky top-0 w-full h-screen font-sans">
                <Canvas gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 20], fov: 75 }}>
                    <color attach="background" args={["#020d1a"]} />
                    <fog attach="fog" args={["#020d1a", 10, 150]} />
                    <ambientLight intensity={0.4} />
                    <pointLight position={[20, 20, -50]} intensity={2} color="#3b82f6" />
                    <JourneyManager displayed={displayed} scrollTarget={scrollTarget} />
                    <Environment preset="night" />
                </Canvas>
            </div>
        </motion.div>
    );
}
