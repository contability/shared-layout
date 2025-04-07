"use client";

import { type ImgHTMLAttributes, type ReactNode, useState } from "react";

export interface ResponsiveImageProps
  extends Partial<ImgHTMLAttributes<HTMLImageElement>> {
  src: string;
  alt: string;
  aspectRatio?: number;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  priority?: boolean;
  radius?: number;
  onLoadingComplete?: () => void;
  fallback?: ReactNode;
}
export default function ResponsiveImage({
  src,
  alt,
  aspectRatio,
  objectFit = "contain",
  objectPosition = "50% 50%",
  radius,
  fallback,
  loading,
  className,
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div
      className={`relative flex size-full ${className}`}
      style={{ aspectRatio }}
    >
      <img
        width={undefined}
        height={undefined}
        src={src ?? ""}
        alt={alt}
        style={{ objectFit, objectPosition, borderRadius: radius }}
        sizes="100%"
        onLoad={() => setIsLoading(false)}
        loading={loading}
      />
      {isLoading && fallback}
    </div>
  );
}
