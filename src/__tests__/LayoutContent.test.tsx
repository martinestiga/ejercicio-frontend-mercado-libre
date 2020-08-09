import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import LayoutContent from '../LayoutContent';

describe('LayoutContent', () => {
  let shallowedLayoutContent: ShallowWrapper | undefined;

  const getLayoutContent = () => {
    if (!shallowedLayoutContent) {
      shallowedLayoutContent = shallow(<LayoutContent />);
    }
    return shallowedLayoutContent;
  };

  beforeEach(() => {
    shallowedLayoutContent = undefined;
  });

  it('Component should render without crashing', () => {
    expect(getLayoutContent()).toBeDefined();
  });
});
