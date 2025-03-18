// Gold standards
export const KARAT_24 = 24;
export const DEFAULT_RATE = 2000; // Default rate for 24K gold
export const MAX_PURITY = 10.00; // Maximum purity scale
export const MIN_PURITY = 1.00; // Minimum purity scale
export const PURITY_STEP = 0.01; // Step for decimal precision

// Conversion factors
export const PURITY_TO_PERCENTAGE = 10; // Scale of 1-10 to percentage (x10)
export const KARAT_TO_PERCENTAGE = 100 / KARAT_24; // Convert karat to percentage

// Validation messages
export const VALIDATION_MESSAGES = {
  WEIGHT_REQUIRED: 'Total weight is required',
  PURITY_RANGE: 'Purity must be between 1.00 and 10.00',
  RATE_REQUIRED: 'Rate is required',
};