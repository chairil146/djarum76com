import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-cigarette.jpg";

const HeroSection = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Djarum 76 Rokok Kretek Indonesia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Smoke Effects */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-foreground/5 rounded-full blur-3xl animate-smoke" />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-foreground/3 rounded-full blur-2xl animate-smoke delay-200" />
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-foreground/4 rounded-full blur-3xl animate-smoke delay-400" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
            <span className="text-sm font-medium text-primary tracking-wide">
              Rokok Kretek Legendaris Indonesia
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-up delay-100">
            <span className="text-foreground">DJARUM</span>
            <br />
            <span className="text-gradient-gold">76</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-up delay-200">
            Warisan cita rasa autentik Indonesia sejak 1976. Dibuat dengan
            tembakau pilihan dan cengkeh berkualitas tinggi untuk pengalaman
            merokok yang tak terlupakan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Button variant="hero" asChild>
              <a href="#produk">JELAJAHI PRODUK</a>
            </Button>
            <Button variant="hero-outline" asChild>
              <a href="#tentang">TENTANG KAMI</a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-fade-up delay-500">
            <a
              href="#produk"
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-xs tracking-widest uppercase">
                Gulir ke Bawah
              </span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
