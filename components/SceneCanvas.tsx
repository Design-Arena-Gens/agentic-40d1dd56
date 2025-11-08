"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type FloatingGroupProps = {
  positions: [number, number, number][];
  colors: string[];
};

function FloatingGroup({ positions, colors }: FloatingGroupProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const colorPalette = useMemo(() => colors.map((hex) => new THREE.Color(hex)), [colors]);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const t = clock.getElapsedTime();
    for (let i = 0; i < positions.length; i += 1) {
      const [x, y, z] = positions[i];
      dummy.position.set(
        x + Math.sin(t * 0.5 + i) * 0.5,
        y + Math.cos(t * 0.6 + i) * 0.4,
        z + Math.sin(t * 0.3 + i) * 0.4
      );
      dummy.rotation.set(t * 0.1 + i, t * 0.12 + i * 0.2, t * 0.08 + i * 0.3);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    for (let i = 0; i < positions.length; i += 1) {
      mesh.setColorAt(i, colorPalette[i % colorPalette.length]);
    }
    if (mesh.instanceColor) {
      mesh.instanceColor.needsUpdate = true;
    }
  }, [colorPalette, positions]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, positions.length]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial vertexColors metalness={0.2} roughness={0.4} />
    </instancedMesh>
  );
}

function Ribbon() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    mesh.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
    mesh.rotation.y = clock.getElapsedTime() * 0.12;
  });

  return (
    <mesh ref={meshRef} scale={[12, 3, 12]} position={[0, -2, -4]}>
      <torusKnotGeometry args={[0.6, 0.2, 180, 32, 2, 3]} />
      <meshStandardMaterial color="#5b8def" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

export function SceneCanvas() {
  const floatingPositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 20; i += 1) {
      positions.push([
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(8),
        THREE.MathUtils.randFloatSpread(8)
      ]);
    }
    return positions;
  }, []);

  const gradientColors = ["#ff6f61", "#ffd27f", "#5b8def", "#9f7aea", "#50e3c2"];

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas className="canvas-overlay">
        <color attach="background" args={["#0b0d18"]} />
        <PerspectiveCamera makeDefault fov={50} position={[0, 0, 10]} />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.4} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[6, 6, 6]} intensity={1.1} />
        <pointLight position={[-5, 3, -5]} intensity={0.8} color="#5b8def" />
        <Float speed={1.4} rotationIntensity={0.2} floatIntensity={1.4}>
          <mesh position={[0, 1.4, 0]} scale={1.8}>
            <icosahedronGeometry args={[1.6, 1]} />
            <meshStandardMaterial color="#ff8f70" metalness={0.4} roughness={0.2} emissive="#ff6f61" emissiveIntensity={0.2} />
          </mesh>
        </Float>
        <Ribbon />
        <FloatingGroup positions={floatingPositions} colors={gradientColors} />
      </Canvas>
    </div>
  );
}
