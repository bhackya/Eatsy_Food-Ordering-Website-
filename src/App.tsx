import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Feedback from './pages/Feedback';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import ChatBot from './components/ChatBot';

function App() {
  useEffect(() => {
    // Create and configure the chatbot script
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute("chatbotId", "0mooMcMYHlp0weom7-748");
    script.setAttribute("domain", "www.chatbase.co");

    // Append the script to the document head
    document.head.appendChild(script);

    // Set up chatbot config
    window.embeddedChatbotConfig = {
      chatbotId: "0mooMcMYHlp0weom7-748",
      domain: "www.chatbase.co"
    };

    // Clean up script on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/feedback" element={<Feedback />} />
              </Routes>
            </main>
            <ChatBot />
            <Footer />
            <Toaster position="bottom-right" />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
