import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      particles.length = 0;
      const count = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 1.8 + 0.4,
          opacity: Math.random() * 0.6 + 0.1,
          hue: Math.random() > 0.5 ? 290 : 260,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `hsla(${particles[i].hue}, 70%, 65%, ${0.07 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 70%, ${p.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      createParticles();
    });
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-portfolio-bg/85" />
      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'oklch(0.68 0.22 290)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl" style={{ background: 'oklch(0.72 0.18 10)' }} />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-portfolio-bg/10 via-transparent to-portfolio-bg" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Profile Avatar */}
        <div className="flex justify-center mb-8">
          <div className="relative animate-float">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-portfolio-violet via-portfolio-indigo to-portfolio-rose opacity-50 blur-md" />
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-portfolio-violet/60 shadow-2xl shadow-portfolio-violet/30">
              <img
                src="/assets/generated/pranaav-profile.dim_400x400.png"
                alt="R. Pranaav Sanjith"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online indicator */}
            <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-portfolio-bg shadow" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-portfolio-violet/30 bg-portfolio-violet/10 text-portfolio-violet text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-portfolio-violet animate-pulse" />
          Open to Opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-portfolio-text mb-4 leading-tight tracking-tight">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-violet via-portfolio-violet-light to-portfolio-rose">
            Pranaav Sanjith
          </span>
        </h1>

        {/* Tagline — upgraded to near-white for high contrast */}
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
          Data Analytics & ML Enthusiast | Final-Year B.Tech IT
        </h2>

        {/* Description — upgraded to light gray for clear readability */}
        <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Final-year B.Tech Information Technology student at Madras Institute of Technology, Anna University —
          passionate about transforming raw data into meaningful insights and building data-driven solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={scrollToProjects}
            className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-portfolio-violet to-portfolio-indigo text-white font-bold text-base hover:shadow-violet-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <button
            onClick={scrollToAbout}
            className="px-8 py-3.5 rounded-lg border border-portfolio-border text-portfolio-text font-semibold text-base hover:border-portfolio-violet hover:text-portfolio-violet transition-all duration-200 hover:-translate-y-0.5"
          >
            About Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/rpsanjith30"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-portfolio-border text-portfolio-muted hover:text-portfolio-violet hover:border-portfolio-violet transition-all duration-200 hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <SiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/r-pranaav-sanjith/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-portfolio-border text-portfolio-muted hover:text-portfolio-violet hover:border-portfolio-violet transition-all duration-200 hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-portfolio-border text-portfolio-muted hover:text-portfolio-violet hover:border-portfolio-violet transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Twitter / X"
          >
            <SiX className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-portfolio-muted hover:text-portfolio-violet transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </button>
    </div>
  );
}
