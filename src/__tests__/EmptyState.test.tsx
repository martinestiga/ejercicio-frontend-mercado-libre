import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import EmptyState, { EmptyStateProps } from '../EmptyState';

describe('EmptyState', () => {
  const props: EmptyStateProps = {
    text: 'Error message',
  };
  let shallowedEmptyState: ShallowWrapper | undefined;

  const getEmptyState = () => {
    if (!shallowedEmptyState) {
      shallowedEmptyState = shallow(<EmptyState {...props} />);
    }
    return shallowedEmptyState;
  };

  beforeEach(() => {
    shallowedEmptyState = undefined;
  });

  it('Component should render without crashing', () => {
    expect(getEmptyState()).toBeDefined();
  });

  it('Component should render `Home` link', () => {
    const wrapper = getEmptyState();
    expect(wrapper.find('a[href="/"]').exists()).toBeTruthy();
  });
});
