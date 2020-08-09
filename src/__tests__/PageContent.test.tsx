import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import PageContent from '../PageContent';

describe('PageContent', () => {
  let shallowedPageContent: ShallowWrapper | undefined;

  const getPageContent = () => {
    if (!shallowedPageContent) {
      shallowedPageContent = shallow(<PageContent />);
    }
    return shallowedPageContent;
  };

  beforeEach(() => {
    shallowedPageContent = undefined;
  });

  it('Component should render without crashing', () => {
    expect(getPageContent()).toBeDefined();
  });
});
