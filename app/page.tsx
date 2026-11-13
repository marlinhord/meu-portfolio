'use client';

import React from 'react';
import { MessageSquare, Terminal, Database, Server, Layout, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen bg-[#0B0F19] text-slate-200 font-sans selection:bg-[#E5F95B]/30 overflow-x-hidden">
      
      {/* HEADER / NAVBAR */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full border-b border-[#1E293B] bg-[#0B0F19]/85 backdrop-blur-md z-50"
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter text-white">marlinho<span className="text-[#E5F95B]">.dev</span></span>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#experiencia" className="hover:text-[#E5F95B] transition-colors">Experiência</a>
            <a href="#servicos" className="hover:text-[#E5F95B] transition-colors">Soluções</a>
            <a href="#contato" className="hover:text-[#E5F95B] transition-colors">Contato</a>
          </nav>
        </div>
      </motion.header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-24 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-8 overflow-hidden">
        
        {/* TEXTOS (ESQUERDA) */}
        <motion.div 
          className="flex-1 space-y-6 z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2333] border border-[#3E547A]/50 text-[#E5F95B] text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5F95B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E5F95B]"></span>
            </span>
            Disponível para projetos freelance
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Engenharia de <br /> Software focada em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5F95B] to-[#4F6D96]">
              resultados.
            </span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Com mais de 8 anos de experiência desenvolvendo soluções críticas e escaláveis. Transformo desafios complexos em aplicações web rápidas, seguras e de alta performance.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
            <a href="https://wa.me/5581999395666?text=Olá%20Marlon,%20gostaria%20de%20falar%20sobre%20um%20projeto!" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#E5F95B] hover:bg-[#d0e54b] text-slate-950 px-6 py-3 rounded-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(229,249,91,0.2)]">
              <MessageSquare size={20} />
              Iniciar um Projeto
            </a>
            <a href="#experiencia" className="flex items-center gap-2 bg-[#10172A] hover:bg-[#1E293B] border border-[#3E547A]/60 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95">
              Ver meu histórico
            </a>
          </motion.div>
        </motion.div>

        {/* FOTO E TAGS (DIREITA) */}
        <div className="flex-1 flex justify-center items-center relative py-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Efeitos de Luz de Fundo (Glow) */}
            <div className="absolute inset-0 bg-[#E5F95B]/10 rounded-3xl blur-3xl -z-10 scale-90"></div>
            <div className="absolute inset-0 bg-[#4F6D96]/20 rounded-3xl blur-3xl -z-10 scale-110"></div>
            
            {/* Foto Container */}
            <div className="w-[300px] h-[340px] md:w-[320px] md:h-[360px] rounded-2xl overflow-hidden border-2 border-[#3E547A] relative bg-[#1E293B]/50 backdrop-blur-sm shadow-2xl">
              <img 
                src="/marlon.png" 
                alt="Marlon Victor" 
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  // Fallback se a foto não for encontrada
                  e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"; // Substitua se necessário
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Tags Flutuantes (Badges) */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-6 bg-[#131B2E]/90 border border-[#3E547A]/80 text-[#E5F95B] px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md"
            >
              React
            </motion.div>

            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -left-12 bg-[#131B2E]/90 border border-[#3E547A]/80 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md"
            >
              Java
            </motion.div>

            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-6 -right-8 bg-[#131B2E]/90 border border-[#3E547A]/80 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md"
            >
              PL/SQL
            </motion.div>

            <motion.div 
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-12 -right-8 bg-[#131B2E]/90 border border-[#3E547A]/80 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md"
            >
              Next.js
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* SERVIÇOS / SOLUÇÕES */}
      <section id="servicos" className="py-20 px-6 bg-[#0E1524] border-y border-[#1E293B]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-3xl font-bold text-white mb-12 flex items-center gap-3"
          >
            <Terminal className="text-[#E5F95B]" /> Como posso ajudar o seu negócio
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Layout className="text-[#E5F95B] mb-4" size={32} />,
                title: "Front-end & Web Apps",
                desc: "Desenvolvimento de interfaces modernas, responsivas e rápidas utilizando React, Next.js e Angular, com foco em usabilidade (UI/UX) e conversão.",
                hover: "hover:border-[#E5F95B]/30"
              },
              {
                icon: <Server className="text-[#4F6D96] mb-4" size={32} />,
                title: "Back-end & Sustentação",
                desc: "Criação e manutenção de APIs robustas em Java. Integração contínua (Jenkins), testes unitários e refatoração de código legado para alta disponibilidade.",
                hover: "hover:border-[#4F6D96]/30"
              },
              {
                icon: <Database className="text-[#4F6D96]/80 mb-4" size={32} />,
                title: "Banco de Dados",
                desc: "Modelagem de dados, otimização de queries e desenvolvimento de rotinas complexas em PL/SQL Oracle para sistemas de missão crítica.",
                hover: "hover:border-[#4F6D96]/30"
              }
            ].map((servico, index) => (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.15 } }
                }}
                className={`bg-[#131B2E] p-8 rounded-2xl border border-[#1E293B] transition-colors ${servico.hover}`}
              >
                {servico.icon}
                <h3 className="text-xl font-bold text-white mb-3">{servico.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{servico.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA PROFISSIONAL */}
      <section id="experiencia" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="text-3xl font-bold text-white mb-12"
        >
          Trajetória Profissional
        </motion.h2>
        
        <div className="space-y-12 border-l-2 border-[#1E293B] ml-3 md:ml-0 pl-6 md:pl-8 relative">
          
          {/* Hitss Brasil */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
            <div className="absolute -left-[35px] md:-left-[43px] top-1 h-4 w-4 rounded-full bg-[#E5F95B] ring-4 ring-[#0B0F19]"></div>
            <span className="text-sm font-semibold text-[#E5F95B] mb-1 block">Mai 2025 — Presente</span>
            <h3 className="text-xl font-bold text-white">Analista Desenvolvedor Web</h3>
            <span className="text-sm text-slate-400 block mb-4">Hitss Brasil • São Paulo (Remoto)</span>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
              Atuação direta no desenvolvimento e evolução de aplicações web, implementando novas funcionalidades, garantindo a qualidade do código e a performance da plataforma em um ambiente ágil e remoto.
            </p>
          </motion.div>

          {/* EY */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
            <div className="absolute -left-[35px] md:-left-[43px] top-1 h-4 w-4 rounded-full bg-[#3E547A] ring-4 ring-[#0B0F19]"></div>
            <span className="text-sm font-semibold text-slate-400 mb-1 block">Set 2022 — Mai 2025</span>
            <h3 className="text-xl font-bold text-white">Tech Consulting</h3>
            <span className="text-sm text-slate-400 block mb-4">EY Technology Solutions • Recife (Remoto)</span>
            <ul className="text-slate-300 text-sm space-y-2 max-w-2xl">
              <li className="flex items-start gap-2"><ChevronRight size={16} className="text-[#E5F95B] shrink-0 mt-0.5" /> Desenvolvimento de aplicações (implementação e sustentação).</li>
              <li className="flex items-start gap-2"><ChevronRight size={16} className="text-[#E5F95B] shrink-0 mt-0.5" /> Criação de interfaces com AngularJS.</li>
              <li className="flex items-start gap-2"><ChevronRight size={16} className="text-[#E5F95B] shrink-0 mt-0.5" /> Back-end e banco de dados utilizando JAVA e PL/SQL Oracle.</li>
              <li className="flex items-start gap-2"><ChevronRight size={16} className="text-[#E5F95B] shrink-0 mt-0.5" /> Integração contínua (Jenkins), Git, testes unitários e gestão de problemas via JIRA.</li>
            </ul>
          </motion.div>

          {/* MV */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
            <div className="absolute -left-[35px] md:-left-[43px] top-1 h-4 w-4 rounded-full bg-[#3E547A] ring-4 ring-[#0B0F19]"></div>
            <span className="text-sm font-semibold text-slate-400 mb-1 block">Jan 2018 — Set 2022</span>
            <h3 className="text-xl font-bold text-white">Desenvolvedor IV</h3>
            <span className="text-sm text-slate-400 block mb-4">MV S/A • Recife</span>
            <ul className="text-slate-300 text-sm space-y-2 max-w-2xl">
              <li className="flex items-start gap-2"><ChevronRight size={16} className="text-[#E5F95B] shrink-0 mt-0.5" /> Desenvolvimento de aplicações críticas voltadas para o ambiente hospitalar.</li>
              <li className="flex items-start gap-2"><ChevronRight size={16} className="text-[#E5F95B] shrink-0 mt-0.5" /> Desenvolvimento Full-stack utilizando FLEX, JAVA e banco de dados PL/SQL Oracle.</li>
              <li className="flex items-start gap-2"><ChevronRight size={16} className="text-[#E5F95B] shrink-0 mt-0.5" /> Criação e manutenção de relatórios gerenciais com IReport (Jasper).</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* FOOTER / CTA */}
      <footer id="contato" className="bg-[#0B0F19] py-12 border-t border-[#1E293B]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h4 className="text-2xl font-bold text-white mb-2">Vamos construir algo juntos?</h4>
            <p className="text-slate-400 text-sm">Disponível para projetos sob demanda e consultoria técnica.</p>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex gap-4"
          >
            <a href="https://github.com/marlinhord" target="_blank" rel="noreferrer" className="p-3 bg-[#131B2E] hover:bg-[#1E293B] border border-[#1E293B] rounded-lg text-slate-300 hover:text-white hover:-translate-y-1 transition-all flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            
            <a href="https://www.linkedin.com/in/marlon-victor-araujo/" target="_blank" rel="noreferrer" className="p-3 bg-[#131B2E] hover:bg-[#1E293B] border border-[#1E293B] rounded-lg text-slate-300 hover:text-[#0A66C2] hover:-translate-y-1 transition-all flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a href="https://wa.me/5581999395666" target="_blank" rel="noreferrer" className="p-3 bg-[#E5F95B] hover:bg-[#d0e54b] text-slate-950 rounded-lg hover:-translate-y-1 transition-all shadow-[0_0_15px_rgba(229,249,91,0.3)] flex items-center justify-center">
              <MessageSquare size={24} />
            </a>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}