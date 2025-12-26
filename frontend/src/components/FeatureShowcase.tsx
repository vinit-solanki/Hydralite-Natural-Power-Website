import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bike, Battery, Shield } from "lucide-react";
import aiPhoneImage from "@/assets/phone-on-bike.png";
import batteryImage from "@/assets/bike-detail-light.png";
import safetyImage from "@/assets/bike-detail-pedal.png";

const features = [
  {
    id: 1,
    title: "BOOST YOUR RIDE WITH Hydralite AI.",
    description: "Your bike thinks with you — AI Ride Assist learns your style and makes every ride smoother, faster, smarter.",
    link: "LEARN MORE",
    image: aiPhoneImage,
    cardTitle: "Hydralite AI",
    cardDescription: "AI Ride Assist learns your style and makes every ride smoother, faster, smarter.",
    cardLink: "EXPLORE",
    icon: Bike,
  },
  {
    id: 2,
    title: "POWER THAT GOES THE DISTANCE.",
    description: "120KM range with fast-charging technology. Removable battery packs let you swap and go in seconds.",
    link: "DISCOVER",
    image: batteryImage,
    cardTitle: "Smart Battery",
    cardDescription: "Long-range, fast-charging, removable battery system designed for urban adventures.",
    cardLink: "EXPLORE",
    icon: Battery,
  },
  {
    id: 3,
    title: "RIDE SAFER WITH SMART GEAR.",
    description: "Integrated safety features including smart helmets, LED indicators, and real-time tracking for peace of mind.",
    link: "LEARN MORE",
    image: safetyImage,
    cardTitle: "Safety Tech",
    cardDescription: "Advanced safety systems that keep you protected on every journey.",
    cardLink: "EXPLORE",
    icon: Shield,
  },
];

const FeatureShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeFeature = features[activeIndex];

  return (
    <section
      className="relative min-h-[100vh] bg-secondary"
    >
      <div className="flex min-h-screen items-center px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center lg:col-span-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <h2 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tight text-foreground md:text-5xl">
                    {activeFeature.title}
                  </h2>
                  <p className="mb-8 max-w-sm text-sm text-muted-foreground">
                    {activeFeature.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
                  >
                    {activeFeature.link}
                    <span>↗</span>
                  </a>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicators */}
              <div className="mt-12 flex gap-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 w-8 rounded-full transition-colors duration-300 ${
                      index === activeIndex ? "bg-foreground" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Center Image */}
            <div className="flex items-center justify-center lg:col-span-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="overflow-hidden rounded-lg shadow-2xl"
                >
                  <img
                    src={activeFeature.image}
                    alt={activeFeature.cardTitle}
                    className="h-80 w-64 object-cover md:h-96 md:w-72"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Card */}
            <div className="flex items-center lg:col-span-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
                  className="w-full max-w-sm rounded-lg border border-border bg-card p-6 shadow-lg"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <activeFeature.icon className="h-8 w-8 text-muted-foreground" />
                    <a
                      href="#"
                      className="text-xs font-medium uppercase text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {activeFeature.cardLink} ↗
                    </a>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {activeFeature.cardTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {activeFeature.cardDescription}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;