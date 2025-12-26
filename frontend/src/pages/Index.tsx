import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import CircularText from "@/components/CircularText";
import FeaturesSection from "@/components/FeaturesSection";
import AISection from "@/components/AISection";
import CommunitySection from "@/components/CommunitySection";
import ModelsSection from "@/components/ModelsSection";
import electricBike from "@/assets/electric-bike.png";
import FeatureShowcase from "@/components/FeatureShowcase";
import ByTheNumbers from "@/components/ByTheNumbers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background watermark */}
        <div className="absolute bottom-0 left-0 right-0 text-[20vw] font-display text-foreground/[0.03] leading-none tracking-tight pointer-events-none select-none overflow-hidden whitespace-nowrap">
          VELOVIA
        </div>
        
        <Header />
        
        <div className="relative px-8 md:px-16 pt-8 md:pt-16 min-h-[calc(100vh-88px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <h1 className="text-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-foreground">
                ELECTRIC PRECISION.<br />
                URBAN FREEDOM.
              </h1>
              
              <p className="text-body text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
                A high-performance electric bicycle designed for city life and beyond. Smart motor assist, seamless design, GPS tracking, and up to 120 km range—all in one minimalist frame.
              </p>
              
              <button className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 text-xs tracking-widest font-medium hover:bg-accent transition-colors">
                VIEW PRODUCT
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
            
            {/* Right Content - Stats */}
            <div className="hidden lg:flex flex-col items-end gap-4 z-10">
              <div className="text-right">
                <div className="text-display text-5xl md:text-6xl text-foreground">250K+</div>
                <div className="text-xs tracking-widest text-muted-foreground font-medium">
                  RIDERS<br />WORLDWIDE
                </div>
              </div>
              
              {/* Circular rotating text */}
              <div className="mt-8">
                <CircularText text="• VIDEO • LET'S SEE THE PRODUCT • " />
              </div>
            </div>
          </div>
          
          {/* Bike Image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/3 w-[90%] lg:w-[70%] max-w-[1000px]">
            <img 
              src={electricBike} 
              alt="Velovia Electric Bicycle" 
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Mobile Stats */}
          <div className="lg:hidden flex items-center justify-between mt-8 relative z-10">
            <div>
              <div className="text-display text-4xl text-foreground">250K+</div>
              <div className="text-xs tracking-widest text-muted-foreground font-medium">
                RIDERS WORLDWIDE
              </div>
            </div>
            <CircularText text="• VIDEO • LET'S SEE THE PRODUCT • " />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* AI Section */}
      <AISection />
      
      {/* Community Section */}
      <CommunitySection />
      
      {/* Models Section */}
      <ModelsSection />
      <FeatureShowcase />
      <ByTheNumbers />
      <Footer />
    </div>
  );
};

export default Index;
