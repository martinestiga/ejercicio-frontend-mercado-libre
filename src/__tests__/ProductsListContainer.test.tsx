import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, ShallowWrapper, mount, ReactWrapper } from 'enzyme';
import ProductsListContainer, { ProductsListContainerProps } from '../ProductsList/ProductsListContainer';
import itemsListResponseMock from '../../server/api/__mocks__/itemsListResponse';

const spyAndMockFetch = (status = 200, mockData = {}) => {
  const mockFetchPromise = (status > 200) ? Promise.reject() : Promise.resolve({
    json: () => Promise.resolve(mockData),
    status,
    ok: true,
  });
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  jest.spyOn(global, 'fetch');
};

describe('ProductsListContainer', () => {
  const props: ProductsListContainerProps = {
    searchQuery: 'Chromecast',
  };
  let shallowedWrapper: ShallowWrapper | undefined;

  const getWrapper = () => {
    if (!shallowedWrapper) {
      shallowedWrapper = shallow(<ProductsListContainer {...props} />);
    }
    return shallowedWrapper;
  };

  beforeEach(() => {
    shallowedWrapper = undefined;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Component should render without crashing', () => {
    expect(getWrapper()).toBeDefined();
  });

  it('Should render correctly with error response', async () => {
    spyAndMockFetch(500);

    let wrapper: ReactWrapper;
    await act(async () => {
      wrapper = await mount(<ProductsListContainer {...props} />);
    });

    expect(global.fetch).toHaveBeenCalledWith(`/api/items?q=${props.searchQuery}`);

    expect(wrapper.find('SkeletonProduct')).toHaveLength(4);

    await act(async () => {
      wrapper.update();
    });

    expect(wrapper.text()).toBe('error-message');
  });

  it('Should render correctly without results', async () => {
    spyAndMockFetch(200, {
      items: [],
    });

    let wrapper: ReactWrapper;
    await act(async () => {
      wrapper = await mount(<ProductsListContainer {...props} />);
    });

    expect(global.fetch).toHaveBeenCalledWith(`/api/items?q=${props.searchQuery}`);

    expect(wrapper.find('SkeletonProduct')).toHaveLength(4);

    await act(async () => {
      wrapper.update();
    });

    expect(wrapper.text()).toBe('no-results');
  });

  it('Should render correctly with items', async () => {
    spyAndMockFetch(200, itemsListResponseMock);

    let wrapper: ReactWrapper;
    await act(async () => {
      wrapper = await mount(<ProductsListContainer {...props} />);
    });

    expect(global.fetch).toHaveBeenCalledWith(`/api/items?q=${props.searchQuery}`);

    expect(wrapper.find('SkeletonProduct')).toHaveLength(4);

    await act(async () => {
      wrapper.update();
    });

    expect(wrapper.find('Product')).toHaveLength(itemsListResponseMock.items.length);
  });
});
