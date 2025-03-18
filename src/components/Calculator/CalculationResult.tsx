import React from 'react';
import { GoldCalculation } from '../../types/gold';

interface Props {
  calculation: GoldCalculation;
}

const CalculationResult: React.FC<Props> = ({ calculation }) => {
  return (
    <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-md">
      <div className="text-sm text-gray-500 mb-2">{calculation.timestamp}</div>
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <span className="font-semibold">Input Weight:</span> {calculation.totalWeight.toFixed(3)}g
        </div>
        <div>
          <span className="font-semibold">Purity:</span> {calculation.purity.toFixed(2)} ({(calculation.purity * 10).toFixed(2)}%)
        </div>
        <div>
          <span className="font-semibold">Karat:</span> {calculation.karatValue.toFixed(2)}K
        </div>
        <div className="text-yellow-700">
          <span className="font-semibold">Pure Gold:</span> {calculation.goldWeight.toFixed(3)}g
        </div>
        <div className="text-amber-700">
          <span className="font-semibold">Copper:</span> {calculation.copperWeight.toFixed(3)}g
        </div>
        <div>
          <span className="font-semibold">Rate:</span> ${calculation.rate.toFixed(2)}/g
        </div>
        <div className="font-bold text-green-700">
          <span>Value:</span> ${calculation.totalValue.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CalculationResult;