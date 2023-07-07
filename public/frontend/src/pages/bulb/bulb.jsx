/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Switch_btn from "./switch.jsx";

// import CanvasLoader from "../Loader";

const Bulb = (props) => {
  const bulb = useGLTF("bulb/scene.gltf");
  return (
    <>
      {/* <ambientLight /> */}
      <mesh>
        <hemisphereLight intensity={0.3} skyColor="white" groundColor="black" />
        <spotLight
          position={[-20, 80, 10]}
          angle={0.12}
          penumbra={1}
          intensity={props.isLightUp ? 100 : 0}
          castShadow
          shadow-mapSize={1024}
        />
        <spotLight
          position={[20, 80, -10]}
          angle={0.12}
          penumbra={1}
          intensity={props.isLightUp ? 100 : 0}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight
          position={[0, 0, 0]}
          intensity={props.isLightUp ? 20000000 : 1}
        />

        <primitive
          object={bulb.scene}
          scale={props.isMobile ? 0.7 : 1.5}
          position={props.isMobile ? [0, -3, -2.2] : [-5, -1.5, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </>
  );
};

const BulbCanvas = () => {
  const [isLightUp, setisLightUp] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handlelight = (light) => {
    setisLightUp(light);
  };

  return (
    <>
      <Switch_btn onChange={handlelight} />
      <Canvas
        style={{ height: "100vh" }}
        className={`canvu ${isLightUp ? "mybg-light" : "bg-dark"}`}
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 20, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Bulb isMobile={isMobile} isLightUp={isLightUp} />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default BulbCanvas;
