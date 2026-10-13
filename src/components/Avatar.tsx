import React, { useState } from 'react';

interface AvatarProps {
  src?: string;
  name: string;
  className?: string;
}

// Member photo that falls back to initials when the image is missing or fails to load
const Avatar: React.FC<AvatarProps> = ({ src, name, className = '' }) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    const initials = name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join('');

    return (
      <div
        role="img"
        aria-label={name}
        className={`w-full h-full flex items-center justify-center bg-yellow-400 text-charcoal-900 font-bold ${className}`}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`w-full h-full object-cover ${className}`}
    />
  );
};

export default Avatar;
