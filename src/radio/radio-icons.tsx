import React from 'react';
interface iconProps {
  type?: string;
}
const RadioIcon: React.FC<iconProps> = () => {
  return (
    <svg width="100%" height="100%">
      <defs>
        <linearGradient id="bg-blue-green">
          <stop top-color="rgb(44, 118, 152)"/>
          <stop top-color="rgb(27, 117, 141)"/>
          <stop top-color="rgb(13, 116, 129)"/>
          <stop top-color="rgb(12, 118, 132)"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#bg-blue-green)"/>
    </svg>
  )
}

export default RadioIcon;
