import { setup } from '../index.js';
import { createReadStream } from 'fs';

const bucket = setup({
  bucket: 'taditec',
  region: 'ap-southeast-2',
  apiVersion: '2010-12-01'
});

describe('Service successfully setup and make requests', () => {
  test('can create s3 service instance', () => {
    expect(bucket.bucket.config.bucket).toBe('taditec');
  });

  test('can enumerate bucket objects', async () => {
    const objects = await bucket.list();

    expect(Array.isArray(objects)).toBe(true);
  });

  test('can upload object', async () => {
    const image = await bucket.upload(createReadStream('guisa.png'), 'logo.png');

    expect(image).toBeTruthy();
  });

  test('can retrieve object', async () => {
    const image = await bucket.retrieve('logo.png');

    expect(image).toBeTruthy();
  });

  test('can copy object', async () => {
    const image = await bucket.copy('logo.png', 'test-logo.png');

    expect(image).toBeTruthy();
  });

  test('can delete object', async () => {
    const image = await bucket.delete('logo.png');

    expect(image).toBeTruthy();
  });
});
