/**
 * @jest-environment node
 */

import express, { Application } from 'express';
import request from 'supertest';
import config from 'config';
import nock from 'nock';
import apiRouter from '../routes';
import { Author } from '../../../interfaces/Author';
import searchResponseMock from '../__mocks__/searchResponse';
import itemsListResponseMock from '../__mocks__/itemsListResponse';
import itemsResponseMock from '../__mocks__/itemsResponse';
import itemsDescriptionResponseMock from '../__mocks__/itemsDescriptionResponse';
import categoriesResponseMock from '../__mocks__/categoriesResponse';
import itemDetailResponseMock from '../__mocks__/itemDetailResponse';

const app: Application = express();
app.use('/api', apiRouter);

const author: Author = config.get('author');

const testAuthor = (response) => {
  expect(response.body).toHaveProperty('author');
  expect(response.body.author).toEqual(author);
};

describe('API', () => {
  beforeEach(() => {

  });

  it('404', () => {
    ['/api', '/api/test'].forEach(async (path: string) => {
      const response = await request(app).get(path);

      expect(response.statusCode).toEqual(404);
      expect(response.body).toHaveProperty('error', 'not found');
      testAuthor(response);
    });
  });

  it('products list without requesting ML categories endpoint', async () => {
    const scope = nock(config.get('mercadoLibreApiUrl'))
      .get('/sites/MLA/search')
      .query(true)
      .reply(200, searchResponseMock);

    const response = await request(app).get('/api/items?q=chromecast');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty('categories');
    expect(response.body).toHaveProperty('items');
    expect(response.body.categories).toEqual(itemsListResponseMock.categories);
    expect(response.body.items).toEqual(itemsListResponseMock.items);
    testAuthor(response);
  });

  it('products list without requesting ML categories endpoint', async () => {
    const scope = nock(config.get('mercadoLibreApiUrl'))
      .get('/sites/MLA/search')
      .query(true)
      .reply(200, searchResponseMock);

    const response = await request(app).get('/api/items?q=chromecast');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty('categories');
    expect(response.body).toHaveProperty('items');
    expect(response.body.categories).toEqual(itemsListResponseMock.categories);
    expect(response.body.items).toEqual(itemsListResponseMock.items);
    testAuthor(response);
  });

  it('product detail', async () => {
    const itemId = 'MLA715635100';
    const categoryId = 'MLA352679';

    const scope = nock(config.get('mercadoLibreApiUrl'))
      .get(`/items/${itemId}`)
      .reply(200, itemsResponseMock)
      .get(`/items/${itemId}/description`)
      .reply(200, itemsDescriptionResponseMock)
      .get(`/categories/${categoryId}`)
      .reply(200, categoriesResponseMock);

    const response = await request(app).get(`/api/items/${itemId}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty('item');
    expect(response.body.item).toEqual(itemDetailResponseMock.item);
    testAuthor(response);
  });
});
