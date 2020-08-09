import config from 'config';
import fetch from 'node-fetch';
import MLApiError from '../types/MLApiError';

const getCategory = async (categoryId: string) => {
  const response = await fetch(`${config.get('mercadoLibreApiUrl')}/categories/${categoryId}`);
  const data = await response.json();

  if (data.error) {
    throw new MLApiError(data.error);
  }

  return data;
};

const getPathFromRoot = (category: any): string[] => category.path_from_root.map((cat: any) => cat.name);

const getCategoryBreadCrumb = async (categoryId: string): Promise<string[]> => {
  const category = await getCategory(categoryId);

  if (category) {
    return getPathFromRoot(category);
  }
  return [];
};

const categoriesService = {
  getCategoryBreadCrumb,
  getPathFromRoot,
};

export default categoriesService;
