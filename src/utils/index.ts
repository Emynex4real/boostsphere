// Add your utility functions here
export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};