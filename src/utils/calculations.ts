import { PURITY_TO_PERCENTAGE, KARAT_24, KARAT_TO_PERCENTAGE } from '../constants/gold';
import { GoldComposition } from '../types/gold';

export const calculateAlloyComposition = (
  totalWeight: number,
  purity: number
): GoldComposition => {
  // Convert purity scale (1.00-10.00) to percentage (10-100)
  const purityPercentage = Number((purity * PURITY_TO_PERCENTAGE).toFixed(2));
  
  // Calculate pure gold weight with 2 decimal precision
  const goldWeight = Number((totalWeight * purityPercentage / 100).toFixed(3));
  
  // Calculate copper weight needed with 2 decimal precision
  const copperWeight = Number((totalWeight - goldWeight).toFixed(3));
  
  // Calculate karat value (24K * purity percentage)
  const karatValue = Number((KARAT_24 * purityPercentage / 100).toFixed(2));

  return {
    goldWeight,
    copperWeight,
    karatValue
  };
};

export const calculateGoldValue = (goldWeight: number, rate: number): number => {
  return Number((goldWeight * rate).toFixed(2));
};

export const validatePurity = (purity: number): boolean => {
  return purity >= 1.00 && purity <= 10.00;
};