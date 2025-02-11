'use client';

import * as React from "react";

interface SvgComponentProps {
  className?: string;  // Allow className prop to be passed
  fill?: string;       // Allow fill color to be passed
  width?: string;      // Allow width to be passed
  height?: string;     // Allow height to be passed
  [key: string]: any;  // Accept any other props
}

const SvgComponent = ({ className, fill = 'currentColor', width = '4vw', height = '4vw', ...props }: SvgComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={width}       // Set width to the passed or default value
    height={height}     // Set height to the passed or default value
    fill="none"
    className={className}  // Apply className to the SVG element
    {...props}  // Spread the rest of the props (like onClick, id, etc.) onto the SVG element
  >
    <path
      fill={fill}  // Use provided fill, or default to 'currentColor'
      fillRule="evenodd"
      d="M100 4.444C100 1.99 98.372 0 96.364 0H3.636C1.628 0 0 1.99 0 4.444v91.112C0 98.01 1.628 100 3.636 100h92.728c2.008 0 3.636-1.99 3.636-4.444V4.444Zm-9.09 82.223c0 1.227-.815 2.222-1.82 2.222H10.91c-1.005 0-1.82-.995-1.82-2.222v-53.89c0-1.227.815-2.221 1.82-2.221h78.18c1.005 0 1.82.994 1.82 2.222v53.889Zm0-69.445c0 1.227-.815 2.222-1.82 2.222H10.91c-1.005 0-1.82-.994-1.82-2.222v-3.889c0-1.227.815-2.222 1.82-2.222h78.18c1.005 0 1.82.995 1.82 2.222v3.89Z"
      clipRule="evenodd"
    />
    <path
      fill={fill}  // Use provided fill, or default to 'currentColor'
      fillRule="evenodd"
      d="M47.615 37.796a2.825 2.825 0 0 1 1.01-1.049 2.67 2.67 0 0 1 1.376-.383c.483 0 .957.132 1.376.383.418.252.767.613 1.01 1.05l6.174 11.075 11.991 2.715a2.72 2.72 0 0 1 1.266.68c.358.338.625.768.774 1.248.15.48.175.992.076 1.486-.1.493-.32.95-.642 1.327l-8.174 9.56 1.237 12.753a3.001 3.001 0 0 1-.227 1.47c-.197.46-.506.86-.897 1.156a2.654 2.654 0 0 1-2.737.306L50 76.402l-11.227 5.17a2.655 2.655 0 0 1-2.737-.305c-.391-.297-.7-.695-.898-1.156a3.001 3.001 0 0 1-.226-1.47l1.237-12.754-8.174-9.556a2.935 2.935 0 0 1-.644-1.329 3.01 3.01 0 0 1 .076-1.486c.149-.48.416-.91.774-1.25a2.722 2.722 0 0 1 1.267-.68l11.991-2.714 6.175-11.076Zm2.386 4.892-5.11 9.169a2.844 2.844 0 0 1-.764.881c-.31.236-.664.4-1.038.485l-9.924 2.246 6.764 7.911c.517.605.767 1.408.69 2.214L39.596 76.15l9.291-4.28a2.661 2.661 0 0 1 2.227 0l9.292 4.28-1.023-10.556a3.01 3.01 0 0 1 .12-1.182c.119-.382.312-.733.567-1.032l6.767-7.91-9.924-2.247a2.707 2.707 0 0 1-1.039-.485 2.846 2.846 0 0 1-.764-.881L50 42.687Z"
      clipRule="evenodd"
    />
    <path
      fill={fill}  // Use provided fill, or default to 'currentColor'
      fillRule="evenodd"
      d="m48.644 73.4-.017.002-.11.055-.03.006-.022-.006-.11-.054c-.016-.006-.029-.003-.037.007l-.006.016-.026.662.007.03.016.02.16.115.024.006.018-.006.161-.114.019-.025.006-.026-.026-.66c-.005-.017-.013-.026-.027-.029Zm.41-.175-.02.003-.286.144-.015.015-.005.017.028.665.008.019.012.01.31.144c.02.005.035.001.046-.012l.006-.022-.053-.95c-.005-.018-.015-.03-.03-.033Zm-1.105.003-.023-.004-.02.013-.008.022-.053.95c0 .018.01.03.026.036l.023-.003.311-.144.016-.012.006-.017.026-.665-.005-.019-.015-.015-.284-.142Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgComponent;
