import React from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onError?: () => void;
}

export default function LazyImage({
  src,
  alt,
  className,
  onError,
}: LazyImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      role="presentation"
      onError={onError}
    />
  );
}
