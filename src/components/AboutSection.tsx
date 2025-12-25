import { Award, Leaf, Clock, Shield, Users, Target, Heart, Sparkles } from "lucide-react";
import ceoImage from "@/assets/ceo-chairil.jpg";

const features = [
  {
    icon: Leaf,
    title: "Tembakau Pilihan",
    description: "Menggunakan tembakau berkualitas tinggi dari perkebunan terbaik Indonesia yang dipilih secara teliti.",
  },
  {
    icon: Award,
    title: "Cengkeh Premium",
    description: "Cengkeh pilihan dari Maluku yang memberikan aroma dan cita rasa khas kretek Indonesia.",
  },
  {
    icon: Clock,
    title: "Tradisi Sejak 1976",
    description: "Warisan resep autentik yang dijaga selama lebih dari 4 dekade dengan konsistensi kualitas.",
  },
  {
    icon: Shield,
    title: "Standar Kualitas",
    description: "Proses produksi dengan standar kualitas dan kebersihan tertinggi sesuai regulasi.",
  },
];

const values = [
  {
    icon: Target,
    title: "Visi Kami",
    description: "Menjadi merek rokok kretek terdepan yang menghormati tradisi Indonesia sekaligus menghadirkan inovasi untuk generasi mendatang.",
  },
  {
    icon: Heart,
    title: "Misi Kami",
    description: "Menghadirkan pengalaman merokok terbaik dengan mempertahankan kualitas, tradisi, dan nilai-nilai budaya Indonesia dalam setiap batang rokok.",
  },
  {
    icon: Users,
    title: "Komitmen Kami",
    description: "Berkomitmen untuk terus mendukung petani tembakau dan cengkeh lokal, serta berkontribusi pada perekonomian masyarakat Indonesia.",
  },
];

const AboutSection = () => {
  return (
    <section id="tentang" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Tentang Kami
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Warisan <span className="text-gradient-gold">Legendaris</span> Indonesia
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Djarum 76 bukan sekadar rokok - ini adalah simbol kebanggaan, tradisi, dan cita rasa 
            autentik Indonesia yang telah menemani perjalanan bangsa selama hampir lima dekade.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left Content - Story */}
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Cerita <span className="text-primary">Kami</span>
            </h3>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Berawal dari sebuah mimpi untuk menciptakan rokok kretek terbaik Indonesia, 
                <strong className="text-foreground"> Djarum 76</strong> lahir pada tahun 1976. 
                Nama "76" sendiri diambil dari tahun kelahiran produk ini yang bertepatan dengan 
                momen bersejarah bagi bangsa Indonesia - era pembangunan dan kemajuan.
              </p>
              
              <p>
                Perjalanan kami dimulai dari sebuah pabrik kecil di Kudus, Jawa Tengah - kota 
                yang dikenal sebagai pusat industri rokok kretek Indonesia. Dengan dedikasi 
                tinggi dan kecintaan terhadap tradisi, para pendiri kami meracik formula unik 
                yang menggabungkan tembakau pilihan dari Temanggung dan Lombok dengan cengkeh 
                premium dari Kepulauan Maluku.
              </p>
              
              <p>
                Setiap batang Djarum 76 adalah hasil dari proses produksi yang teliti, dimulai 
                dari pemilihan bahan baku hingga pengepakan akhir. Kami percaya bahwa kualitas 
                tidak bisa dikompromikan - inilah prinsip yang telah kami pegang teguh selama 
                lebih dari 48 tahun.
              </p>
              
              <p>
                Kini, Djarum 76 telah menjadi bagian dari kehidupan jutaan masyarakat Indonesia. 
                Dari warung kopi di pedesaan hingga perkotaan metropolitan, aroma khas kretek 
                kami selalu menghadirkan momen kebersamaan dan kehangatan.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
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
                  Tahun Pengalaman
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg border border-border/30">
                <div className="font-heading text-2xl md:text-3xl font-bold text-primary mb-1">
                  #1
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  Kretek Legendaris
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 bg-gradient-card rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision, Mission, Commitment */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center p-8 bg-gradient-card rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-heading text-xl font-bold text-foreground mb-4">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* CEO Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-green/10 rounded-3xl blur-xl" />
          <div className="relative bg-gradient-card rounded-3xl border border-border/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* CEO Image */}
              <div className="relative h-80 lg:h-auto lg:min-h-[500px]">
                <img
                  src={ceoImage}
                  alt="Chairil Ilham - CEO Djarum 76"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-background/20 lg:to-background" />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 lg:hidden">
                  <div className="bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-primary/30">
                    <Sparkles className="w-4 h-4 text-primary inline mr-2" />
                    <span className="text-sm font-medium text-foreground">Visionary Leader</span>
                  </div>
                </div>
              </div>

              {/* CEO Info */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="hidden lg:block mb-4">
                  <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 border border-primary/30">
                    <Sparkles className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm font-medium text-primary">Visionary Leader</span>
                  </div>
                </div>
                
                <span className="text-primary text-sm font-medium tracking-widest uppercase mb-2 block">
                  Chief Executive Officer
                </span>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Chairil <span className="text-gradient-gold">Ilham</span>
                </h3>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    Sebagai CEO Djarum 76, Chairil Ilham membawa visi segar dalam memimpin 
                    perusahaan menuju era baru. Dengan latar belakang yang kuat dalam 
                    manajemen bisnis dan kecintaan mendalam terhadap warisan budaya Indonesia, 
                    beliau berkomitmen untuk menjaga kualitas legendaris Djarum 76.
                  </p>
                  <p>
                    "Djarum 76 bukan hanya tentang rokok, ini tentang menjaga tradisi dan 
                    menghadirkan kebanggaan Indonesia dalam setiap produk yang kami ciptakan. 
                    Kami terus berinovasi sambil tetap menghormati warisan para pendahulu kami."
                  </p>
                </div>

                {/* CEO Quote */}
                <div className="bg-background/50 rounded-xl p-6 border border-primary/20 relative">
                  <div className="absolute -top-3 left-6 text-6xl text-primary/20 font-serif">"</div>
                  <p className="text-foreground italic text-lg leading-relaxed pl-4">
                    Tradisi adalah akar kekuatan kita, inovasi adalah sayap untuk terbang lebih tinggi.
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="w-10 h-0.5 bg-primary mr-3" />
                    <span className="text-sm text-muted-foreground">Chairil Ilham</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
