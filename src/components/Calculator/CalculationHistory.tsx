import React from 'react';
import { GoldCalculation } from '../../types/gold';
import CalculationResult from './CalculationResult';

interface Props {
  calculations: GoldCalculation[];
}

const CalculationHistory: React.FC<Props> = ({ calculations }) => {
  return (
    <div className="space-y-4 max-h-[400px] overflow-y-auto">
      {calculations.map((calc, index) => (
        <CalculationResult key={index} calculation={calc} />
      ))}
      {calculations.length === 0 && (
        <p className="text-gray-500 text-center">No calculations yet</p>
      )}
    </div>
  );
};

export default CalculationHistory;