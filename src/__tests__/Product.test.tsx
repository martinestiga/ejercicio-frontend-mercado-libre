import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Product, { ProductProps } from '../ProductsList/Product';

describe('Product', () => {
  const props: ProductProps = {
    id: 'MLA832079323',
    title: ' Google Chromecast 3rd Generation Full Hd Carbón Con Memoria Ram De 512mb',
    price: {
      currency: '$',
      amount: 5030,
      decimals: 0,
    },
    picture: 'http://mla-s2-p.mlstatic.com/620605-MLA32691559317_102019-I.jpg',
    isFreeShipping: true,
    address: 'Capital Federal',
  };
  let shallowedProduct: ShallowWrapper | undefined;

  const getProduct = () => {
    if (!shallowedProduct) {
      shallowedProduct = shallow(<Product {...props} />);
    }
    return shallowedProduct;
  };

  beforeEach(() => {
    shallowedProduct = undefined;
  });

  it('Component should render without crashing', () => {
    expect(getProduct()).toBeDefined();
  });

  it('Should render free shipping icon', () => {
    const wrapper = getProduct();
    expect(wrapper.find('.free-shipping-icon')).toHaveLength(1);
  });

  it('Should not render free shipping icon', () => {
    props.isFreeShipping = false;
    const wrapper = getProduct();
    expect(wrapper.find('.free-shipping-icon')).toHaveLength(0);
  });
});
