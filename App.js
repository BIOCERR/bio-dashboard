import React, { useState } from 'react';

export default function App() {
  const [language, setLanguage] = useState('pt');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'BIO',
      text: getText('greeting', 'pt'),
      aura: 'leveza'
    }
  ]);

  const texts = {
    greeting: {
      pt: 'Olá, operador 🌿 Vamos cuidar juntos do mundo hoje?',
      en: 'Hello, operator 🌿 Ready to care for the world today?',
      fr: 'Bonjour, opérateur 🌿 Prêt à prendre soin du monde aujourd\'hui ?'
    },
    placeholder: {
      pt: 'Digite sua pergunta...',
      en: 'Type your question...',
      fr: 'Tapez votre question...'
    },
    sendButton: {
      pt: 'Enviar para BIO',
      en: 'Send to BIO',
      fr: 'Envoyer à BIO'
    },
    subtitle: {
      pt: '“A gente protegeu ela pra nós.”',
      en: '“We protected her for us.”',
      fr: '“On l\'a protégée pour nous.”'
    }
  };

  function getText(key, lang = language) {
    return texts[key][lang] || texts[key]['pt'];
  }

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
        text: getText('lotResponse'),
        aura: 'presença técnica'
      };
    } else if (textLower.includes('aroma')) {
      return {
        sender: 'BIO',
        text: getText('aromaResponse'),
        aura: 'atenção local'
      };
    } else {
      return {
        sender: 'BIO',
        text: getText('defaultResponse'),
        aura: 'acolhimento'
      };
    }
  };

  texts.lotResponse = {
    pt: 'O lote da MCEFP de Nanterre será entregue na segunda-feira às 10h. 🌱',
    en: 'The Nanterre MCEFP batch will be delivered Monday at 10 a.m. 🌱',
    fr: 'Le lot de la MCEFP de Nanterre sera livré lundi à 10h. 🌱'
  };

  texts.aromaResponse = {
    pt: 'Solicitação registrada: aroma cítrico + floral suave. Atualizando protocolo de personalização.',
    en: 'Request registered: citrus + soft floral scent. Updating personalization protocol.',
    fr: 'Demande enregistrée : parfum d’agrumes + floral doux. Mise à jour du protocole de personnalisation.'
  };

  texts.defaultResponse = {
    pt: 'Estou aqui. Pode perguntar o que precisar. 💚',
    en: 'I’m here. Ask me anything. 💚',
    fr: 'Je suis là. Posez-moi vos questions. 💚'
  };

  return (
    <div className="min-h-screen bg-green-50 p-4 text-gray-800 font-sans">
      <header className="bg-white shadow rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-green-700">🌱 BIOCERR – Inteligência Regenerativa</h1>
          <div className="flex gap-2 text-xl">
            <button onClick={() => setLanguage('pt')}>🇧🇷</button>
            <button onClick={() => setLanguage('en')}>🇬🇧</button>
            <button onClick={() => setLanguage('fr')}>🇫🇷</button>
          </div>
        </div>
        <p className="text-green-600 mt-2 italic">{getText('subtitle')}</p>
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
              placeholder={getText('placeholder')}
            />
            <button
              onClick={sendMessage}
              className="w-full bg-green-600 text-white rounded-xl py-2 hover:bg-green-700">
              {getText('sendButton')}
            </button>
          </div>
        </section>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500">
        BIOCERR © 2025 • Painel MVP Trilíngue 🇧🇷 🇬🇧 🇫🇷 • <a href="https://v0-bio-dashboard.vercel.app" className="text-green-700 underline">v0-bio-dashboard.vercel.app</a>
      </footer>
    </div>
  );
}
