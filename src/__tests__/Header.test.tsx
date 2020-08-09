import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Header, { HeaderProps } from '../Header';

describe('Header', () => {
  const props: HeaderProps = {
    searchQuery: '',
  };
  let shallowedHeader: ShallowWrapper | undefined;

  const getHeader = () => {
    if (!shallowedHeader) {
      shallowedHeader = shallow(<Header {...props} />);
    }
    return shallowedHeader;
  };

  beforeEach(() => {
    shallowedHeader = undefined;
  });

  it('Component should render without crashing', () => {
    expect(getHeader()).toBeDefined();
  });
});
