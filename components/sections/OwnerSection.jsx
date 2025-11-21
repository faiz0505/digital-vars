import { Button } from "../ui/button";
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
const OwnersSection = () => {
  const services = [
    { title: "Business Strategy", icon: TrendingUp, color: "text-blue-500" },
    { title: "Web Designing", icon: Sparkles, color: "text-pink-500" },
    { title: "AI Solutions", icon: Zap, color: "text-orange-500" },
    { title: "Creative Agency", icon: Users, color: "text-purple-500" },
  ];

  return (
    <section className="overflow-hidden" id="owners">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Column: Text & Services */}
          <div className="lg:col-span-6  space-y-4">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full border border-accent/20">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">We're Creative</span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-16">
                DIGITAL VARS
                <br />
                <span className="text-accent">MARKETING AGENCY</span>
                <br /> WITH AI.
              </h2>
              <p className="text-sm md:text-lg opacity-75 font-medium max-w-xl mx-auto lg:mx-0">
                Meet the minds behind the movement. We combine human ingenuity
                with artificial intelligence to build solutions that don't just
                work—they wow.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-6 pt-4">
              <div className="text-xs font-bold text-gray-800 uppercase tracking-widest">
                Our Core Services
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:border-purple-200 hover:shadow-md transition-all cursor-default"
                  >
                    <div
                      className={`p-3 rounded-xl bg-gray-50 dark:bg-gray-800 group-hover:scale-110 transition-transform ${service.color.replace(
                        "text",
                        "bg"
                      )}/10`}
                    >
                      <service.icon className={`w-5 h-5 ${service.color}`} />
                    </div>
                    <span className="font-bold text-gray-900 dark:text-gray-100">
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Owner Photos */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            {/* Background Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] aspect-square bg-linear-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 items-center">
              {/* Owner 1 (Moved down slightly for staggered look) */}
              <div className="mt-12 md:mt-24 space-y-4">
                <div className="aspect-3/4 w-full rounded-4xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-950 -rotate-6 hover:rotate-0 transition-transform duration-500 ease-out">
                  <img
                    src="/mohtashim_profile.png"
                    alt="Mohd Mohtashim - Founder of Digital Vars"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="text-center lg:text-left pl-4">
                  <h4 className="font-bold text-xl text-gray-900 ">
                    Mohd. Mohtashim Sani
                  </h4>
                  <p className="text-sm text-purple-600 font-medium">
                    Founder & Creative Dir.
                  </p>
                </div>
              </div>

              {/* Owner 2 */}
              <div className="space-y-4">
                <div className="aspect-3/4 w-full rounded-4xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-950 rotate-6 hover:rotate-0 transition-transform duration-500 ease-out">
                  <img
                    src="/faiz_profile.png"
                    alt="Faiz Ali - Founder of Digital Vars"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="text-center lg:text-right pr-4">
                  <h4 className="font-bold text-xl text-gray-900 ">Faiz Ali</h4>
                  <p className="text-sm text-pink-600 font-medium">
                    Founder & Tech Lead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OwnersSection;
