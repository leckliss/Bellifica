import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import './chatbot.css';

function ChatBot() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const firebaseConfig = {
    apiKey: "AIzaSyAeqhx9yECmTc6tzuCM-63gwpe18P_oUeA",
    authDomain: "bellifica-13482.firebaseapp.com",
    projectId: "bellifica-13482",
    storageBucket: "bellifica-13482.appspot.com",
    messagingSenderId: "882105306865",
    appId: "1:882105306865:web:c0f84e4f98fbc4e23a6350",
    measurementId: "G-Y0WYVDRHRE"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const messagesCollectionRef = collection(db, "mensagens");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return; // Verifica se a entrada não está vazia

    try {
      await addDoc(messagesCollectionRef, {
        prompt: inputValue, // Conteúdo da mensagem
        createdAt: new Date(), // Carimbo de data/hora
      });

      setInputValue(''); // Limpa o campo de entrada após o envio
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };


  useEffect(() => {
    const q = query(messagesCollectionRef, orderBy("createdAt", "desc"), limit(10));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messageData = snapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        .reverse();

      setMessages(messageData);
    });

    return () => {
      unsubscribe(); // Desinscreva quando o componente for desmontado
    };
  }, [messagesCollectionRef]);

  const renderMessages = () => {
    return messages.map((message) => (
      <div key={message.id} className="message-group">

        <div className="message user-message">{message.prompt}</div>

        {message.resposta && <div className="message bot-message">{message.resposta}</div>}
      </div>
    ));
  };

  const [nome, setNome] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const storedNome = localStorage.getItem('nome');

    setNome(storedNome);
    setMsg(`Olá ${nome}, precisa de ajuda?`);

  }, []);

  return (
    <div className="chat">
      <div className="messages-container">{renderMessages()}</div>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="input-field"
          placeholder={msg}
        />
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
}

export default ChatBot;