/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Truck, 
  Package, 
  RefreshCw, 
  Users, 
  Factory, 
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Crown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_NUMBER = "5511999999999"; // Placeholder number
const WHATSAPP_MESSAGE = encodeURIComponent("Olá, quero receber o catálogo de atacado da Miss Mel.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const HERO_IMAGES = [
  "https://cdn-op.vesti.mobi/p/350323/49746b9f-a2db-4c8f-9a32-f362d6ee2cd9/73024-lg.webp",
  "https://cdn-op.vesti.mobi/p/350323/3131ff99-c192-4dcc-9d8b-9159f4c345ac/63801-lg.webp",
  "https://cdn-op.vesti.mobi/p/350323/aff1fe5d-232d-42a4-a005-e192cce9d4bb/17068-lg.webp",
  "https://cdn-op.vesti.mobi/p/350323/79961076-49c1-43cc-9186-d3eeb1b4ebb4/21976-lg.webp"
];

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 px-6 md:py-24 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Button = ({ children, className = "", primary = true }: { children: React.ReactNode, className?: string, primary?: boolean }) => (
  <a 
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none font-semibold transition-all duration-300 transform hover:bg-opacity-90 active:scale-95 shadow-lg uppercase tracking-widest text-sm ${
      primary 
        ? "bg-brand-dark text-white" 
        : "bg-white text-brand-dark border border-brand-dark hover:bg-zinc-50"
    } ${className}`}
  >
    {children}
  </a>
);

const Logo = () => (
  <div className="flex flex-col items-center">
    <div className="relative flex flex-col items-center">
      <Crown size={24} className="text-brand-dark mb-[-4px]" strokeWidth={1.5} />
      <div className="w-12 h-[1px] bg-brand-dark mb-1 opacity-50"></div>
    </div>
    <div className="text-2xl font-display font-medium tracking-[0.15em] text-brand-dark leading-none">
      MISSMEL
    </div>
  </div>
);

export default function App() {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark font-sans selection:bg-zinc-900 selection:text-white">
      {/* Header / Nav (Minimal) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-8">
            <a 
              href={WHATSAPP_URL}
              className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark hover:opacity-70 transition-opacity"
            >
              <MessageCircle size={16} />
              Falar com Consultor
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Section className="pt-40 md:pt-56 pb-20 bg-brand-bg overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-0 py-1 border-b border-brand-dark/20 text-brand-dark text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <Factory size={12} />
              Direto de Fábrica
            </div>
            
            {/* Cover Image Field */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full aspect-[21/7] md:aspect-[21/5] bg-zinc-200 mb-10 overflow-hidden shadow-sm grayscale hover:grayscale-0 transition-all duration-1000"
            >
              <img 
                src="https://cdn-op.vesti.mobi/p/350323/831f7eb6-2081-472e-a3e0-d017aa56a8fa/25357-lg.webp" 
                alt="Capa Coleção Miss Mel" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
              <h1 className="text-6xl md:text-[8vw] font-display font-bold tracking-tighter text-brand-dark leading-[0.85] uppercase italic">
                Moda Feminina <br />
                no Atacado
              </h1>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden xl:block w-48 aspect-[3/4] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 mt-4 shrink-0"
              >
                <img 
                  src="https://cdn-op.vesti.mobi/p/350323/3131ff99-c192-4dcc-9d8b-9159f4c345ac/63801-lg.webp" 
                  alt="Destaque Coleção Miss Mel" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            <p className="text-lg text-brand-dark/70 mb-10 max-w-lg leading-relaxed font-light">
              Abasteça sua boutique com peças de alto padrão, modelagens exclusivas e curadoria de moda direto da fonte.
            </p>
            
            <div className="space-y-5 mb-12">
              {[
                "Venda exclusiva para lojistas",
                "Modelos atualizados semanalmente",
                "Envio premium para todo o Brasil",
                "Atendimento VIP via WhatsApp"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-brand-dark/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-dark"></div>
                  <span className="text-xs uppercase tracking-widest font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button className="w-full md:w-auto px-12 py-5 text-base">
              SOLICITAR CATÁLOGO
              <ArrowRight size={18} />
            </Button>
            
            <p className="mt-6 text-[10px] text-brand-dark/40 uppercase tracking-widest font-bold">
              * Mínimo de 12 peças variadas • Exclusivo B2B
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden shadow-2xl relative group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImage}
                  src={HERO_IMAGES[currentImage]} 
                  alt={`Coleção Miss Mel Atacado ${currentImage + 1}`} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Carousel Controls */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={prevImage}
                  className="w-10 h-10 bg-brand-dark/50 text-white flex items-center justify-center hover:bg-brand-dark transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={nextImage}
                  className="w-10 h-10 bg-brand-dark/50 text-white flex items-center justify-center hover:bg-brand-dark transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {HERO_IMAGES.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === currentImage ? "bg-white w-6" : "bg-white/40"}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -left-10 bg-brand-dark p-8 shadow-2xl hidden md:block z-10">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/10">
                  <Crown className="text-white" size={28} />
                </div>
                <div>
                  <div className="text-3xl font-display font-medium text-white tracking-widest">+500</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Boutiques Parceiras</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>


      {/* Ideal for Resellers */}
      <Section className="bg-brand-bg">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-display uppercase leading-[0.95] mb-10">
              Alta Performance <br />
              <span className="italic font-light">para sua Vitrine</span>
            </h2>
            <p className="text-brand-dark/70 text-lg mb-12 leading-relaxed font-light">
              Nossas coleções são desenvolvidas com foco total em revenda. Modelagens comerciais que valorizam o corpo, tecidos de alta qualidade e as tendências que suas clientes buscam.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 border border-brand-dark/10 flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Grade Inteligente</h4>
                  <p className="text-sm text-brand-dark/60 font-light">Tamanhos que realmente vendem e evitam sobras no seu estoque.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 border border-brand-dark/10 flex items-center justify-center">
                  <RefreshCw size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Reposição Ágil</h4>
                  <p className="text-sm text-brand-dark/60 font-light">Novidades toda semana para manter sua vitrine sempre atualizada.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-square bg-white p-1 shadow-xl">
            <img 
              src="https://cdn-op.vesti.mobi/p/350323/8d871a9d-8165-4300-b357-25c81b964888/10977-lg.webp" 
              alt="Model" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>


      {/* Logistics & Benefits */}
      <Section className="bg-brand-bg">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-12">
              {[
                { icon: <Truck size={20} />, title: "ENVIO NACIONAL", desc: "Logística integrada com as melhores transportadoras." },
                { icon: <Package size={20} />, title: "PACKAGING PREMIUM", desc: "Sua mercadoria chega impecável na sua loja." },
                { icon: <Users size={20} />, title: "CONSULTORIA B2B", desc: "Suporte estratégico para o seu negócio crescer." },
                { icon: <ShieldCheck size={20} />, title: "SEGURANÇA", desc: "Fornecedor sólido com anos de tradição." },
              ].map((benefit, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="text-brand-dark/40">{benefit.icon}</div>
                  <h4 className="font-bold text-[10px] uppercase tracking-[0.2em]">{benefit.title}</h4>
                  <p className="text-brand-dark/60 text-xs font-light leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark/40 mb-4">Logística</div>
            <h2 className="text-4xl md:text-5xl font-display uppercase mb-8 leading-none">Agilidade que <br /> gera lucro</h2>
            <p className="text-brand-dark/70 mb-10 leading-relaxed font-light">
              Sabemos que o giro de estoque é vital. Por isso, mantemos um fluxo de expedição diário para garantir que as novidades cheguem rápido à sua vitrine.
            </p>
            <div className="p-8 border border-brand-dark/10 bg-white/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-dark"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark/40">Status Operacional</span>
              </div>
              <p className="text-brand-dark font-medium text-sm uppercase tracking-widest">Pedidos realizados até as 12h são despachados no mesmo dia.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section className="bg-white">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display uppercase tracking-tight mb-4">Parceiros de Sucesso</h2>
          <div className="w-12 h-[1px] bg-brand-dark mx-auto opacity-20"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-brand-dark/10">
          {[
            { name: "MARIANA S.", role: "BOUTIQUE SÃO PAULO", text: "As peças têm ótima saída e o atendimento é impecável. Compro toda semana." },
            { name: "RICARDO T.", role: "LOJISTA MULTIMARCAS", text: "Fornecedor confiável, modelagens perfeitas. Chega rápido e vende muito fácil." },
            { name: "CARLA M.", role: "REVENDEDORA PREMIUM", text: "A qualidade surpreendeu minhas clientes. O suporte via WhatsApp é excelente." },
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-12">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-1 bg-brand-dark"></div>)}
              </div>
              <p className="text-brand-dark/60 text-sm font-light italic mb-8 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <div className="font-bold text-[10px] tracking-[0.2em] text-brand-dark">{testimonial.name}</div>
                <div className="text-[9px] text-brand-dark/40 uppercase tracking-[0.1em] font-bold mt-1">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Qualification / Filter */}
      <Section className="bg-brand-bg border-y border-brand-dark/5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-brand-dark/10 text-brand-dark text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
            <ShieldCheck size={14} />
            POLÍTICA COMERCIAL
          </div>
          <h2 className="text-3xl md:text-4xl font-display uppercase mb-8">Venda Exclusiva B2B</h2>
          <p className="text-brand-dark/70 text-lg mb-8 font-light leading-relaxed">
            Nosso foco é o abastecimento de boutiques e revendedores. <span className="font-bold text-brand-dark">Não realizamos vendas unitárias para consumidor final.</span> Isso garante exclusividade e margem de lucro para nossos parceiros.
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-brand-dark text-white text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-10 tracking-tight leading-[0.9]">
            ELEVE O NÍVEL <br />
            <span className="italic font-light">DA SUA LOJA</span>
          </h2>
          <p className="text-white/50 text-lg mb-16 max-w-2xl mx-auto font-light">
            Fale agora com um de nossos consultores e receba o catálogo completo com preços e condições exclusivas de atacado.
          </p>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-4 px-16 py-6 bg-white text-brand-dark font-bold text-sm uppercase tracking-[0.3em] shadow-2xl hover:bg-brand-bg transition-all transform hover:scale-105 active:scale-95"
          >
            <MessageCircle size={20} />
            FALAR COM CONSULTOR
          </a>
          <p className="mt-10 text-white/30 text-[10px] font-bold uppercase tracking-[0.4em]">
            CATÁLOGO + CONDIÇÕES DIRETAMENTE NO WHATSAPP
          </p>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="bg-brand-bg text-brand-dark/40 py-16 px-6 border-t border-brand-dark/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <Logo />
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-right">
            <p>© {new Date().getFullYear()} Miss Mel Atacado. Todos os direitos reservados.</p>
            <p className="mt-2 text-brand-dark/20">Venda exclusiva para CNPJ e Revendedores CPF.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Mobile) */}
      <a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 md:hidden w-16 h-16 bg-brand-dark text-white rounded-none shadow-2xl flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
