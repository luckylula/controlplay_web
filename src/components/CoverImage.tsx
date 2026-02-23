"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  fallbackSrc: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
};

/**
 * Imagen de portada: usa la imagen principal; si falla (404), muestra el fallback.
 */
export function CoverImage({ src, fallbackSrc, alt, fill, className, sizes }: Props) {
  const [failed, setFailed] = useState(false);
  const currentSrc = failed ? fallbackSrc : src;

  return (
    <Image
      key={currentSrc}
      src={currentSrc}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      onError={() => setFailed(true)}
    />
  );
}
