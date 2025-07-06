import React from 'react';
import { useState } from 'react';

// Componente Layout simulado para demonstração
const Layout = ({ title, description, children }) => (
  <div>
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </head>
    {children}
  </div>
);

// Hook simulado para useBaseUrl
const useBaseUrl = (path) => path;

// Componente motion simulado
const motion = {
  div: ({ children, initial, animate, transition, className, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    
    React.useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }, []);
    
    return (
      <div 
        className={`${className} transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
        {...props}
      >
        {children}
      </div>
    );
  }
};

export default function Home() {
  return (
    <Layout
      title="MapaZZZ API"
      description="Documentação oficial da API pública do MapaZZZ"
    >
      <main className="bg-[#0a0a23] text-white min-h-screen flex flex-col justify-between">
        {/* Topo */}
        <header className="w-full py-4 px-6 bg-slate-900 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              MapaZZZ API
            </span>
          </div>
        </header>
        {/* Conteúdo principal com caixa à esquerda */}
        <div className="flex-grow flex items-center justify-between px-6 py-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="border-2 border-blue-500 rounded-xl p-10 w-80 h-64 flex items-center justify-center bg-slate-900 shadow-lg"
          >
            <div className="w-28 h-28 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              M
            </div>
          </motion.div>
          
          {/* Mensagem MAPAZZZ no lado direito */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-8xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent tracking-wider"
          >
            MAPAZZZ
          </motion.div>
        </div>
        {/* Rodapé */}
        <footer className="w-full text-center text-gray-400 py-6 border-t border-slate-700">
          © 2025 MapaZZZ API. Todos os direitos reservados.
        </footer>
      </main>
    </Layout>
  );
}