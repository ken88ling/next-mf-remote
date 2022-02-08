import { useState } from "react";

export default function SampleComponent() {
  const [hovered, setHover] = useState(false);
  return (
    <p
      style={{
        position: "relative",
        outlineColor: hovered ? "rebeccapurple" : "transparent",
        outlineWidth: 4,
        outlineStyle: "solid"
      }}
      onPointerEnter={() => {
        setHover(true);
      }}
      onPointerLeave={() => {
        setHover(false);
      }}
    >
      {hovered && (
        <span
          style={{
            position: "absolute",
            bottom: "18px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 11,
            background: "white",
            border: "2px solid rebeccapurple",
            padding: "2px 3px",
            fontFamily: "monospace",
            color: "rebeccapurple"
          }}
        >
          next2/sampleComponent
        </span>
      )}
      Sample Component
    </p>
  );
}
