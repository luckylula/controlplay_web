"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  fallbackSrc: string;
  className?: string;
  /** Escala opcional para ampliar el vídeo y recortar bandas negras (ej: 1.15). */
  scale?: number;
};

/**
 * Vídeo de portada: autoplay, mute, loop. Si falla o no se soporta, muestra la imagen de respaldo.
 * scale > 1 amplía el vídeo para rellenar y ocultar bandas negras.
 */
export function CoverVideo({ src, fallbackSrc, className, scale = 1 }: Props) {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return (
      <Image
        src={fallbackSrc}
        alt=""
        fill
        className={className}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    );
  }

  const scaleStyle = scale !== 1 ? { transform: `scale(${scale})` } : undefined;

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      style={scaleStyle}
      className={`absolute inset-0 h-full w-full ${className ?? ""}`}
      onError={() => setUseFallback(true)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
