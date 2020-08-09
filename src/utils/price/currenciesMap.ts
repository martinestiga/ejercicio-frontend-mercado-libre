import { CurrencyInfo } from '../../../interfaces/CurrencyInfo';

const currenciesMap: {[key: string]: CurrencyInfo} = {
  ARS: {
    description: 'Peso argentino',
    symbol: '$',
    decimalPlaces: 2,
  },
  BRL: {
    description: 'Real',
    symbol: 'R$',
    decimalPlaces: 2,
  },
  CLF: {
    description: 'Unidad de Fomento',
    symbol: 'UF',
    decimalPlaces: 2,
  },
  CLP: {
    description: 'Peso Chileno',
    symbol: '$',
    decimalPlaces: 0,
  },
  COP: {
    description: 'Peso colombiano',
    symbol: '$',
    decimalPlaces: 0,
  },
  CRC: {
    description: 'Colones',
    symbol: '¢',
    decimalPlaces: 2,
  },
  DOP: {
    description: 'Peso Dominicano',
    symbol: '$',
    decimalPlaces: 2,
  },
  EUR: {
    description: 'Euro',
    symbol: '€',
    decimalPlaces: 2,
  },
  MXN: {
    description: 'Peso Mexicano',
    symbol: '$',
    decimalPlaces: 2,
  },
  PAB: {
    description: 'Balboa',
    symbol: 'B/.',
    decimalPlaces: 2,
  },
  PEN: {
    description: 'Soles',
    symbol: 'S/.',
    decimalPlaces: 2,
  },
  USD: {
    description: 'Dólar',
    symbol: 'U$S',
    decimalPlaces: 2,
  },
  UYU: {
    description: 'Peso Uruguayo',
    symbol: '$',
    decimalPlaces: 2,
  },
  VEF: {
    description: 'Bolivar fuerte',
    symbol: 'Bs.',
    decimalPlaces: 2,
  },
  GTQ: {
    description: 'Quetzal Guatemalteco',
    symbol: 'Q',
    decimalPlaces: 2,
  },
  BOB: {
    description: 'Boliviano',
    symbol: 'Bs',
    decimalPlaces: 2,
  },
  HNL: {
    description: 'Lempira',
    symbol: 'L',
    decimalPlaces: 0,
  },
  NIO: {
    description: 'Córdoba',
    symbol: 'C$',
    decimalPlaces: 0,
  },
  PYG: {
    description: 'Guaraní',
    symbol: '₲',
    decimalPlaces: 0,
  },
  CUC: {
    description: 'Peso Cubano Convertible',
    symbol: '$',
    decimalPlaces: 2,
  },
};

export default currenciesMap;
