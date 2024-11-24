import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi! I'm the Eatsy AI assistant. How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    const responses = {
      menu: "Sure! Our menu includes a variety of items like Dosa, Idli, and more. What would you like to know about?",
      order: "You can order by selecting items from the menu and adding them to the cart.",
      hours: "We're open from 9 AM to 9 PM every day. Let us know when you'd like to visit!",
      contact: "You can reach us at (555) 123-4567 or email support@eatsy.com for assistance."
    };
  
    // Determine AI response based on user input keywords
    let aiResponse = "I'm here to help with menu questions and ordering assistance.";
    for (const [keyword, response] of Object.entries(responses)) {
      if (input.toLowerCase().includes(keyword)) {
        aiResponse = response;
        break;
      }
    }
  

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for your message! I'm here to help with menu questions and ordering assistance.",
        isUser: false
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-[#e0a400] text-white p-4 rounded-full shadow-lg hover:bg-[#c89200] transition-colors duration-200 z-50"
        style={{ display: isOpen ? 'none' : 'block' }}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl z-50">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold">Eatsy Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-[#e0a400] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0a400]"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-[#e0a400] text-white rounded-lg hover:bg-[#c89200] transition-colors duration-200"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;