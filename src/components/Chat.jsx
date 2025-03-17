import { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Chat({ onLogout }) {
  const [messages, setMessages] = useState(() => JSON.parse(localStorage.getItem('chatHistory')) || []);
  const chatAreaRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
    chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = (text) => {
    const userMessage = { text, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    // Mock model reply
    setTimeout(() => {
      const modelMessage = { text: 'Hello! How can I help you today?', isUser: false };
      setMessages((prev) => [...prev, modelMessage]);
    }, 500);
  };

  return (
    <div className="chat-container">
      <Header onLogout={onLogout} />
      <main ref={chatAreaRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.isUser ? 'user-message' : 'model-message'}`}>
            {msg.text}
          </div>
        ))}
      </main>
      <Footer onSend={sendMessage} />
    </div>
  );
}