import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Layout, { LayoutProps } from '../Layout';

describe('Layout', () => {
  const props: LayoutProps = {
    searchQuery: '',
  };
  let shallowedLayout: ShallowWrapper | undefined;

  const getLayout = () => {
    if (!shallowedLayout) {
      shallowedLayout = shallow(<Layout {...props} />);
    }
    return shallowedLayout;
  };

  beforeEach(() => {
    shallowedLayout = undefined;
  });

  it('Component should render without crashing', () => {
    expect(getLayout()).toBeDefined();
  });
});
