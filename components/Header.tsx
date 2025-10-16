
import React from 'react';

const Header: React.FC = () => {
  const navItems = [
    { id: 'overview', name: '行程總覽' },
    { id: 'transport', name: '交通住宿' },
    { id: 'daily', name: '每日行程' },
    { id: 'activities', name: '美食體驗' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
             <i className="fas fa-torii-gate text-purple-600 text-2xl"></i>
            <span className="font-bold text-xl ml-2 text-gray-800">Kyoto Planner</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
