"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    number: 6,
    suffix: "+",
    title: "Projects Delivered",
    description:
      "We've successfully completed over 6 projects—and we're just getting started!",
  },
  {
    number: 70,
    suffix: "%",
    title: "Business Growth",
    description:
      "Our strategies have helped clients achieve up to 70% revenue growth in just one year!",
  },
  {
    number: 5,
    suffix: "+",
    title: "Happy Clients",
    description:
      "More than 5 satisfied clients trust us to bring their ideas to life.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const StatsSection = () => {
  return (
    <section
      className="container mx-auto px-4 lg:px-12 py-20 text-center space-y-16"
      id="stats"
    >
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl lg:text-5xl max-w-5xl mx-auto font-semibold text-balance"
      >
        <span className="text-accent">Building</span> brands,{" "}
        <span className="text-accent">boosting</span> businesses, and{" "}
        <span className="text-accent">redefining</span> possibilities. Let's
        grow your brand together.
      </motion.h2>

      {/* Stats cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="border rounded-3xl p-4 shadow-sm hover:shadow-md transition-all border-dashed border-gray-800"
          >
            <h3 className="text-5xl md:text-6xl font-bold">
              <CountUp
                end={stat.number}
                duration={2.5}
                enableScrollSpy
                scrollSpyOnce
              />
              <span className="text-accent">{stat.suffix}</span>
            </h3>
            <p className="text-lg font-semibold mt-3">{stat.title}</p>
            <p className="text-gray-700 mt-2 text-sm md:text-base leading-relaxed">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsSection;
