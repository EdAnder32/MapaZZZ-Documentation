import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="MapaZZZ API"
      description="Documentação oficial da API pública do MapaZZZ"
    >
      <main className="bg-[#0a0a23] text-white min-h-screen flex flex-col justify-between">

        {/* TOPO */}
        <header className="w-full py-4 px-6 bg-slate-900 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              MapaZZZ API
            </span>

            <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center">
              <img src="/img/logo.png" alt="Logo MapaZZZ" className="w-8 h-8 object-contain" />
            </div>
          </div>
        </header>

        {/* SEÇÃO DE TEXTO À DIREITA DA LOGO */}
        <section className="flex-1 flex justify-end items-start px-6 py-16">
          <div className="max-w-xl bg-slate-900 border border-blue-700 rounded-xl p-8 shadow-lg space-y-6">

            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              MapaZZZ API
            </h1>

            <p className="text-lg text-gray-300">
              Dados de malária em tempo real, processados com IA e validados por instituições de saúde reconhecidas.
            </p>

            <a href="/docs/introducao">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition-all duration-300">
                📚 Acessar Documentação
              </button>
            </a>

          </div>
        </section>

        {/* RODAPÉ */}
        <footer className="w-full text-center text-gray-400 py-6 border-t border-slate-700 mt-16">
          © 2025 MapaZZZ API. Todos os direitos reservados.
        </footer>
      </main>
    </Layout>
  );
}
