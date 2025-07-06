import React from 'react';

export default function Home(): JSX.Element {
  return (
    <>
      <head>
        <title>MapaZZZ API</title>
        <meta name="description" content="Documentação oficial da API pública do MapaZZZ" />
      </head>
      <main className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-screen relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Header com glassmorphism */}
        <header className="relative z-10 w-full py-6 px-6 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-2xl">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                <img src="/img/logo.png" alt="Logo MapaZZZ" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  MapaZZZ API
                </h1>
                <p className="text-sm text-blue-200/80">Mapeamento Inteligente de Malária</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/docs/introducao" className="text-blue-200 hover:text-white transition-colors duration-300">
                Documentação
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                API Reference
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                Suporte
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text text-sm font-semibold tracking-wide uppercase">
                🌍 Tecnologia para Saúde Pública
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Mapeie Zonas de
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Risco de Malária
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed font-light">
              API pública inteligente que combina reportes de usuários, análise de IA e dados de autoridades sanitárias 
              para mapear e prevenir a malária em tempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <a href="/docs/introducao" className="group">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 text-lg rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-blue-500/50 backdrop-blur-sm">
                  <span className="flex items-center space-x-2">
                    <span>Começar Agora</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
              </a>
              <a href="#" className="group">
                <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-4 px-8 text-lg rounded-full shadow-lg transition-all duration-300 border border-white/20 hover:border-white/40">
                  <span className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <span>Ver Demo</span>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mapeamento Preciso</h3>
              <p className="text-blue-100/80 leading-relaxed">
                Geolocalização em tempo real com precisão de dados para identificação de focos de malária.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">IA Avançada</h3>
              <p className="text-blue-100/80 leading-relaxed">
                Algoritmos de machine learning para análise preditiva e identificação de padrões epidemiológicos.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Dados Confiáveis</h3>
              <p className="text-blue-100/80 leading-relaxed">
                Integração com autoridades sanitárias e validação de dados para máxima confiabilidade.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-md rounded-3xl border border-white/10 p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-white mb-2">99.9%</div>
                <div className="text-blue-200/80">Uptime da API</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2">50ms</div>
                <div className="text-blue-200/80">Latência Média</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2">24/7</div>
                <div className="text-blue-200/80">Monitoramento</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2">RESTful</div>
                <div className="text-blue-200/80">API Padrão</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 w-full border-t border-white/10 backdrop-blur-md bg-white/5 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <img src="/img/logo.png" alt="Logo MapaZZZ" className="w-5 h-5 object-contain" />
                </div>
                <span className="text-white font-semibold">MapaZZZ API</span>
              </div>
              <div className="text-blue-200/60 text-sm">
                © 2025 MapaZZZ API. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
