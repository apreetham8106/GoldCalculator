export interface GoldCalculation {
  totalWeight: number;
  purity: number;
  goldWeight: number;
  copperWeight: number;
  rate: number;
  totalValue: number;
  karatValue: number;
  timestamp: string;
}

export interface CalculatorFormData {
  totalWeight: number;
  purity: number;
  rate: number;
}

export interface GoldComposition {
  goldWeight: number;
  copperWeight: number;
  karatValue: number;
}