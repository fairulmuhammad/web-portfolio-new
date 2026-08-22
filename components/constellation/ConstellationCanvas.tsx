"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { EasterEggBadge } from "./EasterEggBadge";

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  baseOpacity: number;
  pulseSpeed: number;
  pulsePhase: number;
  layer: 1 | 2 | 3; // 1: micro, 2: mid, 3: foreground
  glow: boolean;
}

interface StardustSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  radius: number;
  color: string;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  maxOpacity: number;
  life: number;
  maxLife: number;
  width: number;
  headRadius: number;
  color: string;
}

interface CancerNode {
  relX: number;
  relY: number;
  name: string;
  radius: number;
}

const CONFIG = {
  // Star counts
  microStarCount: 100,
  midStarCount: 50,
  nodeStarCount: 35,

  // Constellation lines
  connectionDistance: 150,
  lineMinOpacity: 0.03,
  lineMaxOpacity: 0.16,
  lineWidth: 0.6,

  // Mouse interaction
  mouseRadius: 190,
  mouseGlowIntensity: 0.7,
  mouseLineWidth: 0.9,

  // Colors
  starColor: "220, 225, 245",
  nodeColor: "196, 181, 253", // soft lavender #C4B5FD
  lineColor: "180, 167, 214", // #B4A7D6
  mouseLineColor: "216, 201, 255",
  meteorColor: "245, 240, 255", // brilliant starlight white-lavender
  meteorGlowColor: "180, 167, 214",
  cancerColor: "216, 180, 254", // vibrant celestial violet

  // Nebulae
  nebulae: [
    { x: 0.2, y: 0.25, radius: 460, color: "42, 22, 65", opacity: 0.045 },
    { x: 0.8, y: 0.65, radius: 440, color: "22, 30, 70", opacity: 0.04 },
    { x: 0.5, y: 0.85, radius: 380, color: "35, 18, 55", opacity: 0.035 },
  ],
};

// Cancer constellation normalized coordinates (in 0..1 bounding box in upper right)
const CANCER_NODES: CancerNode[] = [
  { relX: 0.72, relY: 0.18, name: "Tegmine (ζ)", radius: 2.2 },
  { relX: 0.76, relY: 0.22, name: "Asellus Borealis (γ)", radius: 2.4 },
  { relX: 0.75, relY: 0.27, name: "Asellus Australis (δ)", radius: 2.5 },
  { relX: 0.70, relY: 0.32, name: "Acubens (α)", radius: 2.6 },
  { relX: 0.80, relY: 0.34, name: "Altarf (β)", radius: 2.8 },
];

const CANCER_EDGES = [
  [0, 1], // Tegmine -> Asellus Borealis
  [1, 2], // Asellus Borealis -> Asellus Australis
  [2, 3], // Asellus Australis -> Acubens
  [2, 4], // Asellus Australis -> Altarf
];

// Praesepe Beehive Cluster (M44) stars between Aselli
const PRAESEPE_STARS = [
  { relX: 0.755, relY: 0.245, r: 1.1 },
  { relX: 0.758, relY: 0.250, r: 0.9 },
  { relX: 0.752, relY: 0.253, r: 1.0 },
  { relX: 0.757, relY: 0.256, r: 0.8 },
  { relX: 0.751, relY: 0.242, r: 1.2 },
];

export const ConstellationCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const meteorsRef = useRef<Meteor[]>([]);
  const sparksRef = useRef<StardustSpark[]>([]);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number } | null>(null);
  const nextSpawnRef = useRef<number>(0);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  // Easter egg states
  const [activeEasterEgg, setActiveEasterEgg] = useState<"cancer" | "moon" | null>(null);
  const cancerRevealedRef = useRef<boolean>(false);
  const moonGlowMultiplierRef = useRef<number>(1);

  // Trigger Cancer constellation
  const triggerCancer = useCallback(() => {
    cancerRevealedRef.current = !cancerRevealedRef.current;
    if (cancerRevealedRef.current) {
      setActiveEasterEgg("cancer");
    } else {
      setActiveEasterEgg(null);
    }
  }, []);

  // Spawn a meteor
  const spawnMeteorInstance = useCallback(
    (width: number, height: number, customTarget?: { x: number; y: number }) => {
      let startX: number;
      let startY: number;
      let angle: number;

      if (customTarget) {
        // Shoot towards clicked coordinate
        startX = customTarget.x + (Math.random() > 0.5 ? 200 : -200);
        startY = customTarget.y - 250;
        angle = Math.atan2(customTarget.y - startY, customTarget.x - startX);
      } else {
        // Natural diagonal streak from top/right to bottom/left
        const fromRight = Math.random() > 0.35;
        angle = fromRight
          ? Math.PI * 0.72 + (Math.random() - 0.5) * 0.2 // ~130 deg
          : Math.PI * 0.28 + (Math.random() - 0.5) * 0.2; // ~50 deg

        startX = fromRight
          ? Math.random() * (width * 0.9) + width * 0.15
          : Math.random() * (width * 0.7) - width * 0.1;
        startY = -40 + Math.random() * (height * 0.35);
      }

      const speed = 9 + Math.random() * 8;
      const length = 140 + Math.random() * 160;

      meteorsRef.current.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length,
        speed,
        angle,
        opacity: 0,
        maxOpacity: 0.85 + Math.random() * 0.15,
        life: 0,
        maxLife: 45 + Math.random() * 35,
        width: 2.0 + Math.random() * 1.2,
        headRadius: 2.5 + Math.random() * 1.2,
        color: CONFIG.meteorColor,
      });
    },
    []
  );

  // Trigger starfall cascade on Moon click
  const triggerMoonStarfall = useCallback(() => {
    setActiveEasterEgg("moon");
    moonGlowMultiplierRef.current = 2.5;

    const w = window.innerWidth;
    const h = window.innerHeight;

    // Spawn 6 meteors in rapid succession
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        spawnMeteorInstance(w, h);
      }, i * 180);
    }

    setTimeout(() => {
      moonGlowMultiplierRef.current = 1;
    }, 4000);
  }, [spawnMeteorInstance]);

  const initStars = useCallback((width: number, height: number) => {
    const area = width * height;
    const baseArea = 1920 * 1080;
    const scale = Math.sqrt(area / baseArea);

    const microCount = Math.round(CONFIG.microStarCount * scale);
    const midCount = Math.round(CONFIG.midStarCount * scale);
    const nodeCount = Math.round(CONFIG.nodeStarCount * scale);

    const stars: Star[] = [];

    // Layer 1
    for (let i = 0; i < Math.min(microCount, 160); i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.04,
        vy: (Math.random() - 0.5) * 0.04,
        radius: 0.4 + Math.random() * 0.45,
        opacity: 0.2 + Math.random() * 0.4,
        baseOpacity: 0.2 + Math.random() * 0.4,
        pulseSpeed: 0.008 + Math.random() * 0.015,
        pulsePhase: Math.random() * Math.PI * 2,
        layer: 1,
        glow: false,
      });
    }

    // Layer 2
    for (let i = 0; i < Math.min(midCount, 80); i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        radius: 0.85 + Math.random() * 0.55,
        opacity: 0.35 + Math.random() * 0.4,
        baseOpacity: 0.35 + Math.random() * 0.4,
        pulseSpeed: 0.006 + Math.random() * 0.012,
        pulsePhase: Math.random() * Math.PI * 2,
        layer: 2,
        glow: false,
      });
    }

    // Layer 3
    for (let i = 0; i < Math.min(nodeCount, 50); i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        radius: 1.5 + Math.random() * 0.8,
        opacity: 0.6 + Math.random() * 0.35,
        baseOpacity: 0.6 + Math.random() * 0.35,
        pulseSpeed: 0.005 + Math.random() * 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
        layer: 3,
        glow: true,
      });
    }

    starsRef.current = stars;
    meteorsRef.current = [];
    sparksRef.current = [];

    // Pre-populate with initial shooting stars
    spawnMeteorInstance(width, height);
    spawnMeteorInstance(width, height);
  }, [spawnMeteorInstance]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initStars(window.innerWidth, window.innerHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      if (!mouseRef.current) {
        mouseRef.current = {
          x: e.clientX,
          y: e.clientY,
          targetX: e.clientX,
          targetY: e.clientY,
        };
      } else {
        mouseRef.current.targetX = e.clientX;
        mouseRef.current.targetY = e.clientY;
      }
    };

    const onMouseLeave = () => {
      mouseRef.current = null;
    };

    // Click on canvas to summon shooting star or trigger Moon
    const onClick = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const moonX = w * 0.88;
      const moonY = h * 0.12;
      const moonDist = Math.hypot(e.clientX - moonX, e.clientY - moonY);

      if (moonDist < 45) {
        triggerMoonStarfall();
      } else {
        spawnMeteorInstance(w, h, { x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("click", onClick);

    const width = () => window.innerWidth;
    const height = () => window.innerHeight;

    // Draw cosmic nebulae
    const drawNebulae = () => {
      const w = width();
      const h = height();
      for (const blob of CONFIG.nebulae) {
        const gradient = ctx.createRadialGradient(
          blob.x * w,
          blob.y * h,
          0,
          blob.x * w,
          blob.y * h,
          blob.radius
        );
        gradient.addColorStop(0, `rgba(${blob.color}, ${blob.opacity})`);
        gradient.addColorStop(1, `rgba(${blob.color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }
    };

    // Draw Glowing Moon
    const drawMoon = () => {
      const w = width();
      const h = height();
      const moonX = w * 0.88;
      const moonY = h * 0.12;
      const moonRadius = 18;
      const glowMul = moonGlowMultiplierRef.current;

      // Outer Moonlight Halo
      const moonHalo = ctx.createRadialGradient(
        moonX,
        moonY,
        moonRadius * 0.5,
        moonX,
        moonY,
        moonRadius * 4.5 * glowMul
      );
      moonHalo.addColorStop(0, `rgba(224, 215, 255, ${0.22 * glowMul})`);
      moonHalo.addColorStop(0.5, `rgba(180, 167, 214, ${0.08 * glowMul})`);
      moonHalo.addColorStop(1, "rgba(180, 167, 214, 0)");
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius * 4.5 * glowMul, 0, Math.PI * 2);
      ctx.fillStyle = moonHalo;
      ctx.fill();

      // Crescent Moon Base
      ctx.save();
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#EAE4F8";
      ctx.shadowColor = "rgba(224, 215, 255, 0.9)";
      ctx.shadowBlur = 12 * glowMul;
      ctx.fill();

      // Cutout to form elegant Crescent Moon
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(moonX - 7, moonY - 5, moonRadius * 0.92, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Moon shimmer spark
      ctx.beginPath();
      ctx.arc(moonX + 8, moonY - 6, 1.2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.fill();
    };

    // Draw Cancer Constellation (Easter Egg)
    const drawCancerConstellation = () => {
      const w = width();
      const h = height();
      const isRevealed = cancerRevealedRef.current;

      const nodes = CANCER_NODES.map((node) => ({
        x: node.relX * w,
        y: node.relY * h,
        name: node.name,
        radius: node.radius,
      }));

      // Draw connecting lines
      for (const [i, j] of CANCER_EDGES) {
        const p1 = nodes[i];
        const p2 = nodes[j];

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = isRevealed
          ? "rgba(216, 180, 254, 0.65)"
          : "rgba(180, 167, 214, 0.12)";
        ctx.lineWidth = isRevealed ? 1.4 : 0.6;
        ctx.stroke();

        if (isRevealed) {
          // Extra starlight glow on lines
          ctx.shadowColor = "rgba(216, 180, 254, 0.8)";
          ctx.shadowBlur = 8;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      // Draw Praesepe (Beehive Cluster)
      for (const s of PRAESEPE_STARS) {
        const sx = s.relX * w;
        const sy = s.relY * h;
        ctx.beginPath();
        ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
        ctx.fillStyle = isRevealed
          ? "rgba(245, 240, 255, 0.95)"
          : "rgba(196, 181, 253, 0.35)";
        ctx.fill();
      }

      // Draw Cancer Nodes
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, isRevealed ? node.radius * 1.5 : node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isRevealed ? "#F3E8FF" : "rgba(196, 181, 253, 0.75)";
        ctx.fill();

        // Node radiant halo
        const halo = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          isRevealed ? 16 : 8
        );
        halo.addColorStop(0, isRevealed ? "rgba(216, 180, 254, 0.6)" : "rgba(180, 167, 214, 0.2)");
        halo.addColorStop(1, "rgba(180, 167, 214, 0)");
        ctx.beginPath();
        ctx.arc(node.x, node.y, isRevealed ? 16 : 8, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();
      }

      // If revealed, draw ♋ astrological symbol & label
      if (isRevealed) {
        const centerX = nodes[2].x - 30;
        const centerY = nodes[2].y - 30;
        ctx.font = "bold 20px monospace";
        ctx.fillStyle = "rgba(216, 180, 254, 0.85)";
        ctx.fillText("♋ CANCER", centerX, centerY);
        ctx.font = "11px monospace";
        ctx.fillStyle = "rgba(200, 190, 230, 0.6)";
        ctx.fillText("Praesepe M44 Cluster", centerX, centerY + 16);
      }
    };

    // Update stars positions & twinkling
    const updateStars = () => {
      const w = width();
      const h = height();

      for (const star of starsRef.current) {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < -15) star.x = w + 15;
        if (star.x > w + 15) star.x = -15;
        if (star.y < -15) star.y = h + 15;
        if (star.y > h + 15) star.y = -15;

        star.opacity =
          star.baseOpacity +
          Math.sin(timeRef.current * star.pulseSpeed + star.pulsePhase) * 0.18;
      }
    };

    // Update & spawn meteors (shooting stars)
    const updateMeteors = () => {
      const now = timeRef.current;
      const w = width();
      const h = height();

      // Guarantee frequent, continuous shooting stars (every 50-100 frames ~ 0.8s - 1.6s)
      if (now >= nextSpawnRef.current && meteorsRef.current.length < 5) {
        spawnMeteorInstance(w, h);
        nextSpawnRef.current = now + 45 + Math.floor(Math.random() * 55);
      }

      for (let i = meteorsRef.current.length - 1; i >= 0; i--) {
        const m = meteorsRef.current[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life++;

        // Shed trailing stardust sparks behind meteor head
        if (Math.random() > 0.4) {
          sparksRef.current.push({
            x: m.x - m.vx * 0.5 + (Math.random() - 0.5) * 3,
            y: m.y - m.vy * 0.5 + (Math.random() - 0.5) * 3,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            opacity: m.opacity * 0.8,
            radius: 0.8 + Math.random() * 0.9,
            color: CONFIG.nodeColor,
          });
        }

        // Opacity envelope
        const lifeRatio = m.life / m.maxLife;
        if (lifeRatio < 0.15) {
          m.opacity = (lifeRatio / 0.15) * m.maxOpacity;
        } else if (lifeRatio > 0.55) {
          m.opacity = ((1 - lifeRatio) / 0.45) * m.maxOpacity;
        } else {
          m.opacity = m.maxOpacity;
        }

        if (
          m.life >= m.maxLife ||
          m.y > h + 150 ||
          m.x < -150 ||
          m.x > w + 150
        ) {
          meteorsRef.current.splice(i, 1);
        }
      }

      // Update stardust sparks
      for (let j = sparksRef.current.length - 1; j >= 0; j--) {
        const spark = sparksRef.current[j];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.opacity -= 0.025;

        if (spark.opacity <= 0.02) {
          sparksRef.current.splice(j, 1);
        }
      }
    };

    // Draw shooting stars
    const drawMeteors = () => {
      // Draw trailing stardust sparks first
      for (const s of sparksRef.current) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${s.opacity})`;
        ctx.fill();
      }

      // Draw meteors
      for (const m of meteorsRef.current) {
        if (m.opacity <= 0.02) continue;

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        // Long radiant gradient trail
        const gradient = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        gradient.addColorStop(0, "rgba(180, 167, 214, 0)");
        gradient.addColorStop(0.2, `rgba(180, 167, 214, ${m.opacity * 0.2})`);
        gradient.addColorStop(0.65, `rgba(196, 181, 253, ${m.opacity * 0.7})`);
        gradient.addColorStop(1, `rgba(${m.color}, ${m.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = m.width;
        ctx.lineCap = "round";
        ctx.stroke();

        // Glowing white core
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.headRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${m.color}, ${Math.min(1, m.opacity * 1.4)})`;
        ctx.fill();

        // Radiant starlight bloom
        const halo = ctx.createRadialGradient(
          m.x,
          m.y,
          0,
          m.x,
          m.y,
          m.headRadius * 4.5
        );
        halo.addColorStop(0, `rgba(${CONFIG.meteorGlowColor}, ${m.opacity * 0.5})`);
        halo.addColorStop(0.6, `rgba(${CONFIG.meteorGlowColor}, ${m.opacity * 0.15})`);
        halo.addColorStop(1, "rgba(180, 167, 214, 0)");
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.headRadius * 4.5, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();
      }
    };

    // Draw regular starfield
    const drawStars = () => {
      const mouse = mouseRef.current;

      for (const star of starsRef.current) {
        let glowBoost = 0;

        if (mouse) {
          const dx = star.x - mouse.x;
          const dy = star.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONFIG.mouseRadius) {
            glowBoost =
              CONFIG.mouseGlowIntensity * (1 - dist / CONFIG.mouseRadius);
          }
        }

        const finalOpacity = Math.max(0.05, Math.min(1, star.opacity + glowBoost));
        const color = star.layer === 3 ? CONFIG.nodeColor : CONFIG.starColor;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${finalOpacity})`;
        ctx.fill();

        if (star.glow || glowBoost > 0.15) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${CONFIG.lineColor}, ${finalOpacity * 0.12})`;
          ctx.fill();
        }
      }
    };

    // Draw constellation lines
    const drawConstellationLines = () => {
      const nodes = starsRef.current.filter((s) => s.layer === 3);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < CONFIG.connectionDistance) {
            const alpha =
              (CONFIG.lineMaxOpacity -
                (dist / CONFIG.connectionDistance) *
                  (CONFIG.lineMaxOpacity - CONFIG.lineMinOpacity)) *
              Math.min(nodes[i].opacity, nodes[j].opacity);

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${CONFIG.lineColor}, ${alpha})`;
            ctx.lineWidth = CONFIG.lineWidth;
            ctx.stroke();
          }
        }
      }
    };

    // Draw interactive mouse constellation connections
    const drawMouseConnections = () => {
      const mouse = mouseRef.current;
      if (!mouse) return;

      mouse.x += (mouse.targetX - mouse.x) * 0.14;
      mouse.y += (mouse.targetY - mouse.y) * 0.14;

      for (const star of starsRef.current) {
        if (star.layer === 1) continue;

        const dx = star.x - mouse.x;
        const dy = star.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < CONFIG.mouseRadius) {
          const alpha = 0.25 * (1 - dist / CONFIG.mouseRadius);

          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(star.x, star.y);
          ctx.strokeStyle = `rgba(${CONFIG.mouseLineColor}, ${alpha})`;
          ctx.lineWidth = CONFIG.mouseLineWidth;
          ctx.stroke();
        }
      }

      // Cursor radiant aura
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        15
      );
      gradient.addColorStop(0, `rgba(${CONFIG.mouseLineColor}, 0.45)`);
      gradient.addColorStop(0.5, `rgba(${CONFIG.mouseLineColor}, 0.12)`);
      gradient.addColorStop(1, "rgba(196, 181, 253, 0)");

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 15, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Center starlight dot
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();
    };

    // Animation loop
    const animate = () => {
      timeRef.current++;
      ctx.clearRect(0, 0, width(), height());

      // Base space background
      ctx.fillStyle = "#07070d";
      ctx.fillRect(0, 0, width(), height());

      drawNebulae();
      drawMoon();
      drawCancerConstellation();
      updateStars();
      updateMeteors();
      drawMeteors();
      drawConstellationLines();
      drawStars();
      drawMouseConnections();

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("click", onClick);
    };
  }, [initStars, spawnMeteorInstance, triggerMoonStarfall]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-auto cursor-crosshair"
        style={{ background: "#07070d" }}
        aria-hidden="true"
        title="Celestial Sky — Click to summon a shooting star or click the Moon"
      />
      <EasterEggBadge
        activeEasterEgg={activeEasterEgg}
        onDismiss={() => setActiveEasterEgg(null)}
        onTriggerCancer={triggerCancer}
      />
    </>
  );
};
