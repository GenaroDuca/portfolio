import { useEffect, useRef } from "react";

const MouseFollower = () => {
  const blobRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("pointermove", handlePointerMove);

    let rafId;
    const animate = () => {
      const blob = blobRef.current;
      if (blob) {
        // Interpolación lineal (Lerp) para suavidad -> factor mayor = más rápido
        pos.current.x += (mouse.current.x - pos.current.x) * 0.3;
        pos.current.y += (mouse.current.y - pos.current.y) * 0.3;

        blob.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Se asigna style left/top inicial en 0 para evitar conflictos, todo se mueve con transform
  return (
    <div ref={blobRef} className="mouse-glow" style={{ left: 0, top: 0 }} />
  );
};

export default MouseFollower;
