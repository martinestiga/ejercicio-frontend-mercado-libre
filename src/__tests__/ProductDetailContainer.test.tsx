import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ProductDetailContainer, { ProductDetailContainerProps } from '../ProductDetail/ProductDetailContainer';

describe('ProductDetailContainer', () => {
  const props: ProductDetailContainerProps = {
    item: {
      id: 'MLA715635100',
      title: 'Xiaomi Mi Band 4 Smartwatch Reloj Inteligente Version Global Caja Sellada Original Smart Supera Band 3',
      price: {
        currency: '$',
        amount: 2979,
        decimals: 0,
      },
      picture: 'https://mla-s1-p.mlstatic.com/916416-MLA31293979258_072019-O.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 5000,
      description: 'Description mock',
      categories: [
        'Celulares y Teléfonos',
        'Smartwatches y Accesorios',
        'Smartwatch',
      ],
    },
  };
  let shallowedProductDetailContainer: ShallowWrapper | undefined;

  const getProductDetailContainer = () => {
    if (!shallowedProductDetailContainer) {
      shallowedProductDetailContainer = shallow(<ProductDetailContainer {...props} />);
    }
    return shallowedProductDetailContainer;
  };

  beforeEach(() => {
    shallowedProductDetailContainer = undefined;
  });

  it('Component should render without crashing', () => {
    expect(getProductDetailContainer()).toBeDefined();
  });

  it('Should render Breadcrumb component', () => {
    const wrapper = getProductDetailContainer();
    expect(wrapper.find('Breadcrumb')).toHaveLength(1);
  });

  it('Should not render Breadcrumb component', () => {
    props.item.categories = [];
    const wrapper = getProductDetailContainer();
    expect(wrapper.find('Breadcrumb')).toHaveLength(0);
  });
});
