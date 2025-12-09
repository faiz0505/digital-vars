"use client";

import { Briefcase } from "lucide-react";
import { MotionDiv } from "../common/motion";
import Link from "next/link";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Utility to wrap a number between a range
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const ProjectsSection = () => {
  const clientLogos = [
    {
      name: "Interndekho",
      image: "https://interndekho.co.in/logo-without_name.svg",
      url: "https://interndekho.co.in/",
    },
    {
      name: "Neophyte Consulting",
      image: "https://www.neophyteconsulting.com/logo.png",
      url: "https://www.neophyteconsulting.com/",
    },
    {
      name: "Craft Workshop",
      image: "https://www.craftworkshop.in/logo.png",
      url: "https://www.craftworkshop.in/",
    },
    {
      name: "AooHub",
      image: "https://www.aoohub.com/logo.png",
      url: "https://www.aoohub.com/",
    },
    {
      name: "BOT LLM UI Dev",
      image: "https://ui-dev.botllm.ai/arabic_6116488.png",
      url: "https://ui-dev.botllm.ai/",
    },
    {
      name: "Khayyal",
      image: "https://khayyal.com.sa/logo/logo.png",
      url: "https://khayyal.com.sa/",
    },
    {
      name: "Waddi",
      image: "https://waddi.com.sa/logo.png",
      url: "https://waddi.com.sa/",
    },
    {
      name: "Smart ITSM - Bottrion",
      image:
        "https://bottrion.com/wp-content/uploads/2024/09/bot6464-150-x-100-px-150-x-75-px-121-x-42-px.png",
      url: "https://smart-itsm.bottrion.com/",
    },
  ];

  // Logic to infinite scroll
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      // Divided by 3 because we triplicated the array
      const measure = () => setWidth(ref.current.scrollWidth / 3);
      measure();
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }
  }, []);

  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-width, 0, v)}px`);

  useAnimationFrame((t, delta) => {
    if (width > 0) {
      // Adjust speed here. lower is slower. 
      // delta is time in ms since last frame.
      // -0.05 px per ms approx
      let moveBy = -0.5 * (delta / 16.6);
      baseX.set(baseX.get() + moveBy);
    }
  });

  return (
    <section
      className="py-12 lg:py-20 bg-primary overflow-hidden"
      id="projects"
    >
      <div className="container mx-auto px-4 lg:px-12 space-y-12">
        {/* Heading */}
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full border border-purple-300">
            <Briefcase className="w-4 h-4 text-purple-700" />
            <span className="text-sm font-medium text-gray-800">
              Our Clients
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:leading-tight text-white">
            Trusted by Leading <span className="text-accent">Brands</span>
          </h2>

          <p className="text-sm md:text-lg opacity-50 font-medium text-white">
            We've partnered with innovative companies to launch their vision.
            Click a logo to see their success story.
          </p>
        </MotionDiv>

        {/* Marquee */}
        <div className="relative w-full mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-4 cursor-grab active:cursor-grabbing"
            ref={ref}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDrag={(event, info) => {
              // Add drag delta to base X to sync movement
              // Dividing by a factor can smooth it or change sensitivity if needed
              baseX.set(baseX.get() + info.delta.x);
            }}
          >
            {/* Render enough copies to fill the screen + buffer for infinite loop */}
            {[...clientLogos, ...clientLogos, ...clientLogos].map(
              (logo, index) => (
                <Card key={index} logo={logo} />
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Extracted Card for cleaner code
const Card = ({ logo }) => {
  return (
    <div className="shrink-0 w-[200px] md:w-[250px] flex items-center justify-center">
      <Link
        href={logo.url}
        target="_blank"
        className="group flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 hover:bg-white/5 w-full h-full"
        aria-label={`Visit ${logo.name} website`}
      >
        <div className="h-20 w-auto flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
          <img
            src={logo.image}
            alt={logo.name}
            className="max-h-full max-w-full object-contain   opacity-70 group-hover:opacity-100 transition-all duration-300"
          />
        </div>
        <span className="text-sm font-medium text-white/50 group-hover:text-white transition-colors">
          {logo.name}
        </span>
      </Link>
    </div>
  );
};

export default ProjectsSection;
