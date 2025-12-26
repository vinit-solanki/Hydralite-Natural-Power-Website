import { ArrowUpRight } from "lucide-react";

interface NavProps {
  className?: string;
}

const Header = ({ className }: NavProps) => {
  return (
    <header className={`w-full py-6 px-8 flex items-center justify-between ${className}`}>
      <div className="text-display text-2xl tracking-wider text-foreground">
        VELOVIA
      </div>
      
      <nav className="hidden md:flex items-center gap-1">
        <div className="flex items-center bg-primary text-primary-foreground">
          <a href="#" className="px-5 py-3 text-xs tracking-widest font-medium hover:bg-accent transition-colors">
            HOME
          </a>
          <a href="#" className="px-5 py-3 text-xs tracking-widest font-medium hover:bg-accent transition-colors">
            ABOUT
          </a>
          <a href="#" className="px-5 py-3 text-xs tracking-widest font-medium hover:bg-accent transition-colors">
            PRODUCT
          </a>
          <a href="#" className="px-5 py-3 text-xs tracking-widest font-medium hover:bg-accent transition-colors">
            FEATURE
          </a>
        </div>
        <a 
          href="#" 
          className="ml-2 px-5 py-3 text-xs tracking-widest font-medium border border-primary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          CONTACT
        </a>
      </nav>

      <button className="md:hidden text-foreground">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
