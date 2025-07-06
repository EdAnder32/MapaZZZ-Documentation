import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout title="MapaZZZ API" description="Documentação oficial da API pública do app MapaZZZ.">
      <main className="text-center py-20">
        <h1 className="text-5xl font-bold text-primary">MapaZZZ API</h1>
        <p className="text-lg mt-6 text-gray-400 max-w-xl mx-auto">
          Acesse dados em tempo real sobre zonas de risco de malária, estatísticas geográficas e reportes validados por instituições de saúde.
        </p>
        <a href="/docs/introducao" className="mt-10 inline-block bg-blue-600 text-white py-3 px-6 rounded-xl shadow hover:bg-blue-700 transition">
          Começar documentação →
        </a>
      </main>
    </Layout>
  );
}
