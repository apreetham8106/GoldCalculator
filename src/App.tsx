import React, { useState } from 'react';
import Header from './components/Layout/Header';
import GoldCalculatorForm from './components/Calculator/GoldCalculatorForm';
import CalculationHistory from './components/Calculator/CalculationHistory';
import { calculateAlloyComposition, calculateGoldValue } from './utils/calculations';
import { GoldCalculation, CalculatorFormData } from './types/gold';

function App() {
  const [calculations, setCalculations] = useState<GoldCalculation[]>([]);

  const handleCalculation = (data: CalculatorFormData) => {
    const { goldWeight, copperWeight, karatValue } = calculateAlloyComposition(
      data.totalWeight,
      data.purity
    );
    
    const totalValue = calculateGoldValue(goldWeight, data.rate);

    const newCalculation: GoldCalculation = {
      totalWeight: data.totalWeight,
      purity: data.purity,
      goldWeight,
      copperWeight,
      karatValue,
      rate: data.rate,
      totalValue,
      timestamp: new Date().toLocaleString()
    };

    setCalculations([newCalculation, ...calculations]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Calculate Gold-Copper Alloy</h2>
            <GoldCalculatorForm onSubmit={handleCalculation} />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Calculations</h2>
            <CalculationHistory calculations={calculations} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;