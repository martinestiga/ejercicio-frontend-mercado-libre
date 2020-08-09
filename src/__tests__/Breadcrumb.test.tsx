import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Breadcrumb, { BreadcrumbProps } from '../Breadcrumb';

describe('Breadcrumb', () => {
  const props: BreadcrumbProps = {
    categories: ['cat1', 'cat2', 'cat3'],
  };
  let shallowedBreadcrumb: ShallowWrapper | undefined;

  const getBreadcrumb = () => {
    if (!shallowedBreadcrumb) {
      shallowedBreadcrumb = shallow(<Breadcrumb {...props} />);
    }
    return shallowedBreadcrumb;
  };

  beforeEach(() => {
    shallowedBreadcrumb = undefined;
  });

  it('Component should render without crashing', () => {
    expect(getBreadcrumb()).toBeDefined();
  });

  it('Should render correct number of categories', () => {
    const wrapper = getBreadcrumb();
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('Should render correct categories', () => {
    const wrapper = getBreadcrumb();
    expect(wrapper.find('li').at(0).text()).toBe(props.categories[0]);
    expect(wrapper.find('li').at(1).text()).toBe(props.categories[1]);
    expect(wrapper.find('li').at(2).text()).toBe(props.categories[2]);
  });
});
