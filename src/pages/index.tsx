import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="MapaZZZ API"
      description="Documentação oficial da API pública do MapaZZZ"
    >
      <main className="min-h-screen bg-gradient-to-br from-[#0a0a23] via-[#111132] to-[#0a0a23] text-white flex flex-col justify-between font-sans">

        {/* Cabeçalho */}
        <header className="py-10 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

            {/* Texto principal */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-white drop-shadow-lg">
                MapaZZZ API
              </h1>
              <p className="text-lg text-blue-100 font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                API pública do MapaZZZ que mapeia zonas de risco de malária por meio de reportes de usuários, IA e autoridades sanitárias.
              </p>

              <div className="mt-8">
                <a href="/docs/introducao">
                  <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium text-lg shadow-xl hover:scale-105 transform transition-all duration-300 border border-blue-400 hover:border-indigo-400">
                    📘 Acessar Documentação
                  </button>
                </a>
              </div>
            </div>

            {/* Logo com destaque */}
            <div className="flex justify-center md:justify-end">
              <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center shadow-2xl animate-[pulse_4s_ease-in-out_infinite]">
                <img src="/img/logo.png" alt="Logo MapaZZZ" className="w-20 h-20 object-contain" />
              </div>
            </div>

          </div>
        </header>

        {/* Rodapé */}
        <footer className="text-center text-sm text-gray-400 py-6 border-t border-slate-800">
          © 2025 <span className="text-blue-300 font-semibold">MapaZZZ API</span>. Todos os direitos reservados.
        </footer>

      </main>
    </Layout>
  );
}
