import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="MapaZZZ API"
      description="Documentação oficial da API pública do MapaZZZ"
    >
      <main className="bg-[#0a0a23] text-white min-h-screen flex flex-col justify-between">
        {/* Topo com texto à esquerda e logo à direita */}
        <header className="w-full py-4 px-6 bg-slate-900 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Texto à esquerda */}
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-white tracking-wide mb-2">
                MapaZZZ API
              </span>
              <p className="text-lg text-blue-100 mt-4 max-w-lg font-medium leading-relaxed text-center">
                API pública do MapaZZZ que mapeia zonas de risco de malária por meio de reportes de usuários, IA e autoridades sanitárias
              </p>
              <a href="/docs/introducao" className="mt-6 inline-block">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-mono py-4 px-8 text-lg rounded-full shadow-lg transition-all duration-300 border-2 border-blue-400 hover:border-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] animate-pulse">
                  Acessar Documentação
                </button>
              </a>
            </div>
            {/* Logo à direita */}
            <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center">
              <img src="/img/logo.png" alt="Logo MapaZZZ" className="w-8 h-8 object-contain" />
            </div>
          </div>
        </header>

        {/* Conteúdo vazio */}

        {/* Rodapé */}
        <footer className="w-full text-center text-gray-400 py-6 border-t border-slate-700 mt-16">
          © 2025 MapaZZZ API. Todos os direitos reservados.
        </footer>
      </main>
    </Layout>
  );
}
