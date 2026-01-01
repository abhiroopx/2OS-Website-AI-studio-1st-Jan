import React, { useState, useEffect } from 'react';
import { Logo, SmallLogo } from './components/Logo';
import { AsteriskIcon, LinkedInIcon, EmailIcon } from './components/Icons';
import { Button } from './components/Button';
import { RevealOnScroll } from './components/RevealOnScroll';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-black antialiased bg-grid selection:bg-[#C02E31] selection:text-white">
      
      {/* 1. HERO: Removed bottom padding to tighten gap to memo */}
      <section className="bg-white w-full flex flex-col items-center justify-end relative px-6 pt-12 pb-0 md:pt-16 md:pb-0">
        <div className="max-w-6xl w-full z-10 flex flex-col items-start text-left">
           <RevealOnScroll>
              {/* Logo: Reduced margin bottom */}
              <div className="transform transition-transform duration-1000 ease-out mb-6">
                 <Logo className="w-full max-w-2xl h-auto object-contain" />
              </div>
           </RevealOnScroll>

           {/* Red Separator Line */}
           <RevealOnScroll delay={200}>
              <div className="w-full h-[2px] bg-[#C02E31]"></div>
           </RevealOnScroll>
        </div>
      </section>

      {/* 2. MAIN CONTENT: Reduced top padding */}
      <section id="memo" className="w-full flex flex-col items-center pb-24 px-6 relative bg-white">
        <div className="max-w-6xl w-full flex flex-col items-start">
          
          <RevealOnScroll delay={300}>
            <div className="w-full bg-white pt-8 flex flex-col items-start">
                
                <h2 className="font-serif text-4xl md:text-5xl text-black mb-8 leading-[1.1] tracking-tight text-left">
                  It's time to get <span className="italic border-b-2 border-[#C02E31] pb-1">specific</span>.
                </h2>

                <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-black/85 font-light text-left max-w-4xl">
                  <RevealOnScroll delay={400}>
                    <p>
                      The last decade has seen a dramatic improvement in general-purpose machine learning, as foundation models have lowered the marginal cost of applying intelligence across a vast array of tasks. While this progress is real, it is frequently misapplied in production environments. System failure in these settings is rarely a result of insufficient model capability; rather, it occurs because intelligence is deployed without sufficient domain structure. A model may perform exactly as designed, yet fail because the problem has not been correctly framed within the specific constraints of the industry it serves.
                    </p>
                  </RevealOnScroll>

                  <RevealOnScroll delay={450}>
                    <p>
                      The decisions that carry the most weight in industry are constrained by factors that simply do not exist in public datasets, such as proprietary workflows, regulatory boundaries, operational heuristics, legacy systems, and long-tailed exceptions. Much of this knowledge is implicit, unevenly documented, and learned through years of hands-on experience rather than formal instruction. Because general models operate largely outside this context, they tend to perform well in exploratory or assistive settings but degrade significantly in environments where decisions must be precise, auditable, and repeatable.
                    </p>
                  </RevealOnScroll>

                  <RevealOnScroll delay={500}>
                    <p>
                      Addressing this gap is not primarily a modeling problem that can be solved with scale alone. Building reliable AI in high-stakes settings requires the explicit representation of domain constraints, deterministic handling of edge cases, and end-to-end traceability across data, models, and decisions. It demands learning regimes that can function effectively with sparse, non-iid, and proprietary data—requirements that are satisfied at the system level rather than through the expansion of a single model. This architecture ensures that the "black box" of AI is replaced by a transparent framework where every output is grounded in the reality of the operation.
                    </p>
                  </RevealOnScroll>
                  
                  <RevealOnScroll delay={520}>
                    <p>
                      <strong className="text-black font-semibold border-b border-black/20">Second Order Systems</strong> is focused on building domain-specific intelligence for these complex environments. Our approach begins with an interrogation of how decisions are actually made by domain experts on the ground. We work to surface implicit heuristics, formalize latent constraints, and design systems that incorporate this structure directly into the technical stack. In our framework, models are treated as components within a larger decision system, not as the system itself. The ultimate objective is not to replace human expertise, but to encode and compound it, producing intelligence that behaves predictably under real operating conditions and improves continuously as domain understanding deepens.
                    </p>
                  </RevealOnScroll>

                  {/* CTAs */}
                  <div className="mt-24 flex flex-col sm:flex-row gap-6 justify-start w-full border-t border-black/10 pt-8">
                    <Button 
                      variant="red" 
                      className="px-10 py-4 text-sm md:text-base"
                      onClick={() => window.open('https://notion.so', '_blank')}
                    >
                      Join Our Team
                    </Button>
                    <Button 
                      variant="red-outline" 
                      className="px-10 py-4 text-sm md:text-base"
                      onClick={() => window.open('https://calendly.com/udit-vizal/30min', '_blank')}
                    >
                      Inquire to Collaborate
                    </Button>
                  </div>
                </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* 3. FOOTER: Increased width to max-w-6xl, Split Layout */}
      <div className="w-full px-6 pb-6 flex justify-center">
        <footer className="max-w-6xl w-full bg-[#C02E31] text-white py-16 px-12 relative overflow-hidden rounded-sm">
           
           {/* Light lines texture overlay */}
           <div className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}>
           </div>

           <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 w-full">
               
               {/* LEFT: Branding */}
               <div className="flex flex-col gap-4 w-full md:w-auto items-start">
                  <div className="w-full max-w-xs flex justify-start">
                    <Logo className="w-full h-auto object-contain brightness-0 invert" />
                  </div>
                  <p className="font-mono text-sm md:text-base max-w-md leading-relaxed font-bold tracking-wider text-left">
                     SPECIFIC INTELLIGENCE FOR<br/>THE NEXT GENERATION OF ENTERPRISE.
                  </p>
               </div>

               {/* RIGHT: Contact & Links */}
               <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto text-left md:text-right">
                  <div className="flex gap-4">
                    <a href="#" className="p-3 border border-white/40 hover:border-white hover:bg-white hover:text-[#C02E31] transition-all rounded-full text-white">
                      <LinkedInIcon className="w-5 h-5" />
                    </a>
                    <a href="mailto:hello@secondorder.com" className="p-3 border border-white/40 hover:border-white hover:bg-white hover:text-[#C02E31] transition-all rounded-full text-white">
                      <EmailIcon className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="space-y-1">
                     <p className="text-white/80 font-mono text-xs md:text-sm uppercase tracking-widest font-bold">Bangalore</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-[10px] md:text-xs font-mono text-white/50 uppercase tracking-widest mt-2">
                     <span>© 2025 Second Order Inc.</span>
                  </div>
               </div>
           </div>
        </footer>
      </div>
      
    </div>
  );
}