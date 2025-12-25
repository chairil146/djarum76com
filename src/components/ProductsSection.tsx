import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    id: 1,
    name: "Djarum 76 Original",
    count: "12 Batang",
    description:
      "Rokok kretek klasik dengan cita rasa otentik yang telah menjadi legenda.",
    image: product1,
  },
  {
    id: 2,
    name: "Djarum 76 Kretek",
    count: "12 Batang",
    description:
      "Perpaduan sempurna tembakau pilihan dan cengkeh berkualitas tinggi.",
    image: product2,
  },
  {
    id: 3,
    name: "Djarum 76 Premium",
    count: "16 Batang",
    description:
      "Varian premium dengan pengalaman merokok yang lebih halus dan elegan.",
    image: product3,
  },
];

const ProductsSection = () => {
  return (
    <section id="produk" className="py-20 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Produk Kami
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Koleksi Produk
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan berbagai varian rokok Djarum 76 yang dibuat dengan standar
            kualitas tertinggi untuk kepuasan Anda.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-gradient-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-muted/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  {product.count}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
