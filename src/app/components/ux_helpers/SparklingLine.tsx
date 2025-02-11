import React, { useEffect, useState } from 'react';

interface SparklingLineProps {
  className?: string; // Optional class for styling
}

const SparklingLine: React.FC<SparklingLineProps> = ({ className }) => {
  const [lines, setLines] = useState<{ angle: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate random slanted lines on mount
    const generateLines = () => {
      const newLines = Array.from({ length: 20 }, () => ({
        angle: Math.random() * 45 - 22.5, // Random angle between -22.5deg and 22.5deg
        delay: Math.random() * 5, // Random delay between 0s and 5s
      }));
      setLines(newLines);
    };

    generateLines();
  }, []);

  return (
    <div
      className={`absolute inset-0 z-0 pointer-events-none ${className} opacity-[4.8%] pointer-events-none`}
      style={{ overflow: 'hidden' }}
    >
      {lines.map((line, index) => (
        <div
          key={index}
          className="sparkling-line"
          style={{
            transform: `rotate(${line.angle}deg)`, // Apply random angle
            animationDelay: `${line.delay}s`, // Apply random delay
          }}
        />
      ))}
    </div>
  );
};

export default SparklingLine;