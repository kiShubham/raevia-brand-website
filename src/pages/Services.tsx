import { useEffect, useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import servicesBg from "@/assets/services-bg.png";
import { cn } from "@/lib/utils";
import salonInterior1 from "@/assets/salon-interior-1.jpg";
import salonInterior2 from "@/assets/salon-interior-2.jpg";
import salonExterior from "@/assets/salon-exterior.jpg";
import bride1 from "@/assets/Bride1.JPG";
import bride2 from "@/assets/Bride2.JPG";
import maleHairstyle from "@/assets/Male Hairstyle.JPG";

// Service Data Interface
interface ServiceItem {
  name: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  image: string;
  items: ServiceItem[];
}

// Category Card Component
const CategoryCard = ({
  category,
  isSelected,
  onClick,
}: {
  category: ServiceCategory;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "relative group overflow-hidden rounded-lg transition-all duration-300 aspect-square",
      "hover:shadow-2xl hover:scale-105 cursor-pointer",
      isSelected ? "ring-2 ring-accent scale-105" : "ring-1 ring-border/30"
    )}
  >
    <img
      src={category.image}
      alt={category.title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent flex items-end p-4">
      <div className="w-full">
        <h3 className="text-lg md:text-xl font-serif text-foreground font-bold">
          {category.title}
        </h3>
      </div>
    </div>
  </button>
);

// Service List Component
const ServiceList = ({ category }: { category: ServiceCategory }) => (
  <div className="animate-fade-up">
    <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-6 pl-4 border-l-2 border-accent">
      {category.title}
    </h3>

    <div className="bg-card/30 backdrop-blur-md rounded-lg overflow-hidden border border-border/50 shadow-xl">
      <div className="divide-y divide-border/30">
        {category.items.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "p-4 md:p-6 hover:bg-white/5 transition-colors duration-300",
              idx % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
            )}
          >
            <div className="font-medium text-foreground/90">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("nails");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Service Categories with Images
  const categories: ServiceCategory[] = [
    {
      id: "nails",
      title: "Nails",
      image: salonInterior1,
      items: [
        { name: "Gel Polish" },
        { name: "Gel Overlay With Gel" },
        { name: "Gel Overlay With Acrylic" },
        { name: "Acrylic Extension" },
        { name: "Gel Extension" },
        { name: "Temporary Extension" },
        { name: "Gel Polish Feet" },
        { name: "Temporary Extension Feet" },
        { name: "Acrylic Extension Feet" },
        { name: "Gel Extension Feet" },
        { name: "Gel Polish Remove" },
        { name: "Extension Remove" },
        { name: "Manicure & Pedicure - Basic Dry" },
        { name: "Manicure & Pedicure - Classic" },
        { name: "Manicure & Pedicure - Aroma" },
        { name: "Manicure & Pedicure - Chocolate" },
        { name: "Manicure & Pedicure - Ultra Bright" },
        { name: "Manicure & Pedicure - Tan Clear" },
        { name: "Manicure & Pedicure - Signature" },
        { name: "Manicure & Pedicure - Ragaa" },
        { name: "Manicure & Pedicure - RAEVIA Special" },
        { name: "Heel Peel Treatment" },
      ],
    },
    {
      id: "waxing-threading",
      title: "Waxing & Threading",
      image: salonExterior,
      items: [
        { name: "Waxing - Full Arms" },
        { name: "Waxing - Half Legs" },
        { name: "Waxing - Full Legs" },
        { name: "Waxing - Half Back" },
        { name: "Waxing - Half Front" },
        { name: "Waxing - Full Back" },
        { name: "Waxing - Full Front" },
        { name: "Waxing - Stomach" },
        { name: "Waxing - Bikini" },
        { name: "Waxing - Full Body" },
        { name: "Waxing - Underarms" },
        { name: "Threading - Eyebrows" },
        { name: "Threading - Upper / Lower Lip" },
        { name: "Threading - Forehead" },
        { name: "Threading - Chin" },
        { name: "Threading - Side Locks" },
        { name: "Threading - Jaw Line" },
        { name: "Threading - Neck" },
        { name: "Threading - Face" },
      ],
    },
    {
      id: "women-hair",
      title: "Women Hair",
      image: bride2,
      items: [
        { name: "Smoothening Treatment - Bob" },
        { name: "Smoothening Treatment - Shoulder Length" },
        { name: "Smoothening Treatment - Medium Length" },
        { name: "Smoothening Treatment - Long Length" },
        { name: "Straightening / Rebonding - Bob" },
        { name: "Straightening / Rebonding - Shoulder Length" },
        { name: "Straightening / Rebonding - Medium Length" },
        { name: "Straightening / Rebonding - Long Length" },
        { name: "Botoliss Treatment - Bob" },
        { name: "Botoliss Treatment - Shoulder Length" },
        { name: "Botoliss Treatment - Medium Length" },
        { name: "Botoliss Treatment - Long Length" },
        { name: "Hair Treatments - Keratin" },
        { name: "Hair Treatments - Botox" },
        { name: "Hair Treatments - Nanoplastia" },
        { name: "Hair Treatments - Dandruff Treatment" },
        { name: "Hair Treatments - Hairfall Treatment" },
      ],
    },
    {
      id: "facial",
      title: "Facial",
      image: bride1,
      items: [
        { name: "Fruit Facial" },
        { name: "Tan Clear Facial" },
        { name: "Ragaa Facial" },
        { name: "Aroma Facial" },
        { name: "Oil Control Facial" },
        { name: "O3+ Whitening Facial" },
        { name: "Hydra (Basic) Facial" },
        { name: "Hydra Gold Facial" },
        { name: "Hydra Korean Glow Facial" },
        { name: "Bridal Facial" },
      ],
    },
    {
      id: "groom",
      title: "Groom",
      image: maleHairstyle,
      items: [
        { name: "Groom Makeup & Hair Setting" },
        { name: "Groom Facial" },
        { name: "Threading & Massage" },
        { name: "Face Peel Off Waxing" },
        { name: "Back Massage" },
        { name: "Hand Massage" },
        { name: "Foot Massage" },
      ],
    },
    {
      id: "men-hair",
      title: "Men Hair",
      image: salonInterior2,
      items: [
        { name: "Men's Haircut" },
        { name: "Senior Citizen Haircut" },
        { name: "Kids Haircut" },
        { name: "Hair Styling" },
        { name: "Advance Haircut" },
        { name: "Hair Wash" },
        { name: "Dandruff Wash" },
        { name: "Deep Conditioning" },
        { name: "Organic Shampoo Wash" },
        { name: "Clean Shave" },
        { name: "Beard Shape" },
        { name: "Men's Hair Color - Global Color (Ammonia)" },
        { name: "Men's Hair Color - Global Color (Ammonia Free)" },
        { name: "Men's Hair Color - Beard Color" },
        { name: "Men's Hair Color - Highlight (Per Strip)" },
        { name: "Men's Hair Color - Crazy Color Highlight (Per Strip)" },
        { name: "Hair Treatments - Dandruff Treatment" },
        { name: "Hair Treatments - Hairfall Treatment" },
        {
          name: "Hair Treatments - Oil Head Massage (Normal Oil - Coconut Oil)",
        },
        { name: "Hair Treatments - Oil Head Massage (Argan Oil)" },
        { name: "Hair Treatments - Oil Head Massage (Moroccan Oil)" },
        { name: "Hair Treatments - Keratin" },
        { name: "Hair Treatments - Botox" },
        { name: "Hair Treatments - Nanoplastia" },
        { name: "Hair Treatments - Smoothening Treatment" },
        { name: "Hair Treatments - Straightening / Rebonding" },
        { name: "Hair Treatments - Botoliss Treatment" },
        { name: "Styling & Spa - Temporary Styling & Blowdry" },
        { name: "Styling & Spa - Ironing" },
        { name: "Styling & Spa - Tongs / Relaxing Spa" },
        { name: "Styling & Spa - Detox Spa" },
        { name: "Styling & Spa - Protein Spa" },
        {
          name: "Styling & Spa - Bond Repair Treatment (Olaplex & Fibre Plex)",
        },
        { name: "Styling & Spa - Moroccan Oil Spa" },
        { name: "Styling & Spa - Shea Butter Spa" },
        { name: "D-Tan Face" },
        { name: "D-Tan Neck" },
        { name: "Fruit Facial" },
        { name: "Tan Clear Facial" },
        { name: "Ragaa Facial" },
        { name: "Aroma Facial" },
        { name: "Oil Control Facial" },
        { name: "O3+ Whitening Facial" },
        { name: "Hydra (Basic) Facial" },
        { name: "Hydra Gold Facial" },
        { name: "Hydra Korean Glow Facial" },
        { name: "Clean-up - Fruit" },
        { name: "Clean-up - Charcoal" },
        { name: "Clean-up - Ragaa" },
        { name: "Clean-up - Brightening" },
        { name: "Clean-up - Korean Glow" },
        { name: "Clean-up - O3+" },
        { name: "Clean-up - Hydra" },
        { name: "Clean-up - Aroma" },
      ],
    },
  ];

  const selectedCategoryData = categories.find(
    (c) => c.id === selectedCategory
  );

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transform scale-105 animate-reveal"
          style={{ backgroundImage: `url(${servicesBg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>

        <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-up">
          <span className="font-serif italic inline-block px-4 py-1.5 mb-6 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm text-accent text-sm md:text-base tracking-widest uppercase">
            Strictly Professional
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground mb-6 tracking-tight">
            Our Services
          </h1>
          <div className="divider-gold my-8 opacity-60"></div>
          <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto font-light leading-relaxed">
            Meticulously curated treatments designed to rejuvenate, refine, and
            reveal your natural radiance.
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Category Cards Grid */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8 text-center">
              Select a Service Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  isSelected={selectedCategory === category.id}
                  onClick={() => setSelectedCategory(category.id)}
                />
              ))}
            </div>
          </div>

          {/* Selected Category Services */}
          <div className="mt-20 border-t border-border/30 pt-12">
            {selectedCategoryData && (
              <ServiceList category={selectedCategoryData} />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
