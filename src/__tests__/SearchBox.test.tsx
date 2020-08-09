import React from 'react';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import SearchBox, { SearchBoxProps } from '../SearchBox';

describe('SearchBox', () => {
  const props: SearchBoxProps = {
    searchQuery: 'product 1',
    changeSearchQuery: jest.fn(),
  };
  let shallowedWrapper: ShallowWrapper | undefined;

  const getSearchBox = () => {
    if (!shallowedWrapper) {
      shallowedWrapper = shallow(<SearchBox {...props} />);
    }
    return shallowedWrapper;
  };

  beforeEach(() => {
    shallowedWrapper = undefined;
  });

  it('Component should render without crashing', () => {
    expect(getSearchBox()).toBeDefined();
  });

  it('should call `changeSearchQuery` correctly', () => {
    const tree = mount(<SearchBox {...props} />);
    const preventDefault = jest.fn();

    tree.find('input').simulate('change', { target: { value: '' } });
    tree.find('form').simulate('submit', { preventDefault });
    expect(props.changeSearchQuery).not.toHaveBeenCalled();
    expect(preventDefault).toHaveBeenCalled();

    const newValue = 'Foo';
    tree.find('input').simulate('change', { target: { value: newValue } });
    tree.find('form').simulate('submit');
    expect(props.changeSearchQuery).toHaveBeenCalledWith(newValue);
  });

  it('should execute regular form submit', () => {
    const tree = mount(<SearchBox />);
    const preventDefault = jest.fn();

    tree.find('input').simulate('change', { target: { value: 'Foo' } });
    tree.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).not.toHaveBeenCalled();
  });
});
