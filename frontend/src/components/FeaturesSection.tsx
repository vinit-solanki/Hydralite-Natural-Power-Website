import { MapPin, Lightbulb, Battery } from "lucide-react";
import bikeDetailLight from "@/assets/bike-detail-light.png";
import bikeDetailPedal from "@/assets/bike-detail-pedal.png";

const features = [
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Locate your bike anytime via the Velovia app. Real-time alerts if it moves unexpectedly."
  },
  {
    icon: Lightbulb,
    title: "Auto Safety Lights",
    description: "Front & rear lights that activate in low light or braking."
  },
  {
    icon: Battery,
    title: "Long-Range Battery",
    description: "Up to 120KM per charge. Lightweight, fast-charging battery system."
  }
];

const FeaturesSection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              BUILT FOR THE<br />
              FUTURE OF RIDING
            </h2>
            
            <p className="text-sm md:text-base text-primary-foreground/70 max-w-md leading-relaxed">
              More than just a ride — Velovia is a movement. Here's the impact we've already made.
            </p>
            
            {/* Bike Detail Images */}
            <div className="flex gap-4 pt-4">
              <div className="w-1/2 aspect-[4/5] overflow-hidden">
                <img 
                  src={bikeDetailLight} 
                  alt="Bike LED headlight detail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 aspect-[4/5] overflow-hidden">
                <img 
                  src={bikeDetailPedal} 
                  alt="Bike pedal and chain detail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right Content - Features */}
          <div className="space-y-0">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="py-8 border-b border-primary-foreground/10 first:pt-0 last:border-b-0"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary-foreground/10 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-display text-xl md:text-2xl tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
