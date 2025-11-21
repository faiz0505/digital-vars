import { Briefcase } from "lucide-react";
import { MotionDiv } from "../common/motion";
import Link from "next/link";

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

  return (
    <section className="py-12 lg:py-20 bg-primary" id="projects">
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
              Our Clientele
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
            Trusted by Leading <span className="text-accent">Brands</span>
          </h2>

          <p className="text-sm md:text-lg opacity-50 font-medium text-white">
            We've partnered with innovative companies to launch their vision.
            Click a logo to see their success story.
          </p>
        </MotionDiv>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-[200%] md:w-[150%] animate-marquee">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="shrink-0 w-1/4 md:w-1/12 mx-8 lg:mx-12 "
              >
                <Link
                  href={logo.url}
                  target="_blank"
                  className="group flex flex-col items-center justify-center p-4 md:p-6 cursor-pointer space-y-2 "
                  aria-label={`Visit ${logo.name} website`}
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="w-14 h-14 md:w-20 md:h-20 object-contain"
                  />
                  <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-purple-700 whitespace-nowrap">
                    {logo.name}
                  </span>
                </Link>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
