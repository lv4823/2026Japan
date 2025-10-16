
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-12 scroll-mt-16">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-purple-300 pb-2">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
