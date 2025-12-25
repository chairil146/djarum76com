import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    details: ["Jl. A. Yani No.76", "Kudus, Jawa Tengah", "Indonesia 59317"],
  },
  {
    icon: Phone,
    title: "Telepon",
    details: ["+62 291 431 761", "+62 291 431 762"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@djarum76.co.id", "cs@djarum76.co.id"],
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    details: ["Senin - Jumat: 08:00 - 17:00", "Sabtu: 08:00 - 12:00"],
  },
];

const ContactSection = () => {
  return (
    <section id="kontak" className="py-20 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Hubungi Kami
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tetap <span className="text-gradient-gold">Terhubung</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami senang mendengar dari Anda. Hubungi tim kami untuk pertanyaan,
            saran, atau kerjasama bisnis.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="group p-6 bg-gradient-card rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                {info.title}
              </h3>
              <div className="space-y-1">
                {info.details.map((detail, index) => (
                  <p key={index} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-secondary/80 via-secondary to-secondary/80 p-8 md:p-12 text-center border border-primary/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--gold)/0.1),transparent_60%)]" />
          <div className="relative z-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ingin Menjalin Kerjasama?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Kami terbuka untuk kerjasama distribusi dan partnership dengan
              mitra bisnis terpercaya di seluruh Indonesia.
            </p>
            <Button variant="gold" size="lg">
              HUBUNGI TIM KAMI
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
