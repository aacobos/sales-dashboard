/**
 * Converte para formato de moeda brasileira (BRL)
 * @param value - Number to converted
 * @returns Converted BRL string
 */
export function currencyConverter(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
