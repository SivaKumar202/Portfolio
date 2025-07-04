import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Stage } from "@react-three/drei";
import Model from "./model";

function dev() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <PresentationControls>
          <Stage>
            <Model />
          </Stage>
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
}

export default dev;
