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
import HeroSectionImg from "@/assets/hero_section.png";

const Index = () => {
  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background watermark */}
        <div className="absolute bottom-0 right-0 text-[20vw] font-display text-foreground/[0.08] leading-none tracking-tight pointer-events-none select-none overflow-hidden whitespace-nowrap">
          Hydralite
        </div>
        
        <Header />
        
        <div className="relative px-8 md:px-12 pt-8 md:pt-8 min-h-[calc(100vh-88px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Content */}
            <div className="space-y-4 z-10">
              <h1 className="text-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
                RE-DEFINING WELLNESS & SAFETY WITH GREEN TECH.
              </h1>
              <div className="flex flex-row gap-5">
              <p className="text-body text-sm md:text-base text-muted-foreground max-w-md leading-relaxed text-justify">
                We design sustainable, science-backed innovations that improve everyday life. From healthcare safety to energy independence, Hydralite builds future-ready solutions that  are accessible, reliable, and made for India.
              </p>
              <div className="flex items-end justify-end">
              <button className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 text-xs tracking-widest font-medium hover:bg-accent transition-colors">
                EXPLORE SOLUTIONS
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              </div>
              </div>
            </div>
            
            {/* Right Content - Stats */}
            <div className="hidden lg:flex flex-col items-end gap-4 z-10">
              <div className="text-right">
                <div className="text-display text-5xl md:text-6xl text-foreground">250K+</div>
                <div className="text-xs tracking-widest text-muted-foreground font-medium">
                  INNOVATING FOR MILLIONS OF LIVES
                </div>
              </div>
              
              {/* Circular rotating text */}
              <div className="mt-8">
                <CircularText text="• VIDEO • LET'S SEE THE PRODUCT • " />
              </div>
            </div>
          </div>
          <img src={HeroSectionImg} alt="" />
        
          
          {/* Mobile Stats */}
          <div className="lg:hidden flex items-center justify-between mt-8 relative z-10">
            <div>
              <div className="text-xs tracking-widest text-muted-foreground font-medium">
                INNOVATING FOR MILLIONS OF LIVES
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
