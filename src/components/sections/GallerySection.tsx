import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import salonInterior1 from "@/assets/salon-interior-1.jpg";
import salonInterior2 from "@/assets/salon-interior-2.jpg";
import salonExterior from "@/assets/Studio3.jpeg";
import studioImg from "@/assets/Studio.jpeg";
import studio2Img from "@/assets/Studio2.jpeg";
import stylistImg from "@/assets/stylist.png";

interface GalleryItem {
  id: number;
  aspect: string;
  colSpan: string;
  image: string;
  alt: string;
  imageClassName?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    aspect: "aspect-[3/4]",
    colSpan: "md:col-span-1",
    image: salonInterior1,
    alt: "Private treatment room with elegant lighting",
  },
  {
    id: 2,
    aspect: "aspect-square",
    colSpan: "md:col-span-1",
    image: salonInterior2,
    alt: "Premium styling station with marble details",
  },
  {
    id: 3,
    aspect: "aspect-[3/4]",
    colSpan: "md:col-span-1",
    image: studioImg,
    alt: "Our Ranges of Nail Polish",
  }, {
    id: 4,
    aspect: "aspect-[4/5]",
    colSpan: "md:col-span-1",
    image: salonExterior,
    alt: "Raevia Studio storefront.",
  },
  {
    id: 5,
    aspect: "aspect-square",
    colSpan: "md:col-span-1",
    image: studio2Img,
    alt: "Grooming station with gold accents",
  },
  {
    id: 6,
    aspect: "aspect-[4/5]",
    colSpan: "md:col-span-1",
    image: stylistImg,
    alt: "Grooming station with gold accents",
  },
];

const GalleryItemCard = ({ item, index }: { item: GalleryItem; index: number }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden transition-all duration-700 ease-luxury outline-1 outline-offset-1 outline-amber-400/50",
        item.colSpan,
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={cn("relative overflow-hidden", item.aspect)}>
        <img
          src={item.image}
          alt={item.alt}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
            item.imageClassName
          )}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="text-xs tracking-[0.2em] uppercase text-foreground">
            View
          </span>
        </div>

        {/* Border frame */}
        <div className="absolute inset-2 border border-foreground/0 group-hover:border-foreground/10 transition-colors duration-500" />
      </div>
    </div>
  );
};

const GallerySection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="relative py-32 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-20 transition-all duration-1000 ease-luxury",
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          )}
        >
          <span className="text-xs tracking-[0.35em] uppercase text-accent mb-4 block">
            Our Space
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light">
            The <span className="italic">ambience</span>
          </h2>
        </div>

        {/* Mobile Gallery Grid (Single Column) */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {galleryItems.map((item, index) => (
            <GalleryItemCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Desktop Gallery Grid (3 Columns Masonry) */}
        <div className="hidden md:flex gap-6">
          {/* Column 1 */}
          <div className="flex-1 flex flex-col gap-6">
            <GalleryItemCard item={galleryItems[0]} index={0} />
            <GalleryItemCard item={galleryItems[3]} index={3} />
          </div>

          {/* Column 2 - No Gap */}
          <div className="flex-1 flex flex-col gap-6">
            <GalleryItemCard item={galleryItems[1]} index={1} />
            <GalleryItemCard item={galleryItems[4]} index={4} />
          </div>

          {/* Column 3 */}
          <div className="flex-1 flex flex-col gap-6">
            <GalleryItemCard item={galleryItems[2]} index={2} />
            <GalleryItemCard item={galleryItems[5]} index={5} />
          </div>
        </div>

        {/* View more link */}
        {/* <div className="text-center mt-12">
          <button className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors duration-300 inline-flex items-center gap-3">
            <span>View Gallery</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default GallerySection;
