import config from 'config';
import fetch from 'node-fetch';
import { ProductItem } from '../../../interfaces/ProductItem';
import categoriesService from './categoriesService';
import { buildPrice } from '../../../src/utils/price';
import MLApiError from '../types/MLApiError';

const getCategoriesFromResponse = async (data: any): Promise<string[]> => {
  let categories: string[] = [];

  // if "category" filter exists in "available_filters", we use that information
  const categoryAvailableFilter = data.available_filters.find((filter: any) => filter.id === 'category');

  if (categoryAvailableFilter) {
    // get category id with more results
    const categoryWithMaxResults = categoryAvailableFilter.values.reduce(
      (prev: any, current: any) => ((prev.results > current.results) ? prev : current),
    );

    categories = await categoriesService.getCategoryBreadCrumb(categoryWithMaxResults.id);
  } else {
    // otherwise, we look at "filters"
    const categoryFilter = data.filters.find((filter: any) => filter.id === 'category');

    if (categoryFilter) {
      // here, we already have the category information. So, we only need to get the "path from root"
      categories = categoriesService.getPathFromRoot(categoryFilter.values[0]);
    }
  }

  return categories;
};

const getItemsList = async (query: string) => {
  const response = await fetch(`${config.get('mercadoLibreApiUrl')}/sites/MLA/search?q=${query}&limit=4`);

  const data = await response.json();

  if (data.error) {
    throw new MLApiError(data.error);
  }

  const items: ProductItem[] = data.results.map((item: any) => ({
    id: item.id,
    title: item.title,
    price: buildPrice(item.price, item.currency_id),
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    address: item.address.state_name,
  }));

  const categories: string[] = await getCategoriesFromResponse(data);

  return {
    categories,
    items,
  };
};

const itemsListService = {
  getItemsList,
};

export default itemsListService;
