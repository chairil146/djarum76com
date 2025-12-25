const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <span className="font-heading text-xl font-bold text-primary tracking-wider">
              DJARUM 76
            </span>
            <p className="text-muted-foreground text-sm mt-2">
              © {currentYear} PT Djarum. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Kebijakan Privasi
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Syarat & Ketentuan
            </a>
          </div>

          {/* Age Warning */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-destructive/10 px-4 py-2 rounded-full border border-destructive/20">
            <span className="font-bold text-destructive">18+</span>
            <span>Hanya untuk usia 18 tahun ke atas</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            Peringatan: Merokok dapat menyebabkan kanker, serangan jantung,
            impotensi, dan gangguan kehamilan dan janin. Produk ini mengandung
            nikotin yang dapat menyebabkan kecanduan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
