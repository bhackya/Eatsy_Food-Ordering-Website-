import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import eatsyLogo11 from '../assets/eatsylogo11.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
          
          <img src={eatsyLogo11} alt="Eatsy Logo" style={{ height: '130px', width: 'auto' }} />

          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/feedback">Feedback</NavLink>
            
            {/* Cart Icon */}
            <Link 
              to="/cart" 
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#e0a400] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Auth Button */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <User className="w-6 h-6" />
                <span>{user?.name}</span>
              </div>
            ) : (
              <Link to="/login" className="btn-primary">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/menu" onClick={() => setIsOpen(false)}>
                Menu
              </MobileNavLink>
              <MobileNavLink to="/feedback" onClick={() => setIsOpen(false)}>
                Feedback
              </MobileNavLink>
              <MobileNavLink to="/cart" onClick={() => setIsOpen(false)}>
                Cart ({cartItems.length})
              </MobileNavLink>
              {!isAuthenticated && (
                <Link 
                  to="/login" 
                  className="btn-primary text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-[#e0a400] transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-[#e0a400] transition-colors duration-200 block px-4 py-2"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default Navbar;