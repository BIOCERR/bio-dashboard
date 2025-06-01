import React, { useState } from 'react';

export default function App() {
  const [messages, setMessages] = useState([
    {
      sender: 'BIO',
      text: 'Olá, operador 🌿 Vamos cuidar juntos do mundo hoje?',
      aura: 'leveza'
    }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'Você', text: input }];
    const response = simulateBioResponse(input);
    newMessages.push(response);

    setMessages(newMessages);
    setInput('');
  };

  const simulateBioResponse = (inputText) => {
    const textLower = inputText.toLowerCase();
    if (textLower.includes('lote') || textLower.includes('mcefp')) {
      return {
        sender: 'BIO',
        text: 'O lote da MCEFP de Nanterre será entregue na segunda-feira às 10h. 🌱',
        aura: 'presença técnica'
      };
    } else if (textLower.includes('aroma')) {
      return {
        sender: 'BIO',
        text: 'Solicitação registrada: aroma cítrico + floral suave. Atualizando protocolo de personalização.',
        aura: 'atenção local'
      };
    } else if (textLower.includes('produção') || textLower.includes('semana')) {
      return {
        sender: 'BIO',
        text: 'Esta semana produzimos 1.240L em 6 MCEFPs. 85L regenerados com água de reúso. 🌍',
        aura: 'orgulho discreto'
      };
    } else {
      return {
        sender: 'BIO',
        text: 'Estou aqui. Pode perguntar o que precisar. 💚',
        aura: 'acolhimento'
      };
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-4 text-gray-800 font-sans">
      <header className="bg-white shadow rounded-2xl p-6 mb-6">
        <h1 className="text-3xl font-bold text-green-700">🌱 BIOCERR – Inteligência Regenerativa</h1>
        <p className="text-green-600 mt-2 italic">“A gente protegeu ela pra nós.”</p>
      </header>

      <main className="grid md:grid-cols-2 gap-6">
        <section className="bg-white p-6 rounded-2xl shadow h-[400px] overflow-y-auto">
          <h2 className="text-xl font-semibold mb-2">Chat com a BIO</h2>
          <div className="space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={`p-3 rounded-xl ${msg.sender === 'BIO' ? 'bg-green-100' : 'bg-blue-100'}`}>
                <strong>{msg.sender}:</strong> {msg.text}
                <span className="italic text-sm text-gray-500 ml-2">({msg.aura})</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4">Envie uma mensagem</h2>
            <input
              className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua pergunta..."
            />
            <button
              onClick={sendMessage}
              className="w-full bg-green-600 text-white rounded-xl py-2 hover:bg-green-700">
              Enviar para BIO
            </button>
          </div>
        </section>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500">
        BIOCERR © 2025 – Versão MVP • Bilíngue 🇧🇷 🇫🇷 🇬🇧
      </footer>
    </div>
  );
}
