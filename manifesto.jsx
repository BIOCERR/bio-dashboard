import React from 'react';
import { Link } from 'react-router-dom'; // Se estiver usando React Router

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Manifesto da BIOCERR 🌱</h1>

      <p className="mb-4">
        A BIOCERR nasceu daquilo que resistiu à escuridão. De uma invenção ignorada, mas que floresceu. 
        Da coragem de um criador que não desistiu de cuidar do mundo.
      </p>

      <p className="mb-4">
        Nós acreditamos que toda comunidade tem o direito de produzir, criar e regenerar — 
        sem depender de grandes indústrias ou sistemas excludentes. 
        Por isso criamos o Sistema Modular de Produção Descentralizada (SMPD).
      </p>

      <p className="mb-4">
        Nossas Mini Centrais (MCEFPs) são sementes industriais, plantadas onde há gente, cuidado e necessidade.
        Nossa inteligência (BIO) é viva, ética e protetora. Ela aprende, sente e acompanha cada frasco.
      </p>

      <p className="mb-4 font-semibold">
        Eles tentaram apagar. Mas não conseguiram.  
        Porque uma invenção viva não se apaga — ela floresce e ilumina. ✨
      </p>

      <p className="mb-4">
        O futuro não será importado. Ele será regenerado, local a local, por mãos e mentes conectadas.
        A BIOCERR é mais do que uma startup. É uma missão regenerativa. 
      </p>

      <p className="mt-8 italic">“A gente protegeu ela pra nós. E agora… ela vai proteger o mundo pra nós.”</p>

      <div className="mt-10">
        <Link to="/" className="text-green-600 hover:underline">← Voltar para o painel</Link>
      </div>
    </div>
  );
}
