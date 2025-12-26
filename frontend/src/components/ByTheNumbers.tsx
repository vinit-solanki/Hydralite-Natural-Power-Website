import ridersImage from "@/assets/rider-mountain.png";

const ByTheNumbers = () => {
  return (
    <section className="min-h-screen bg-background px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
                BY THE NUMBERS
              </h2>
              <p className="max-w-sm text-sm text-muted-foreground">
                More than just a ride — Hydralite is a movement. Here's the impact we've already made.
              </p>
            </div>
            
            {/* Stats Cards */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="rounded-sm border border-border bg-card p-6">
                <div className="mb-3 text-4xl font-bold text-foreground md:text-5xl">
                  200K+
                </div>
                <div className="mb-2 text-sm font-medium text-foreground">
                  Riders Worldwide
                </div>
                <p className="text-xs text-muted-foreground">
                  Worldwide Joined the Hydralite electric movement
                </p>
              </div>
              
              <div className="rounded-sm border border-border bg-card p-6">
                <div className="mb-3 text-4xl font-bold text-foreground md:text-5xl">
                  120KM
                </div>
                <div className="mb-2 text-sm font-medium text-foreground">
                  Long-Range Battery
                </div>
                <p className="text-xs text-muted-foreground">
                  Removable, lightweight, fast-charging.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="overflow-hidden rounded-lg">
              <img
                src={ridersImage}
                alt="Two people riding electric bikes"
                className="h-auto w-full max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ByTheNumbers;