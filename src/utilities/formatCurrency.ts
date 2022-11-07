const CURRENCUY_FORMATER = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'RUB',
});

export const formatCurrency = (number: number) => {
  return CURRENCUY_FORMATER.format(number);
};
