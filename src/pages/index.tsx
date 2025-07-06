import React from 'react';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="MapaZZZ API"
      description="Documentação oficial da API pública do MapaZZZ"
    >
      <main className="min-h-screen bg-gradient-to-br from-[#0a0a23] via-[#111132] to-[#0a0a23] text-white flex flex-col justify-between font-sans">

        {/* Cabeçalho */}
        <header className="w-full py-10 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Texto à esquerda */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl font-black tracking-wide mb-2 drop-shadow-lg">
                MapaZZZ API
              </h1>

              <p className="text-lg text-blue-100 mt-4 max-w-lg font-medium leading-relaxed text-center">
                API pública do MapaZZZ que mapeia zonas de risco de malária por meio de reportes de usuários, IA e autoridades sanitárias.
              </p>

              <a href="/docs/introducao" className="mt-6 inline-block">
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-mono py-4 px-8 text-lg rounded-full shadow-lg transition-all duration-300 border-2 border-blue-400 hover:border-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] animate-pulse"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  Acessar Documentação
                </motion.button>
              </a>
            </motion.div>

            {/* Logo à direita */}
            <motion.div
              className="w-16 h-16 bg-blue-700 rounded-md flex items-center justify-center mt-10 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <img
                src="/img/logo.png"
                alt="Logo MapaZZZ"
                className="w-12 h-12 object-contain"
              />
            </motion.div>

          </div>
        </header>

        {/* Rodapé */}
        <footer className="w-full text-center text-gray-400 py-6 border-t border-slate-700 mt-16">
          © 2025 <span className="text-blue-300 font-semibold">MapaZZZ API</span>. Todos os direitos reservados.
        </footer>

      </main>
    </Layout>
  );
}
