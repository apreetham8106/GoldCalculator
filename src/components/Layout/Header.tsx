import React from 'react';
import { Calculator } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <Calculator className="w-8 h-8 text-yellow-600 mr-2" />
      <h1 className="text-3xl font-bold text-gray-800">Gold-Copper Alloy Calculator</h1>
    </div>
  );
};

export default Header;