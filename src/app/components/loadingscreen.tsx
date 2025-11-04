"use client";

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const LoadingScreen = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = 150;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          opacity: Math.random() * 0.5 + 0.2
        });
      }

      return particles;
    };

    particlesRef.current = createParticles();

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with slight fade effect
      ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.speedX *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 200, 255, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Loading Content */}
      <div className="relative z-10 text-center text-white">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Thee Entity
          </h1>
          <p className="text-lg text-gray-300">Most Confident Company</p>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"
            style={{
              animationDuration: '3s',
              animationTimingFunction: 'ease-in-out'
            }}
          />
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-sm text-gray-400 animate-pulse">
          Preparing your experience...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;