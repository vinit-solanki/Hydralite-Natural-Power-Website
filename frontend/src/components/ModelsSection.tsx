import { ArrowUpRight } from "lucide-react";
import riderMountain from "@/assets/rider-mountain.png";
import bikeUrban from "@/assets/bike-urban.png";
import riderSport from "@/assets/rider-sport.png";

const models = [
  {
    name: "TRAILRIDER PRO",
    image: riderMountain,
    description: "Different rides, same innovation. Choose a Velovia model designed for how — and where — you move."
  },
  {
    name: "URBAN GLIDE",
    image: bikeUrban,
    description: "Lightweight. Silent motor. Built for daily commutes and effortless motion in urban streets."
  },
  {
    name: "SPORT SPRINT",
    image: riderSport,
    description: "Engineered for acceleration, agility, and endurance. Perfect for fitness riders and long-road speed."
  }
];

const ModelsSection = () => {
  return (
    <section className="bg-background py-20 px-8 md:px-16 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-foreground">
            ONE BRAND.<br />
            MULTIPLE RIDING STYLES.
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Different rides, same innovation. Choose a Velovia model designed for how — and where — you move.
          </p>
        </div>
        
        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div key={index} className="space-y-4">
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden relative group">
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Model Name Overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-display text-xl md:text-2xl text-primary-foreground drop-shadow-lg">
                    {model.name}
                  </h3>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {model.description}
              </p>
              
              {/* Link */}
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-xs tracking-widest font-medium text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
              >
                EXPLORE MORE
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
