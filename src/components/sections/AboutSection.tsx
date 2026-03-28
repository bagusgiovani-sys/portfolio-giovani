"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Mail } from "lucide-react";
import { aboutData } from "@/lib/data";

const LENS_SIZE = 150;
const ZOOM = 2.5;

// ─── ADJUST PIN POSITIONS HERE ───────────────────────────────
const PINS = [
  {
    name: "Singapore",
    src: "/assets/images/singapore.png",
    mobile: "top-[48%] right-[36%]",
    desktop: "top-[48%] right-[22%]",
    delay: 0,
  },
  {
    name: "India",
    src: "/assets/images/india.png",
    mobile: "top-[41%] right-[43%]",
    desktop: "top-[43%] right-[28%]",
    delay: 0.4,
  },
  {
    name: "Taiwan",
    src: "/assets/images/taiwan.png",
    mobile: "top-[38%] right-[26%]",
    desktop: "top-[38%] right-[13%]",
    delay: 0.8,
  },
  {
    name: "Vietnam",
    src: "/assets/images/vietnam.png",
    mobile: "bottom-[55%] right-[35%]",
    desktop: "bottom-[68%] right-[16%]",
    delay: 1.2,
  },
  {
    name: "United Arab Emirates",
    src: "/assets/images/UAE.svg",
    mobile: "top-[40%] right-[55%]",
    desktop: "top-[40%] right-[40%]",
    delay: 1.6,
  },
  {
    name: "Brazil",
    src: "/assets/images/Brazil.svg",
    mobile: "bottom-[45%] left-[12%]",
    desktop: "bottom-[45%] left-[28%]",
    delay: 2.0,
  },
];
// ─────────────────────────────────────────────────────────────

function MapPin({
  name,
  src,
  mobile,
  desktop,
  pulse,
  delay,
}: {
  name: string;
  src: string;
  mobile: string;
  desktop: string;
  pulse?: boolean;
  delay: number;
}) {
  return (
    <>
      {/* Mobile pin */}
      <div className={`absolute lg:hidden ${mobile}`}>
        {pulse && (
          <motion.div
            className="absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 2, 2], opacity: [0.6, 0.3, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay,
            }}
          >
            <div className="w-full h-full rounded-full bg-gray-700/50" />
          </motion.div>
        )}
        <div className="relative w-1.5 h-1.5 bg-gray-800 rounded-full shadow-lg" />
        <div className="absolute top-2 left-1/2 -translate-x-1/8 w-32">
          <Image
            src={src}
            alt={name}
            width={10}
            height={5}
            className="drop-shadow-lg w-1/8 h-auto"
          />
        </div>
      </div>

      {/* Desktop pin */}
      <div className={`absolute hidden lg:block ${desktop}`}>
        {pulse && (
          <motion.div
            className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 2, 2], opacity: [0.6, 0.3, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay,
            }}
          >
            <div className="w-full h-full rounded-full bg-gray-700/50" />
          </motion.div>
        )}
        <div className="relative w-2 h-2 bg-gray-800 rounded-full shadow-lg" />
        <div className="absolute top-3 left-1/2 -translate-x-1/4 w-32">
          <Image
            src={src}
            alt={name}
            width={20}
            height={10}
            className="drop-shadow-lg w-1/5 h-auto"
          />
        </div>
      </div>
    </>
  );
}

function MapCardScene({
  stats,
  pulse,
}: {
  stats: typeof aboutData.stats;
  pulse: boolean;
}) {
  return (
    <>
      <div className="absolute inset-[-80] pointer-events-none">
        <Image
          src="/assets/images/worldmap1.jpg"
          alt="World Map"
          fill
          className="object-contain"
        />
      </div>

      {PINS.map((pin) => (
        <MapPin key={pin.name} {...pin} pulse={pulse} />
      ))}

      {/* TOP — title only */}
      <div className="absolute top-0 left-0 right-0 z-10 p-5 md:p-6">
        <h3 className="text-base md:text-xl font-bold text-gray-800 mb-2">
          Too Tiny? Hover and Zoom In!
        </h3>
      </div>

      {/* BOTTOM — stats + subtitle */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5 md:p-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <p className="text-xl md:text-xl font-bold text-gray-800 leading-none">
                {stat.value}
              </p>
              <p className="text-gray-700/80 text-[10px] md:text-[8px] mt-0.5 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-[5px] md:text-[8px] text-gray-700/80 leading-relaxed">
          Taught students globally — Python games, HTML projects, real
          deadlines. Built the communication skills, cross-timezone patience,
          and cultural fluency that shaped me into a globally-ready frontend
          developer.
        </p>
      </div>
    </>
  );
}

export default function AboutSection() {
  const { techIcons, whyChooseMeBadges, projectPreviews, stats, bio } =
    aboutData;
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const row1Items = [...whyChooseMeBadges.row1, ...whyChooseMeBadges.row1];
  const row2Items = [...whyChooseMeBadges.row2, ...whyChooseMeBadges.row2];
  const row3Items = [...whyChooseMeBadges.row3, ...whyChooseMeBadges.row3];

  const getPos = (clientX: number, clientY: number) => {
    const rect = mapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: clientX - rect.left, y: clientY - rect.top });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    getPos(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    getPos(touch.clientX, touch.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    getPos(touch.clientX, touch.clientY);
    setIsHovering(true);
  };

  const handleTouchEnd = () => {
    setIsHovering(false);
  };

  const W = mapRef.current?.offsetWidth ?? 600;
  const H = mapRef.current?.offsetHeight ?? 550;

  return (
    <section
      id="about"
      className="bg-background py-16 md:py-20 lg:py-24 px-4 md:px-8"
    >
      <div className="max-w-xl lg:max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-base lg:text-xl font-medium text-foreground mb-3">
            {bio.greeting}
          </p>
          <p className="leading-snug mb-3">
            <span className="text-[1.3rem] lg:text-3xl font-bold text-foreground">
              {bio.highlight}
            </span>{" "}
            <span className="text-sm lg:text-3xl text-muted-foreground leading-relaxed">
              {bio.body}
            </span>
          </p>
        </motion.div>
      </div>

      <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-xl p-9 h-[370px] md:h-[450px] lg:h-[400px] md:p-10 bg-brand-four"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Me
            </h3>
            <p className="text-gray-900 text-[14px] lg mb-8 leading-relaxed">
              Delivering excellence with innovative solutions and seamless
              execution.
            </p>
            {[row1Items, row2Items, row3Items].map((items, rowIndex) => (
              <div
                key={rowIndex}
                className="relative overflow-hidden mb-3 last:mb-0"
              >
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-brand-four to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-brand-four to-transparent z-10 pointer-events-none" />
                <div
                  className={`flex gap-3 py-1 whitespace-nowrap ${rowIndex % 2 === 0 ? "animate-ticker-pc" : "animate-ticker-reverse"}`}
                >
                  {items.map((badge, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center bg-brand-three font-semibold px-5 py-2.5 rounded-full text-sm text-neutral-900"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-brand-two rounded-xl px-6 py-10 h-[400px] md:h-[450px] lg:h-[400px] md:p-8"
          >
            <h3 className="text-[30px] md:text-3xl font-bold text-white mb-2">
              Tech Stack Mastery
            </h3>
            <div className="flex gap-1.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-500 text-amber-500"
                />
              ))}
            </div>
            <p className="text-white/80 text-[14px] mb-6">
              Mastering modern technologies to deliver impactful and efficient
              solutions
            </p>
            <div className="grid grid-cols-4 gap-2 ,">
              {techIcons.map((tech, index) => {
                const isBigger = ["HTML5", "TypeScript"].includes(tech.name);
                const isRedux = tech.name === "Redux";
                const iconSize = isBigger ? 58 : isRedux ? 110 : 42;
                return (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center justify-center bg-neutral-100/30 backdrop-blur-sm rounded-full p-7.5 w-13 h-13 md:w-16 md:h-16"
                    title={tech.name}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15, y: -5 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1 + index * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                      style={{
                        width: `${iconSize}px`,
                        height: `${iconSize}px`,
                      }}
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={iconSize}
                        height={iconSize}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-xl overflow-hidden h-[400px] md:h-[450px] lg:h-[400px]"
          >
            <div className="absolute inset-0">
              <Image
                src="/assets/images/CardBackground/officebg.svg"
                alt="Office background"
                fill
                className="object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center my-10 p-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-25 text-center">
                2+ Years
                <br />
                Experience
              </h3>
              <div className="flex gap-4 justify-center">
                {projectPreviews.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2, delay: 0.1 + index * 0.1 }}
                    className="relative w-25 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg"
                  >
                    <Image
                      src={project.image}
                      alt={`Project ${project.id}`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative rounded-3xl overflow-hidden h-[400px] md:h-[550px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-four to-brand-three" />
            <div className="absolute inset-0">
              <Image
                src="/assets/images/Giovani9.svg"
                alt="Bagus Giovani"
                fill
                className="object-cover object-center z-40"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-[65px] md:text-7xl lg:text-8xl font-black text-gray-900 text-center">
                BAGUS GIOVANI
              </h3>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50"
            >
              <button className="bg-white hover:bg-brand-three text-black font-semibold px-8 py-3 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105">
                <Mail className="w-5 h-5" />
                Hire Me
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative bg-gradient-to-br from-brand-three to-brand-four rounded-3xl overflow-hidden h-[450px] md:h-[550px]"
            style={{ cursor: "none", touchAction: "none" }}
          >
            <MapCardScene stats={stats} pulse />

            {isHovering && (
              <div
                className="absolute pointer-events-none z-30"
                style={{
                  width: LENS_SIZE,
                  height: LENS_SIZE,
                  left: mouse.x - LENS_SIZE / 2,
                  top: mouse.y - LENS_SIZE / 2,
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow:
                    "0 0 0 3px rgba(255,255,255,0.7), 0 0 0 7px rgba(0,0,0,0.2), 0 8px 32px rgba(0,0,0,0.5)",
                  border: "2px solid rgba(255,255,255,0.9)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: W,
                    height: H,
                    transform: `scale(${ZOOM})`,
                    transformOrigin: `${mouse.x}px ${mouse.y}px`,
                    left: -(mouse.x - LENS_SIZE / 2),
                    top: -(mouse.y - LENS_SIZE / 2),
                    background:
                      "linear-gradient(135deg, var(--color-brand-three), var(--color-brand-four))",
                  }}
                >
                  <MapCardScene stats={stats} pulse={false} />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "8%",
                    left: "15%",
                    width: "35%",
                    height: "30%",
                    borderRadius: "50%",
                    transform: "rotate(-30deg)",
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 100%)",
                  }}
                />
              </div>
            )}

            {isHovering && (
              <div
                className="absolute pointer-events-none z-40"
                style={{
                  left: mouse.x + LENS_SIZE / 2 - 12,
                  top: mouse.y + LENS_SIZE / 2 - 12,
                  width: 32,
                  height: 10,
                  background: "rgba(180,180,180,0.9)",
                  borderRadius: 5,
                  transform: "rotate(45deg)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                }}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
