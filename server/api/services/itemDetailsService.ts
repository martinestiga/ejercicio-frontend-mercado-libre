import config from 'config';
import fetch from 'node-fetch';
import categoriesService from './categoriesService';
import { ProductDetail } from '../../../interfaces/ProductDetail';
import { buildPrice } from '../../../src/utils/price';
import MLApiError from '../types/MLApiError';

const getItemDetails = async (itemId: string): Promise<ProductDetail | null> => {
  const mercadoLibreApiUrl: string = config.get('mercadoLibreApiUrl');

  const responses = await Promise.all([
    fetch(`${mercadoLibreApiUrl}/items/${itemId}`),
    fetch(`${mercadoLibreApiUrl}/items/${itemId}/description`),
  ]);

  const [itemData, descriptionData] = await Promise.all(responses.map((response) => response.json()));

  if (itemData.error) {
    throw new MLApiError(itemData.error);
  }

  const categories: string[] = await categoriesService.getCategoryBreadCrumb(itemData.category_id);

  return {
    id: itemData.id,
    title: itemData.title,
    price: buildPrice(itemData.price, itemData.currency_id),
    picture: itemData.pictures[0].secure_url,
    condition: itemData.condition,
    free_shipping: itemData.shipping.free_shipping,
    sold_quantity: itemData.sold_quantity,
    description: descriptionData.plain_text || '',
    categories,
  };
};

const itemDetailsService = {
  getItemDetails,
};

export default itemDetailsService;
