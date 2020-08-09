import currenciesMap from './currenciesMap';
import { CurrencyInfo } from '../../../interfaces/CurrencyInfo';
import { Price } from '../../../interfaces/Price';

export const getCurrencyInfo = (currencyId: string): CurrencyInfo => currenciesMap[currencyId];

// Given a number, this function converts it to a string with a thousands separator
export const withThousandSeparator = (value: number, separator = '.'): string => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const buildPrice = (price: number, currencyId: string): Price => {
  const currencyInfo: CurrencyInfo = getCurrencyInfo(currencyId);

  return {
    currency: currencyInfo.symbol,
    amount: Math.trunc(price),
    decimals: Number.parseInt(price.toString().split('.')[1], 10) || 0,
  };
};
