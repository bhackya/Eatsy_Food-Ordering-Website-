import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Eatsy</h3>
            <p className="mb-4 text-gray-400">
              Making campus dining easier and more enjoyable for students and staff.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#e0a400] transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-[#e0a400] transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-[#e0a400] transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/menu" className="hover:text-[#e0a400] transition-colors">
                Menu
              </Link>
              <Link to="/feedback" className="hover:text-[#e0a400] transition-colors">
                Feedback
              </Link>
              <Link to="/login" className="hover:text-[#e0a400] transition-colors">
                Login
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-2">
              <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-[#e0a400] transition-colors">
                <Phone size={18} />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:support@eatsy.com" className="flex items-center space-x-2 hover:text-[#e0a400] transition-colors">
                <Mail size={18} />
                <span>support@eatsy.com</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>University Campus, Building 4</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Eatsy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;