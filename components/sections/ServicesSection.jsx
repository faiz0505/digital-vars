import React from "react";
import { LineChart, Code, Smartphone, CheckCircle } from "lucide-react";
import { MotionDiv } from "../common/motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const coreServices = [
  {
    title: "Digital Marketing",
    icon: LineChart,
    color: "text-orange-500",
    description:
      "Boost your brand's presence and conversion rates with data-driven SEO, dynamic social media campaigns, and targeted paid advertising.",
    features: [
      "SEO & Content Strategy",
      "Social Media Management",
      "PPC Campaigns & Analytics",
    ],
  },
  {
    title: "Web Designing & Development",
    icon: Code,
    color: "text-blue-500",
    description:
      "Crafting stunning, responsive, and high-performing websites. From concept and UI/UX design to robust, scalable full-stack development.",
    features: [
      "Modern UI/UX Design",
      "Full-Stack Development",
      "Performance Optimization",
    ],
  },
  {
    title: "Android App Development",
    icon: Smartphone,
    color: "text-pink-500",
    description:
      "Building native and cross-platform Android applications that deliver exceptional user experiences and integrate seamlessly with your business.",
    features: [
      "Native & Hybrid Apps",
      "Seamless API Integration",
      "App Store Optimization",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-12 py-20" id="services">
      {/* Header */}
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-3xl mx-auto space-y-4 mb-12 lg:mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full border border-accent/20">
          <Smartphone className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium">Our Expertise</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Solutions That Drive <span className="text-accent">Real Results</span>
        </h2>
        <p className="text-sm md:text-lg opacity-75 font-medium">
          Leveraging cutting-edge technology and creative insight to deliver a
          full spectrum of digital solutions tailored for your success.
        </p>
      </MotionDiv>

      {/* Services Grid */}
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {coreServices.map((service, index) => (
          <MotionDiv
            key={index}
            variants={itemVariants}
            className="border border-dashed border-gray-700 p-8 rounded-3xl shadow-lg space-y-6 bg-white hover:border-accent transition-all duration-300"
          >
            {/* Icon and Title */}
            <div className="flex items-center gap-4">
              <div
                className={`p-4 rounded-xl bg-gray-50 dark:bg-gray-800 ${service.color.replace(
                  "text",
                  "bg"
                )}/10`}
              >
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>

            {/* Description */}
            <p className="text-sm opacity-85 leading-relaxed">
              {service.description}
            </p>

            {/* Features List */}
            <div className="space-y-2 pt-2">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle className={`w-4 h-4 ${service.color}`} />
                  <span className="opacity-90">{feature}</span>
                </div>
              ))}
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </section>
  );
};

export default ServicesSection;
