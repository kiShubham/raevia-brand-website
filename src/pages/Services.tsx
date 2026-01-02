import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import servicesBg from "@/assets/services-bg.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Service Data Interface
interface ServiceItem {
  name: string;
  price1?: string; // e.g., 1 Hand, Mani, Rica, Price
  price2?: string; // e.g., Both Hand, Pedi, Flavoured
}

interface ServiceCategory {
  title: string;
  subtitle?: string; // For "HAND", "FEET", etc.
  headers: string[]; // ["Service", "1 Hand", "Both Hand"]
  items: ServiceItem[];
}

const ServiceTable = ({ category }: { category: ServiceCategory }) => {
  return (
    <div className="mb-12 animate-fade-up">
      <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-6 pl-4 border-l-2 border-accent">
        {category.title}
      </h3>

      {category.subtitle && (
        <h4 className="text-xl font-medium text-accent mb-4 pl-4 uppercase tracking-wider">
          {category.subtitle}
        </h4>
      )}

      <div className="bg-card/30 backdrop-blur-md rounded-lg overflow-hidden border border-border/50 shadow-xl">
        {/* Rows */}
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
};

const Services = () => {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") === "him" ? "him" : "her";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data Definitions
  const nailArtHand: ServiceCategory = {
    title: "Nail Art",
    subtitle: "HAND",
    headers: ["Service", "1 Hand", "Both Hand"],
    items: [
      { name: "Gel Polish", price1: "250/-", price2: "500/-" },
      { name: "Gel Overlay With Gel", price1: "600/-", price2: "1200/-" },
      { name: "Gel Overlay With Acrylic", price1: "500/-", price2: "1000/-" }, // Corrected "Overless" to "Overlay"
      { name: "Acrylic Extension", price1: "700/-", price2: "1400/-" },
      { name: "Gel Extension", price1: "800/-", price2: "1600/-" },
      { name: "Temporary Extension", price1: "500/-", price2: "1000/-" },
    ],
  };

  const nailArtFeet: ServiceCategory = {
    title: "",
    subtitle: "FEET",
    headers: ["Service", "Price"],
    items: [
      { name: "Gel Polish Feet", price1: "500/-" },
      { name: "Temporary Extension", price1: "1000/-" },
      { name: "Acrylic Extension", price1: "1200/-" },
      { name: "Gel Extension", price1: "1500/-" },
      { name: "Gel Polish Remove", price1: "200/-" },
      { name: "Extension Remove", price1: "350/-" },
    ],
  };

  const maniPedi: ServiceCategory = {
    title: "Manicure & Pedicure",
    headers: ["MANI-PEDI", "MANI", "PEDI"],
    items: [
      { name: "Basic Dry", price1: "500/-", price2: "500/-" },
      { name: "Classic", price1: "600/-", price2: "650/-" },
      { name: "Aroma", price1: "800/-", price2: "850/-" },
      { name: "Chocolate", price1: "1000/-", price2: "1200/-" },
      { name: "Ultra Bright", price1: "1200/-", price2: "1500/-" },
      { name: "Tan Clear", price1: "1500/-", price2: "1700/-" },
      { name: "Signature", price1: "1500/-", price2: "2000/-" },
      { name: "Ragaa", price1: "1700/-", price2: "2000/-" },
      { name: "RAEVIA Special", price1: "2000/-", price2: "2500/-" },
      { name: "Heel Peel Treatment", price1: "---", price2: "2000/-" }, // Using --- for empty
    ],
  };

  const waxing: ServiceCategory = {
    title: "Waxing",
    headers: ["Waxing", "RICA", "FLAVOURED"],
    items: [
      { name: "Full Arms", price1: "500/-", price2: "300/-" },
      { name: "Half Legs", price1: "500/-", price2: "350/-" },
      { name: "Full Legs", price1: "800/-", price2: "500/-" },
      { name: "Half Back", price1: "350/-", price2: "200/-" },
      { name: "Half Front", price1: "350/-", price2: "200/-" },
      { name: "Full Back", price1: "600/-", price2: "500/-" },
      { name: "Full Front", price1: "600/-", price2: "500/-" },
      { name: "Stomach", price1: "500/-", price2: "300/-" },
      { name: "Bikini", price1: "2500/-", price2: "---" },
      { name: "Full Body", price1: "2500/-", price2: "2200/-" },
      { name: "Underarms", price1: "150/-", price2: "100/-" },
    ],
  };

  const threading: ServiceCategory = {
    title: "Threading",
    headers: ["Threading", "Price"],
    items: [
      { name: "Eyebrows", price1: "50/-" },
      { name: "Upper / Lower Lip", price1: "30/-" },
      { name: "Forehead", price1: "30/-" },
      { name: "Chin", price1: "30/-" },
      { name: "Side Locks", price1: "60/-" },
      { name: "Jaw Line", price1: "30/-" },
      { name: "Neck", price1: "60/-" },
      { name: "Face", price1: "300/-" },
    ],
  };

  const hairSmoothening: ServiceCategory = {
    title: "Smoothening Treatment",
    headers: ["Length", "Price"],
    items: [
      { name: "Bob", price1: "3000/-" },
      { name: "Shoulder Length", price1: "4000/-" },
      { name: "Medium Length", price1: "5000/-" },
      { name: "Long Length", price1: "7000/- +" },
    ],
  };

  const hairStraightening: ServiceCategory = {
    title: "Straightening / Rebonding",
    headers: ["Length", "Price"],
    items: [
      { name: "Bob", price1: "3000/-" },
      { name: "Shoulder Length", price1: "4000/-" },
      { name: "Medium Length", price1: "5500/-" },
      { name: "Long Length", price1: "7000/- +" },
    ],
  };

  const hairBotoliss: ServiceCategory = {
    title: "Botoliss Treatment",
    subtitle: "(organic + formaldehyde free Treatment)",
    headers: ["Length", "Price"],
    items: [
      { name: "Bob", price1: "3500/-" },
      { name: "Shoulder Length", price1: "5000/-" },
      { name: "Medium Length", price1: "7000/-" },
      { name: "Long Length", price1: "9000/- +" },
    ],
  };

  const mensHairCut: ServiceCategory = {
    title: "Mens Hair Cut",
    headers: ["Service", "Price"],
    items: [
      { name: "Haircut", price1: "200/-" },
      { name: "Senior Citizen", price1: "150/-" },
      { name: "Kids Haircut", price1: "150/-" },
      { name: "Hair Styling", price1: "100/-" },
      { name: "Advance Haircut", price1: "300/-" },
    ],
  };

  const mensHairWash: ServiceCategory = {
    title: "Mens Hairwash",
    headers: ["Service", "Price"],
    items: [
      { name: "Hair wash", price1: "100/-" },
      { name: "Dandruff wash", price1: "150/-" },
      { name: "Deep Conditioning", price1: "200/-" },
      { name: "Organic Shampoo wash", price1: "200/-" },
    ],
  };

  const beard: ServiceCategory = {
    title: "Beard",
    headers: ["Service", "Price"],
    items: [
      { name: "Clean Shave", price1: "100/-" },
      { name: "Beard Shape", price1: "150/-" },
    ],
  };

  const mensHairColor: ServiceCategory = {
    title: "Mens Hair Color",
    headers: ["Service", "Price"],
    items: [
      { name: "Global Color (amonia)", price1: "700/-" },
      { name: "Global Color (amonia Free)", price1: "800/-" },
      { name: "Beard Color", price1: "300/-" },
      { name: "Highlight (per strip)", price1: "150/-" },
      { name: "Crazy Color Highlight (per strip)", price1: "250/-" },
    ],
  };

  const facial: ServiceCategory = {
    title: "Facial",
    headers: ["Service", "Price"],
    items: [
      { name: "Fruit", price1: "800/-" },
      { name: "Tan Clear", price1: "1000/-" },
      { name: "Ragaa", price1: "1200/-" },
      { name: "Aroma", price1: "1500/-" },
      { name: "Oil Control", price1: "1500/-" },
      { name: "O3+ whitening", price1: "2500/-" },
      { name: "Hydra (basic)", price1: "2500/-" },
      { name: "Hydra Gold", price1: "3000/-" },
      { name: "Hydra Korean Glow", price1: "4000/-" },
      { name: "Bridal Facial", price1: "5000/-" },
    ],
  };

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
        <Tabs defaultValue={activeTab} className="w-full max-w-5xl mx-auto">
          <TabsList className="w-full flex justify-center bg-transparent mb-16 gap-8">
            <TabsTrigger
              value="her"
              className="text-2xl md:text-3xl font-serif data-[state=active]:text-accent data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none pb-2 transition-all opacity-60 data-[state=active]:opacity-100"
            >
              For Her
            </TabsTrigger>
            <TabsTrigger
              value="him"
              className="text-2xl md:text-3xl font-serif data-[state=active]:text-accent data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none pb-2 transition-all opacity-60 data-[state=active]:opacity-100"
            >
              For Him
            </TabsTrigger>
          </TabsList>

          <TabsContent value="her" className="animate-fade-up">
            {/* Render all tables */}
            <ServiceTable category={nailArtHand} />
            <div className="-mt-8">
              <ServiceTable category={nailArtFeet} />
            </div>

            <div className="my-16 h-px w-full bg-border/30"></div>

            <ServiceTable category={maniPedi} />

            <div className="my-16 h-px w-full bg-border/30"></div>

            <ServiceTable category={waxing} />

            <div className="my-16 h-px w-full bg-border/30"></div>

            <ServiceTable category={threading} />

            <div className="my-16 h-px w-full bg-border/30"></div>

            <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-12 text-center">
              Hair Treatments
            </h3>
            <ServiceTable category={hairSmoothening} />
            <ServiceTable category={hairStraightening} />
            <ServiceTable category={hairBotoliss} />

            <div className="my-16 h-px w-full bg-border/30"></div>
            <ServiceTable category={facial} />
          </TabsContent>

          <TabsContent value="him" className="animate-fade-up">
            <ServiceTable category={mensHairCut} />
            <div className="my-16 h-px w-full bg-border/30"></div>
            <ServiceTable category={mensHairWash} />
            <div className="my-16 h-px w-full bg-border/30"></div>
            <ServiceTable category={beard} />
            <div className="my-16 h-px w-full bg-border/30"></div>
            <ServiceTable category={mensHairColor} />
            <div className="my-16 h-px w-full bg-border/30"></div>
            <ServiceTable category={facial} />
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
