import React from 'react';
import { MessageSquare, Terminal, Database, Server, Layout, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      
      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter text-white">Marlon<span className="text-cyan-400">.dev</span></span>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#experiencia" className="hover:text-cyan-400 transition-colors">Experiência</a>
            <a href="#servicos" className="hover:text-cyan-400 transition-colors">Soluções</a>
            <a href="#contato" className="hover:text-cyan-400 transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Disponível para projetos freelance
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Engenharia de Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              focada em resultados.
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Com mais de 8 anos de experiência desenvolvendo soluções críticas e escaláveis. Transformo desafios complexos em aplicações web rápidas, seguras e de alta performance.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://wa.me/5581999395666?text=Olá%20Marlon,%20gostaria%20de%20falar%20sobre%20um%20projeto!" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-lg font-bold transition-all">
              <MessageSquare size={20} />
              Iniciar um Projeto
            </a>
            <a href="#experiencia" className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Ver meu histórico
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS / SOLUÇÕES */}
      <section id="servicos" className="py-20 px-6 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Terminal className="text-cyan-400" /> Como posso ajudar o seu negócio
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <Layout className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Front-end & Web Apps</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Desenvolvimento de interfaces modernas, responsivas e rápidas utilizando React, Next.js e Angular, com foco em usabilidade (UI/UX) e conversão.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
              <Server className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Back-end & Sustentação</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Criação e manutenção de APIs robustas em Java. Integração contínua (Jenkins), testes unitários e refatoração de código legado para alta disponibilidade.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-purple-500/30 transition-colors">
              <Database className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Banco de Dados</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Modelagem de dados, otimização de queries e desenvolvimento de rotinas complexas em PL/SQL Oracle para sistemas de missão crítica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA PROFISSIONAL */}
      <section id="experiencia" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Trajetória Profissional</h2>
        <div className="space-y-12 border-l-2 border-slate-800 ml-3 md:ml-0 pl-6 md:pl-8 relative">
          
          {/* Hitss Brasil */}
          <div className="relative">
            <div className="absolute -left-[35px] md:-left-[43px] top-1 h-4 w-4 rounded-full bg-cyan-500 ring-4 ring-slate-950"></div>
            <span className="text-sm font-semibold text-cyan-400 mb-1 block">Mai 2025 — Presente</span>
            <h3 className="text-xl font-bold text-white">Analista Desenvolvedor Web</h3>
            <span className="text-sm text-slate-400 block mb-4">Hitss Brasil • São Paulo (Remoto)</span>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
              Atuação direta no desenvolvimento e evolução de aplicações web, implementando novas funcionalidades, garantindo a qualidade do código e a performance da plataforma em um ambiente ágil e remoto.
            </p>
          </div>

          {/* EY */}
          <div className="relative">
            <div className="absolute -left-[35px] md:-left-[43px] top-1 h-4 w-4 rounded-full bg-slate-700 ring-4 ring-slate-950"></div>
            <span className="text-sm font-semibold text-slate-400 mb-1 block">Set 2022 — Mai 2025</span>
            <h3 className="text-xl font-bold text-white">Tech Consulting</h3>
            <span className="text-sm text-slate-400 block mb-4">EY Technology Solutions • Recife (Remoto)</span>
            <ul className="text-slate-300 text-sm space-y-2 max-w-2xl">
              <li className="flex items-start gap-2"><ChevronRight size={16} className="text-cyan-500 shrink-0 mt-0.5" /> Desenvolvimento de aplicações (implementação e sustentação).</li>
              <li className="flex items-start gap-2"><ChevronRight size={16} className="text-cyan-500 shrink-0 mt-0.5" /> Criação de interfaces com AngularJS.</li>
              <li className="flex items-start gap-2"><ChevronRight size={16} className="text-cyan-500 shrink-0 mt-0.5" /> Back-end e banco de dados utilizando JAVA e PL/SQL Oracle.</li>
              <li className="flex items-start gap-2"><ChevronRight size={16} className="text-cyan-500 shrink-0 mt-0.5" /> Integração contínua (Jenkins), Git, testes unitários e gestão de problemas via JIRA.</li>
            </ul>
          </div>

          {/* MV */}
          <div className="relative">
            <div className="absolute -left-[35px] md:-left-[43px] top-1 h-4 w-4 rounded-full bg-slate-700 ring-4 ring-slate-950"></div>
            <span className="text-sm font-semibold text-slate-400 mb-1 block">Jan 2018 — Set 2022</span>
            <h3 className="text-xl font-bold text-white">Desenvolvedor IV</h3>
            <span className="text-sm text-slate-400 block mb-4">MV S/A • Recife</span>
            <ul className="text-slate-300 text-sm space-y-2 max-w-2xl">
              <li className="flex items-start gap-2"><ChevronRight size={16} className="text-cyan-500 shrink-0 mt-0.5" /> Desenvolvimento de aplicações críticas voltadas para o ambiente hospitalar.</li>
              <li className="flex items-start gap-2"><ChevronRight size={16} className="text-cyan-500 shrink-0 mt-0.5" /> Desenvolvimento Full-stack utilizando FLEX, JAVA e banco de dados PL/SQL Oracle.</li>
              <li className="flex items-start gap-2"><ChevronRight size={16} className="text-cyan-500 shrink-0 mt-0.5" /> Criação e manutenção de relatórios gerenciais com IReport (Jasper).</li>
            </ul>
          </div>

        </div>
      </section>

      {/* FOOTER / CTA */}
      <footer id="contato" className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Vamos construir algo juntos?</h4>
            <p className="text-slate-400 text-sm">Disponível para projetos sob demanda e consultoria técnica.</p>
          </div>
          <div className="flex gap-4">
            {/* Ícone SVG nativo do GitHub */}
            <a href="https://github.com/marlinhord" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 hover:text-white transition-all flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            
            {/* Ícone SVG nativo do LinkedIn */}
            <a href="https://www.linkedin.com/in/marlon-victor-araujo/" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 hover:text-[#0A66C2] transition-all flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a href="https://wa.me/5581999395666" target="_blank" rel="noreferrer" className="p-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)] flex items-center justify-center">
              <MessageSquare size={24} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}