"use client";

import { useState } from "react";

export function ProceduralObject() {
  const [wireframe, setWireframe] = useState(false);
  const [rotation, setRotation] = useState({ x: -12, y: 24 });

  return (
    <div className={`procedural-object ${wireframe ? "is-wireframe" : ""}`}>
      <button
        className="object-canvas"
        aria-label="Rotate procedural object"
        onPointerMove={(event) => {
          if (event.buttons !== 1) return;
          const rect = event.currentTarget.getBoundingClientRect();
          setRotation({
            x: ((event.clientY - rect.top) / rect.height - 0.5) * -42,
            y: ((event.clientX - rect.left) / rect.width - 0.5) * 58,
          });
        }}
      >
        <span className="object-orbit orbit-one" />
        <span className="object-orbit orbit-two" />
        <span
          className="object-core"
          style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
        >
          <span className="object-face face-front" />
          <span className="object-face face-back" />
          <span className="object-face face-left" />
          <span className="object-face face-right" />
          <span className="object-face face-top" />
          <span className="object-face face-bottom" />
        </span>
        <span className="object-coordinate">x 04.20 / y 09.80 / z 02.40</span>
      </button>
      <div className="object-caption">
        <span>PROCEDURAL OBJECT / 01</span>
        <button onClick={() => setWireframe((value) => !value)}>
          {wireframe ? "SOLID VIEW" : "WIREFRAME VIEW"}
        </button>
      </div>
    </div>
  );
}
