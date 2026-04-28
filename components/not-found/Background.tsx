'use client';

import { useEffect, useState } from 'react';

export default function Background() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    size: number;
    left: number;
    bottom: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const sizes = [3, 4, 5, 6, 8, 10];
    const newParticles = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      left: 5 + Math.random() * 90,
      bottom: Math.random() * 60,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 8,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      
      {/* Ambient Orbs */}
      <div className="absolute -top-[180px] -right-[120px] w-[560px] h-[560px] rounded-full blur-[100px] bg-blue-400/7 dark:bg-blue-500/10 pointer-events-none" />
      <div className="absolute -bottom-[80px] -left-[100px] w-[400px] h-[400px] rounded-full blur-[100px] bg-navy/5 dark:bg-blue-700/12 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full blur-[100px] bg-blue-400/5 dark:bg-blue-500/7 pointer-events-none" />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-blue-500 opacity-0"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              bottom: `${p.bottom}%`,
              animation: `floatUp ${p.duration}s ${p.delay}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(0) scale(1); }
          10% { opacity: 0.35; }
          80% { opacity: 0.12; }
          100% { opacity: 0; transform: translateY(-220px) scale(0.4); }
        }
      `}</style>
    </div>
  );
}
