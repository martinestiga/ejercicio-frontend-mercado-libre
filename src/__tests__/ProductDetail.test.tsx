import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ProductDetail, { ProductDetailProps } from '../ProductDetail/ProductDetail';

describe('ProductDetail', () => {
  const props: ProductDetailProps = {
    title: 'Xiaomi Mi Band 4 Smartwatch Reloj Inteligente Version Global Caja Sellada Original Smart Supera Band 3',
    price: {
      currency: '$',
      amount: 2979,
      decimals: 0,
    },
    picture: 'https://mla-s1-p.mlstatic.com/916416-MLA31293979258_072019-O.jpg',
    condition: 'new',
    soldQuantity: 5000,
    description: 'Description mock',
  };
  let shallowedProductDetail: ShallowWrapper | undefined;

  const getProductDetail = () => {
    if (!shallowedProductDetail) {
      shallowedProductDetail = shallow(<ProductDetail {...props} />);
    }
    return shallowedProductDetail;
  };

  beforeEach(() => {
    shallowedProductDetail = undefined;
  });

  it('Component should render without crashing', () => {
    expect(getProductDetail()).toBeDefined();
  });

  it('Should render "new" condition', () => {
    const wrapper = getProductDetail();
    expect(wrapper.find('.title-info').text().includes('new')).toBeTruthy();
  });

  it('Should render "used" condition', () => {
    props.condition = 'used';
    const wrapper = getProductDetail();
    expect(wrapper.find('.title-info').text().includes('used')).toBeTruthy();
  });

  it('Should not render condition', () => {
    props.condition = 'not_specified';
    const wrapper = getProductDetail();
    expect(wrapper.find('.title-info').text().includes('new')).toBeFalsy();
    expect(wrapper.find('.title-info').text().includes('used')).toBeFalsy();
  });

  it('Should render correctly sold quantity', () => {
    const wrapper = getProductDetail();
    expect(wrapper.find('.title-info').text().includes(props.soldQuantity.toString())).toBeTruthy();
  });

  it('Should not render sold quantity', () => {
    props.soldQuantity = 0;
    const wrapper = getProductDetail();
    expect(wrapper.find('.title-info').text().includes(props.soldQuantity.toString())).toBeFalsy();
  });

  it('Should render description', () => {
    const wrapper = getProductDetail();
    expect(wrapper.find('.description')).toHaveLength(1);
  });

  it('Should not render description', () => {
    props.description = '';
    const wrapper = getProductDetail();
    expect(wrapper.find('.description')).toHaveLength(0);
  });
});
