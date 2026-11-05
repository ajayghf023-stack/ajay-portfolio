import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

function createEarthTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const context = canvas.getContext("2d");
  if (!context) return null;

  const ocean = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  ocean.addColorStop(0, "#123c72");
  ocean.addColorStop(0.5, "#0b2a57");
  ocean.addColorStop(1, "#071832");
  context.fillStyle = ocean;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const landmasses = [
    [[0.08, 0.23], [0.16, 0.16], [0.22, 0.2], [0.24, 0.29], [0.21, 0.37], [0.22, 0.44], [0.17, 0.52], [0.13, 0.48], [0.12, 0.39], [0.08, 0.34]],
    [[0.23, 0.53], [0.28, 0.54], [0.31, 0.61], [0.3, 0.7], [0.28, 0.82], [0.25, 0.87], [0.23, 0.77], [0.22, 0.65]],
    [[0.43, 0.22], [0.49, 0.17], [0.55, 0.2], [0.58, 0.27], [0.56, 0.33], [0.6, 0.37], [0.57, 0.46], [0.52, 0.48], [0.5, 0.58], [0.47, 0.56], [0.45, 0.47], [0.42, 0.4], [0.4, 0.3]],
    [[0.51, 0.49], [0.56, 0.47], [0.59, 0.52], [0.58, 0.61], [0.55, 0.72], [0.52, 0.79], [0.49, 0.7], [0.48, 0.6]],
    [[0.68, 0.28], [0.75, 0.2], [0.83, 0.23], [0.88, 0.3], [0.86, 0.37], [0.8, 0.39], [0.76, 0.46], [0.7, 0.42], [0.67, 0.35]],
    [[0.78, 0.54], [0.84, 0.52], [0.87, 0.58], [0.85, 0.68], [0.81, 0.71], [0.78, 0.64]],
  ];

  context.fillStyle = "#36574f";
  context.strokeStyle = "#6d9081";
  context.lineWidth = 2;
  landmasses.forEach((points) => {
    context.beginPath();
    points.forEach(([x, y], index) => {
      const px = x * canvas.width;
      const py = y * canvas.height;
      if (index === 0) context.moveTo(px, py);
      else context.lineTo(px, py);
    });
    context.closePath();
    context.fill();
    context.stroke();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function Earth({ reducedMotion }) {
  const earth = useRef(null);
  const texture = useMemo(() => createEarthTexture(), []);

  useFrame((_, delta) => {
    if (earth.current && !reducedMotion) earth.current.rotation.y += delta * 0.055;
  });

  return (
    <group ref={earth}>
      <mesh>
        <sphereGeometry args={[0.88, 48, 48]} />
        <meshStandardMaterial
          map={texture ?? undefined}
          color={texture ? "#ffffff" : "#164f89"}
          roughness={0.88}
          metalness={0.08}
        />
      </mesh>
      <mesh scale={1.085}>
        <sphereGeometry args={[0.88, 40, 40]} />
        <meshBasicMaterial
          color="#3987ff"
          transparent
          opacity={0.13}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

function Satellite({ reducedMotion }) {
  const orbit = useRef(null);

  useFrame((_, delta) => {
    if (orbit.current && !reducedMotion) orbit.current.rotation.y += delta * 0.15;
  });

  return (
    <group rotation={[0.92, 0.18, -0.22]}>
      <mesh>
        <torusGeometry args={[1.48, 0.006, 6, 120]} />
        <meshBasicMaterial color="#5aa8ff" transparent opacity={0.45} />
      </mesh>
      <group ref={orbit}>
        <group position={[1.48, 0, 0]} rotation={[0.2, 0.4, 0.18]} scale={0.55}>
          <mesh>
            <boxGeometry args={[0.19, 0.16, 0.2]} />
            <meshStandardMaterial color="#dce8f4" metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0, 0.13]}>
            <cylinderGeometry args={[0.055, 0.055, 0.09, 12]} />
            <meshStandardMaterial color="#8dcaff" metalness={0.6} roughness={0.25} />
          </mesh>
          <mesh position={[-0.34, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <boxGeometry args={[0.34, 0.035, 0.22]} />
            <meshStandardMaterial color="#22558b" metalness={0.5} roughness={0.42} />
          </mesh>
          <mesh position={[0.34, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <boxGeometry args={[0.34, 0.035, 0.22]} />
            <meshStandardMaterial color="#22558b" metalness={0.5} roughness={0.42} />
          </mesh>
          <mesh position={[0, 0, -0.19]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.018, 0.018, 0.31, 8]} />
            <meshStandardMaterial color="#c7d5e5" metalness={0.65} roughness={0.3} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function SceneContents({ reducedMotion }) {
  const scene = useRef(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!scene.current || reducedMotion) return;
    scene.current.rotation.y = THREE.MathUtils.damp(
      scene.current.rotation.y,
      pointer.x * 0.07,
      1.5,
      delta
    );
    scene.current.rotation.x = THREE.MathUtils.damp(
      scene.current.rotation.x,
      pointer.y * 0.045,
      1.5,
      delta
    );
  });

  return (
    <group ref={scene}>
      <Earth reducedMotion={reducedMotion} />
      <Satellite reducedMotion={reducedMotion} />
    </group>
  );
}

function SpaceScene({ reducedMotion }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.7], fov: 43 }}
      dpr={[1, 1.35]}
      frameloop={reducedMotion ? "demand" : "always"}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.58} />
      <directionalLight position={[3, 2, 4]} intensity={1.55} color="#c5e1ff" />
      <pointLight position={[-2, 1, -2]} intensity={0.8} color="#168bff" />
      <SceneContents reducedMotion={reducedMotion} />
      <Stars
        radius={7}
        depth={4}
        count={420}
        factor={2.3}
        saturation={0.2}
        fade
        speed={reducedMotion ? 0 : 0.2}
      />
    </Canvas>
  );
}

export default SpaceScene;
