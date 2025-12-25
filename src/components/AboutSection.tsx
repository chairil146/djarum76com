import { Award, Leaf, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Tembakau Pilihan",
    description: "Menggunakan tembakau berkualitas tinggi dari perkebunan terbaik Indonesia.",
  },
  {
    icon: Award,
    title: "Cengkeh Premium",
    description: "Cengkeh pilihan yang memberikan aroma dan cita rasa khas kretek.",
  },
  {
    icon: Clock,
    title: "Tradisi Sejak 1976",
    description: "Warisan resep autentik yang dijaga selama lebih dari 4 dekade.",
  },
  {
    icon: Shield,
    title: "Standar Kualitas",
    description: "Proses produksi dengan standar kualitas dan kebersihan tertinggi.",
  },
];

const AboutSection = () => {
  return (
    <section id="tentang" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Tentang Kami
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              Warisan <span className="text-gradient-gold">Legendaris</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Djarum 76 adalah salah satu merek rokok kretek paling ikonik di
              Indonesia. Dengan sejarah panjang dan dedikasi terhadap kualitas,
              kami terus menghadirkan pengalaman merokok terbaik bagi konsumen
              kami.
            </p>

            <div className="bg-card rounded-xl p-6 border border-border/50 mb-8">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Cerita Kami
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Berawal dari sebuah mimpi untuk menciptakan rokok kretek terbaik
                Indonesia, Djarum 76 lahir pada tahun 1976. Nama "76" sendiri
                diambil dari tahun kelahiran produk ini yang bertepatan dengan
                momen bersejarah bagi bangsa Indonesia.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-card rounded-lg border border-border/30">
                <div className="font-heading text-2xl md:text-3xl font-bold text-primary mb-1">
                  1976
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  Didirikan
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg border border-border/30">
                <div className="font-heading text-2xl md:text-3xl font-bold text-primary mb-1">
                  48+
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  Tahun
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg border border-border/30">
                <div className="font-heading text-2xl md:text-3xl font-bold text-primary mb-1">
                  #1
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  Legendaris
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 bg-gradient-card rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
