import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function SparkleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configurar tamanho do canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Partículas de brilho
    interface Particle {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      opacity: number;
      twinkleSpeed: number;
      twinkleOffset: number;
    }

    const particles: Particle[] = [];
    const particleCount = 15;

    // Criar partículas pequenas
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 0.8 + 0.3,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.015 + 0.008,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    // Função de animação
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Atualizar posição
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reposicionar se sair da tela
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Efeito de piscar
        const twinkle = Math.sin(Date.now() * particle.twinkleSpeed + particle.twinkleOffset) * 0.5 + 0.5;
        particle.opacity = twinkle;

        // Desenhar partícula pequena
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${particle.opacity * 0.5})`;
        ctx.fill();

        // Brilho sutil e pequeno
        ctx.shadowBlur = 3;
        ctx.shadowColor = "rgba(255, 215, 0, 0.4)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${particle.opacity * 0.2})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

// Componente de estrelinhas piscando
export function TwinklingStars() {
  const stars = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 1.5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-1 bg-yellow-400 rounded-full shadow-[0_0_4px_1px_rgba(255,215,0,0.5)]" />
        </motion.div>
      ))}
    </div>
  );
}

// Componente de brilho dourado flutuante - removido para deixar mais sutil
export function GoldenGlow() {
  return null;
}
