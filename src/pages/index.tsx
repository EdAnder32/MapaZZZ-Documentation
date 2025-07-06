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
            <span className="text-xl font-bold text-white">
              MapaZZZ API
            </span>
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
