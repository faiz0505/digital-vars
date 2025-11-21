import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 lg:px-12 py-10 " id="hero">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full border border-accent/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">
              Creative Agency Excellence
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-16">
            Big ideas, smart strategies,
            <br className="hidden lg:block" /> and endless creativity to{" "}
            {/* <br className="hidden lg:block" /> */}
            <span className="text-accent">supercharge⚡your brand!</span>
          </h1>

          <p className="text-sm md:text-lg opacity-75 font-medium max-w-xl mx-auto lg:mx-0">
            Your go-to agency for designs that inspire and strategies that
            deliver. We turn ideas into lasting impressions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="gap-2">
              Get Started
              <Zap className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>

        {/* Right Content - Visual Elements */}
        <div className="relative hidden lg:block">
          {/* Gradient Background Blob */}
          <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>

          {/* Floating Cards */}
          <div className="relative space-y-8 text-white">
            {/* Card 1 */}
            <div className="bg-primary p-6 rounded-2xl shadow-lg border transform hover:scale-105 transition-transform duration-300 ml-auto max-w-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <div className="font-semibold">Brand Growth</div>
                  <div className="text-sm opacity-60">+245% increase</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-primary p-6 rounded-2xl shadow-lg border transform hover:scale-105 transition-transform duration-300 max-w-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-pink-500/10 rounded-xl">
                  <Sparkles className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <div className="font-semibold">Creative Solutions</div>
                  <div className="text-sm opacity-60">
                    Unlimited possibilities
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-primary p-6 rounded-2xl shadow-lg border transform hover:scale-105 transition-transform duration-300 ml-auto max-w-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-500/10 rounded-xl">
                  <Zap className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="font-semibold">Fast Delivery</div>
                  <div className="text-sm opacity-60">On-time, every time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
