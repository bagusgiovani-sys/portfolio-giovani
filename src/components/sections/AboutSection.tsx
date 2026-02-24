// src/components/sections/AboutSection.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Mail } from "lucide-react";

export default function AboutSection() {
  const techIcons = [
    { name: "CSS3", icon: "/assets/icons/css_logo.svg" },
    { name: "JavaScript", icon: "/assets/icons/js_logo.svg" },
    { name: "HTML5", icon: "/assets/icons/html_logo.svg" },
    { name: "Express.js", icon: "/assets/icons/express_logo.svg" },
    { name: "Webpack.js", icon: "/assets/icons/webpack_logo.svg" },
    { name: "TypeScript", icon: "/assets/icons/ts_logo.svg" },
    { name: "React", icon: "/assets/icons/React_logo.svg" },
    { name: "Docker", icon: "/assets/icons/docker_logo.svg" },
    { name: "PostgreSQL", icon: "/assets/icons/postgreSQL_logo.svg" },
    { name: "MongoDB", icon: "/assets/icons/mongo_logo.svg" },
  ];

  const whyChooseMeBadges = {
    row1: ["Frontend Expert", "Fullstack Developer", "Responsive Design"],
    row2: ["React Expert", "5 Years Experience", "React Native"],
    row3: ["Clean Code", "Performance Optimization", "UI/UX Design"],
  };

  // Senior dev trick: Duplicate arrays for seamless infinite scroll
  const row1Items = [...whyChooseMeBadges.row1, ...whyChooseMeBadges.row1];
  const row2Items = [...whyChooseMeBadges.row2, ...whyChooseMeBadges.row2];
  const row3Items = [...whyChooseMeBadges.row3, ...whyChooseMeBadges.row3];

  const projectPreviews = [
    { id: 1, image: "/assets/images/CardBackground/image-8.svg" },
    { id: 2, image: "/assets/images/CardBackground/image-7.svg" },
    { id: 3, image: "/assets/images/CardBackground/image-2.svg" },
  ];

  return (
    <section
      id="about"
      className="bg-background py-16 md:py-20 lg:py-24 px-4 md:px-8"
    >
      <div className="max-w-xl">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {/* Greeting */}
          <p className="text-base font-medium text-foreground mb-3">
            Hi, I'm Edwin Anderson 👋
          </p>

          {/* Highlight + Body (continuous paragraph with different styling) */}
          <p className="leading-snug mb-3">
            <span className="text-[1.3rem] font-bold text-foreground">
              Building digital products with a focus on crafting visually
              engaging and seamless user interfaces using React.js.
            </span>{" "}
            <span className="text-sm text-muted-foreground leading-relaxed">
              Prioritizing responsive design, performance optimization, and
              user-centric features to deliver exceptional web experiences.
            </span>
          </p>
        </motion.div>
      </div>

      <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
        {/* Why Choose Me Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-xl p-9 h-[370px] md:h-[450px] md:p-10 mb-8"
          style={{ backgroundColor: "#e17b0e" }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Me
          </h3>
          <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
            Delivering excellence with innovative solutions and seamless
            execution.
          </p>

          {/* Row 1 - Scrolling Right with Fade Effect */}
          <div className="relative overflow-hidden mb-3">
            {/* Fade Left */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#e17b0e] to-transparent z-10 pointer-events-none" />
            {/* Fade Right */}
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#e17b0e] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-3 animate-ticker whitespace-nowrap">
              {row1Items.map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center bg-white font-semibold px-5 py-2.5 rounded-full text-sm text-neutral-900"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolling Left with Fade Effect */}
          <div className="relative overflow-hidden mb-3">
            {/* Fade Left */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#e17b0e] to-transparent z-10 pointer-events-none" />
            {/* Fade Right */}
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#e17b0e] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-3 animate-ticker-reverse whitespace-nowrap">
              {row2Items.map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center bg-white font-semibold px-5 py-2.5 rounded-full text-sm text-neutral-900"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Row 3 - Scrolling Right with Fade Effect */}
          <div className="relative overflow-hidden">
            {/* Fade Left */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#e17b0e] to-transparent z-10 pointer-events-none" />
            {/* Fade Right */}
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#e17b0e] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-3 animate-ticker whitespace-nowrap">
              {row3Items.map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center bg-white font-semibold px-5 py-2.5 rounded-full text-sm text-neutral-900"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Expert Skill Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-neutral-900 rounded-xl px-6 py-10 h-[400px] md:h-[450px] md:p-8 mb-8"
        >
          <h3 className="text-[30px] md:text-3xl font-bold text-white mb-2">
            Expert Skill
          </h3>

          {/* Star Rating */}
          <div className="flex gap-1.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-amber-500 text-amber-500 font-extralight"
              />
            ))}
          </div>

          <p className="text-white/80 text-[14px] mb-6">
            Mastering modern technologies to deliver impactful and efficient
            solutions
          </p>

          {/* Tech Icons Grid */}
          <div className="grid grid-cols-5 gap-4">
            {techIcons.map((tech, index) => {
              // Define which icons should be bigger
              const isBigger = [
                "MongoDB",
                "Docker",
                "HTML5",
                "TypeScript",
              ].includes(tech.name);

              // CSS3 needs special smaller size
              const isCSS = tech.name === "CSS3";

              // Determine size based on icon type
              const iconSize = isCSS ? 35 : isBigger ? 58 : 42;

              return (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center bg-neutral-800/50 backdrop-blur-sm rounded-full p-3 w-16 h-16"
                  title={tech.name}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + index * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.15, y: -5 }}
                    className="relative"
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
        {/* 5+ Years Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative rounded-xl overflow-hidden mb-8 h-[400px] md:h-[450px]"
        >
          {/* Background Image office) */}
          <div className="absolute inset-0">
            <Image
              src="/assets/images/CardBackground/image_office.svg"
              alt="Office background"
              fill
              className="object-contain"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center my-10 p-6">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-25 text-center">
              5+ Years
              <br />
              Experience
            </h3>

            {/* Project Preview Thumbnails */}
            <div className="flex gap-4 justify-center">
              {projectPreviews.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative w-25 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={project.image}
                    alt={`Project ${project.id}`}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Profile Photo with Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-8 h-[400px] md:h-[500px]"
        >
          {/* Purple Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-300" />

          {/* Profile Image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/images/Your_Pic.svg"
              alt="Edwin Anderson"
              fill
              className="object-cover object-center z-40"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>

          {/* Name Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-[65px] md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-amber-500 text-center">
              EDWIN ANDERSON
            </h3>
          </div>

          {/* Hire Me Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2"
          >
            <button className="bg-white hover:bg-white/90 text-primary-600 font-semibold px-8 py-3 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105">
              <Mail className="w-5 h-5" />
              Hire Me
            </button>
          </motion.div>
        </motion.div>

        {/* Building Digital Products Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl p-6 md:p-8 overflow-hidden h-[500px] md:h-[550px]"
        >
          {/* World Map Background */}
          <div className="absolute inset-[-7]">
            <Image
              src="/assets/images/mapworld.svg"
              alt="World Map"
              fill
              className="object-contain"
            />
          </div>

          {/* Animated Location Markers */}

          {/* Germany - Top Right */}
          <div className="absolute top-[25%] right-[25%]">
            {/* Ripple Effect */}
            <motion.div
              className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 2, 2],
                opacity: [0.6, 0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            >
              <div className="w-full h-full rounded-full bg-cyan-400/50" />
            </motion.div>

            {/* Blinking Dot */}
            <motion.div
              className="relative w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
              animate={{
                opacity: [1, 0.3, 1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Flag */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32">
              <Image
                src="/assets/images/Flags/Flag Pack-2.svg"
                alt="Germany"
                width={40}
                height={20}
                className="drop-shadow-lg w-2/5 h-auto"
              />
            </div>
          </div>

          {/* USA - Middle Right */}
          <div className="absolute top-[48%] right-[6%]">
            {/* Ripple Effect */}
            <motion.div
              className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 2, 2],
                opacity: [0.6, 0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.7,
              }}
            >
              <div className="w-full h-full rounded-full bg-cyan-400/50" />
            </motion.div>

            {/* Blinking Dot */}
            <motion.div
              className="relative w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
              animate={{
                opacity: [1, 0.3, 1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              }}
            />

            {/* Flag */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32">
              <Image
                src="/assets/images/Flags/Flag Pack-1.svg"
                alt="USA"
                width={40}
                height={20}
                className="drop-shadow-lg w-2/5 h-auto"
              />
            </div>
          </div>

          {/* Indonesia - Bottom Right */}
          <div className="absolute bottom-[22%] right-[10%]">
            {/* Ripple Effect */}
            <motion.div
              className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 2, 2],
                opacity: [0.6, 0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1.4,
              }}
            >
              <div className="w-full h-full rounded-full bg-cyan-400/50" />
            </motion.div>

            {/* Blinking Dot */}
            <motion.div
              className="relative w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
              animate={{
                opacity: [1, 0.3, 1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.4,
              }}
            />

            {/* Flag */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32">
              <Image
                src="/assets/images/Flags/Flag Pack-3.svg"
                alt="Indonesia"
                width={40}
                height={20}
                className="drop-shadow-lg w-2/5 h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-white mb-2"
            >
              <span className="flex items-center gap-2">
                Building Digital Products
                <Image
                  src="/assets/icons/starsblight.svg"
                  alt="sparkle"
                  width={28}
                  height={28}
                  className="inline-block"
                />
              </span>
            </motion.h3>

            {/* Stats */}
            <div className="space-y-6 mt-18">
              {/* 50+ Global Clients */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <p className="text-4xl md:text-6xl font-bold text-white mb-1">
                  50+
                </p>
                <p className="text-white/80 mb-10 text-sm">Global Client's Handle</p>
              </motion.div>

              {/* 99% Satisfaction */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <p className="text-4xl md:text-6xl font-bold text-white mb-1">
                  99%
                </p>
                <p className="text-white/80 mb-10 text-sm">
                  Client Satisfaction Rate
                </p>
              </motion.div>

              {/* 100+ Projects */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <p className="text-4xl md:text-6xl font-bold text-white mb-1">
                  100+
                </p>
                <p className="text-white/80 mb-10 text-sm">Project Delivered</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
