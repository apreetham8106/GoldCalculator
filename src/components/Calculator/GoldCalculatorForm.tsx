import React, { useState } from 'react';
import { Scale, DollarSign, Percent } from 'lucide-react';
import { CalculatorFormData } from '../../types/gold';
import { MAX_PURITY, MIN_PURITY, DEFAULT_RATE, PURITY_STEP, VALIDATION_MESSAGES } from '../../constants/gold';
import { validatePurity } from '../../utils/calculations';
import InputField from '../UI/InputField';
import ValidationMessage from '../UI/ValidationMessage';

interface Props {
  onSubmit: (data: CalculatorFormData) => void;
}

const GoldCalculatorForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<CalculatorFormData>({
    totalWeight: 0,
    purity: 5.00,
    rate: DEFAULT_RATE
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.totalWeight) {
      newErrors.totalWeight = VALIDATION_MESSAGES.WEIGHT_REQUIRED;
    }
    if (!validatePurity(formData.purity)) {
      newErrors.purity = VALIDATION_MESSAGES.PURITY_RANGE;
    }
    if (!formData.rate) {
      newErrors.rate = VALIDATION_MESSAGES.RATE_REQUIRED;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof CalculatorFormData, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        label="Total Weight (grams)"
        icon={<Scale className="w-5 h-5" />}
        type="number"
        step="0.001"
        min="0"
        value={formData.totalWeight}
        onChange={(e) => handleInputChange('totalWeight', Number(e.target.value))}
        error={errors.totalWeight}
      />

      <InputField
        label="Desired Purity (1.00-10.00)"
        icon={<Percent className="w-5 h-5" />}
        type="number"
        step={PURITY_STEP}
        min={MIN_PURITY}
        max={MAX_PURITY}
        value={formData.purity}
        onChange={(e) => handleInputChange('purity', Number(e.target.value))}
        error={errors.purity}
      />
      <p className="text-sm text-gray-500 mt-1">
        Purity {formData.purity.toFixed(2)} = {(formData.purity * 10).toFixed(2)}% gold content
      </p>

      <InputField
        label="24K Gold Rate (per gram)"
        icon={<DollarSign className="w-5 h-5" />}
        type="number"
        step="0.01"
        min="0"
        value={formData.rate}
        onChange={(e) => handleInputChange('rate', Number(e.target.value))}
        error={errors.rate}
      />

      <button
        type="submit"
        className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition duration-200"
      >
        Calculate Composition
      </button>
    </form>
  );
};

export default GoldCalculatorForm;