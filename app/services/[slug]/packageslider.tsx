"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Package {
  name: string;
  price?: string;
  description?: string;
  technologies?: string[];
  icon?: string; // SVG veya emoji
}

interface Props {
  packages: Package[];
}

export default function PackageSlider({ packages }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPackage = packages[currentIndex];

  const variants = {
    enter: { opacity: 0, x: 100, scale: 0.95, filter: "blur(4px)" },
    center: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, x: -100, scale: 0.95, filter: "blur(4px)" },
  };

  const prev = () => setCurrentIndex((i) => (i === 0 ? packages.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === packages.length - 1 ? 0 : i + 1));

  return (
    <div className="flex items-center justify-center space-x-4 relative">
      {/* Sol ok */}
      <button onClick={prev} className="absolute left-0 z-20 text-3xl text-rose-500 hover:text-rose-600">
        ‹
      </button>

      {/* Kart */}
      <div className="w-96 h-[480px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPackage.name}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full bg-white rounded-xl p-6 shadow-lg flex flex-col justify-between"
          >
            {/* Header */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-rose-700">
                {currentPackage.icon || "📦"}
              </div>
              <h3 className="text-2xl font-bold">{currentPackage.name}</h3>
              {currentPackage.price && (
                <p className="text-rose-600 font-bold text-xl">{currentPackage.price}</p>
              )}
              {currentPackage.description && (
                <p className="text-gray-600 mt-2">{currentPackage.description}</p>
              )}
            </div>

            {/* Teknolojiler */}
            {currentPackage.technologies && currentPackage.technologies.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {currentPackage.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Sağ ok */}
      <button onClick={next} className="absolute right-0 z-20 text-3xl text-rose-500 hover:text-rose-600">
        ›
      </button>
    </div>
  );
}
