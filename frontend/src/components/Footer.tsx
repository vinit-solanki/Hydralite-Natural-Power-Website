import { useState } from "react";
import ridersImage from "@/assets/rider-mountain.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-background">
      {/* Main Footer Content */}
      <div className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left - Image */}
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={ridersImage}
                  alt="Two people with electric bikes"
                  className="h-48 w-full object-cover lg:h-56"
                />
              </div>
            </div>

            {/* Center - Content */}
            <div className="lg:col-span-5">
              <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
                ELECTRIC INNOVATION FOR A CLEANER, SMARTER TOMORROW.
              </h2>
              <p className="mb-6 max-w-md text-sm text-muted-foreground">
                At Velovia, we design intelligent electric bicycles that make daily travel cleaner, smarter, and more inspiring.
              </p>
              
              {/* Email Subscribe */}
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                />
                <button className="bg-foreground px-6 py-3 text-sm font-medium uppercase text-background transition-colors hover:bg-foreground/90">
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* Right - Navigation */}
            <div className="flex gap-12 lg:col-span-4 lg:justify-end">
              <nav className="flex flex-col gap-2">
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Our Story</a>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Technology</a>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Sustainability</a>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Blog</a>
              </nav>
              <nav className="flex flex-col gap-2">
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Shop</a>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Find a Dealer</a>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Track Order</a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex gap-6">
              <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Privacy Policy</a>
              <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Terms & Conditions</a>
              <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Cookie Policy</a>
            </div>
            <p className="text-xs text-muted-foreground">© 2025 Velovia. All Rights Reserved.</p>
          </div>
        </div>
      </div>

      {/* Large Brand Text */}
      <div className="overflow-hidden px-6 pb-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-[8rem] font-black uppercase leading-none tracking-tighter text-muted-foreground/30 md:text-[12rem] lg:text-[16rem]">
            VELOVIA
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;