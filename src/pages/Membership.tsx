import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import studioImg from "@/assets/Studio.jpeg";

const Membership = () => {
    const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
    const { ref: clubRef, isVisible: clubVisible } = useScrollReveal();
    const { ref: packagesRef, isVisible: packagesVisible } = useScrollReveal();

    const benefits = [
        "Flat 20% off on all service",
        "Get Flat 5% Loyalty Points On Products",
        "200 Loyalty Points",
        "Add On 4 Members",
        "Validity-1 year",
    ];

    const packages = [
        { pay: 7500, add: 2250, get: 9750, validity: "2 Weeks", benefit: "30%" },
        { pay: 10000, add: 3000, get: 13000, validity: "2 Months", benefit: "30%" },
        { pay: 15000, add: 6000, get: 21000, validity: "3 Months", benefit: "40%" },
        { pay: 20000, add: 8000, get: 28000, validity: "5 Months", benefit: "40%" },
        { pay: 30000, add: 15000, get: 45000, validity: "8 Months", benefit: "50%" },
        { pay: 40000, add: 20000, get: 60000, validity: "10 Months", benefit: "50%" },
        { pay: 50000, add: 30000, get: 80000, validity: "12 Months", benefit: "60%" },
        { pay: 75000, add: 45000, get: 120000, validity: "12 Months", benefit: "60%" },
        { pay: 100000, add: 70000, get: 170000, validity: "18 Months", benefit: "70%" },
    ];

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={studioImg}
                        alt="Raevia Studio"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
                </div>

                <div
                    ref={heroRef}
                    className={cn(
                        "relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ease-luxury",
                        heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    )}
                >
                    <span className="text-xs tracking-[0.35em] uppercase text-accent mb-4 block">
                        Exclusive Access
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-light mb-6">
                        Membership & <span className="italic">Packages</span>
                    </h1>
                    <p className="text-muted-foreground text-sm tracking-wide max-w-2xl mx-auto">
                        Because you deserve the best. Elevate your experience with our exclusive membership tiers and curated packages.
                    </p>
                </div>
            </section>

            {/* Luxe Club Membership */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div
                        ref={clubRef}
                        className={cn(
                            "grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-secondary/30 p-8 md:p-12 rounded-sm border border-border/40 transition-all duration-1000 ease-luxury",
                            clubVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        )}
                    >
                        {/* Branding Column */}
                        <div className="text-center md:text-left space-y-6">
                            <div className="flex flex-col items-center md:items-start">
                                <h2 className="text-4xl font-serif tracking-tight">RAEVIA</h2>
                                <span className="text-xs tracking-[0.5em] uppercase text-muted-foreground mt-1 block border-t border-accent/30 pt-2 w-full max-w-[120px]">
                                    Studio
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed pt-4">
                                Shop no-fg-90, R Gallaria Runwal garden Dombivali (E)
                            </p>
                            <div className="pt-8">
                                <h3 className="text-2xl font-serif italic mb-2">The Luxe Club</h3>
                                <p className="text-4xl font-light text-accent">₹500<span className="text-base text-muted-foreground font-sans">/year</span></p>
                            </div>
                        </div>

                        {/* Benefits Column */}
                        <div className="border-l-0 md:border-l border-border/40 md:pl-12 space-y-5">
                            <h3 className="text-xl font-serif mb-6 text-center md:text-left">Membership Benefits</h3>
                            <ul className="space-y-4">
                                {benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm tracking-wide">
                                        <span className="text-accent mt-0.5">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="2" y="2" width="20" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                                <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Table */}
            <section className="py-16 px-4 md:px-6 bg-secondary/10">
                <div className="max-w-6xl mx-auto">
                    <div
                        ref={packagesRef}
                        className={cn(
                            "text-center mb-16 transition-all duration-1000 ease-luxury",
                            packagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        )}
                    >
                        <span className="text-xs tracking-[0.35em] uppercase text-accent mb-4 block">
                            Value for Money
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">
                            Our <span className="italic">Packages</span>
                        </h2>
                        <p className="text-muted-foreground text-sm">Beacuse you deserve the best</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="border-b border-border/40">
                                    <th className="py-6 px-4 font-serif font-normal text-lg text-center">YOU PAY</th>
                                    <th className="py-6 px-4 font-serif font-normal text-lg text-center border-l border-border/10">WE ADD</th>
                                    <th className="py-6 px-4 font-serif font-normal text-lg text-center border-l border-border/10 bg-accent/5">YOU GET</th>
                                    <th className="py-6 px-4 font-serif font-normal text-lg text-center border-l border-border/10">VALIDITY</th>
                                    <th className="py-6 px-4 font-serif font-normal text-lg text-center border-l border-border/10">BENEFITS</th>
                                </tr>
                            </thead>
                            <tbody className="font-light">
                                {packages.map((pkg, idx) => (
                                    <tr
                                        key={idx}
                                        className={cn(
                                            "transition-colors duration-300 hover:bg-white/5",
                                            idx % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                                        )}
                                    >
                                        <td className="py-5 px-4 text-center font-medium">₹{pkg.pay}/-</td>
                                        <td className="py-5 px-4 text-center text-accent border-l border-border/10">₹{pkg.add}/-</td>
                                        <td className="py-5 px-4 text-center font-medium border-l border-border/10 bg-accent/5 text-lg">₹{pkg.get}/-</td>
                                        <td className="py-5 px-4 text-center text-muted-foreground border-l border-border/10">{pkg.validity}</td>
                                        <td className="py-5 px-4 text-center border-l border-border/10">{pkg.benefit} More</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-16 text-center space-y-2 border-t border-border/20 pt-12">
                        <h4 className="text-xl font-serif">AJAY KADAM <span className="text-sm text-muted-foreground font-sans uppercase tracking-widest ml-2">( Founder )</span></h4>
                        <p className="text-sm font-medium tracking-wide">@raevia_studio</p>
                        <p className="text-lg font-serif mt-4 tracking-wider">9594152241 / 9594325950</p>

                        <div className="mt-8 text-[10px] uppercase tracking-widest text-muted-foreground/60 max-w-2xl mx-auto space-y-1">
                            <p>* Membership benefits cannot be clubbed with any other offers or benefits.</p>
                            <p>* RAEVIA STUDIO reserves the right of admission.</p>
                            <p>* The membership is non-refundable & non-transferable.</p>
                            <p>* All RAEVIA STUDIO Loyalty Points will have a validity of 45 days from the date of credit.</p>
                            <p>* Service Rates are including GST.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Membership;
