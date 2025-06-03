
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', emoji: '🏠' },
    { name: 'Menu', href: '#menu', emoji: '🍗' },
    { name: 'Gallery', href: '#gallery', emoji: '📸' },
    { name: 'Reviews', href: '#reviews', emoji: '⭐' },
    { name: 'Contact', href: '#footer', emoji: '📞' },
  ];

  return (
    <header className="bg-black shadow-2xl sticky top-0 z-50 border-b-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="bg-yellow-400 p-2 rounded-full mr-3 animate-pulse">
              <Zap className="text-black w-6 h-6" />
            </div>
            <img 
              src="/lovable-uploads/82b93cff-c17f-4053-97bb-352fe29e0899.png" 
              alt="HFC Logo" 
              className="h-14 w-auto transform hover:scale-110 transition-transform duration-300"
            />
            <div className="ml-2 bg-yellow-400 text-black px-3 py-1 rounded-full font-black text-sm transform -rotate-6">
              EPIC!
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="bg-yellow-400 text-black hover:bg-white hover:text-black px-4 py-2 rounded-full font-black text-sm transition-all duration-300 transform hover:scale-110 hover:rotate-3 border-2 border-yellow-400 shadow-lg"
              >
                <span className="mr-1">{item.emoji}</span>
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-yellow-400 text-black hover:bg-white hover:text-black p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-yellow-400 border-t-4 border-white rounded-b-3xl">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block bg-black text-yellow-400 hover:bg-white hover:text-black px-4 py-3 rounded-full font-black text-center transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2">{item.emoji}</span>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
