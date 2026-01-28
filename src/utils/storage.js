// src/utils/storage.js

const SALES_KEY = "sales";

/**
 * Get sales from localStorage
 * @returns {Array}
 */
export function getSales() {
  const data = localStorage.getItem(SALES_KEY);
  return data ? JSON.parse(data) : [];
}

/**
 * Save sales to localStorage
 * @param {Array} sales
 */
export function saveSales(sales) {
  localStorage.setItem(SALES_KEY, JSON.stringify(sales));
}
