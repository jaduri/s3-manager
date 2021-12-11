import S3 from 'aws-sdk/clients/s3.js';
import Bucket from './core.js';

// creates s3 service with default bucket
// and returns bucket instance with some useful methods
export default function setup(config) {
  try {
    if (typeof config !== 'object') {
      throw new Error('Please provide a valid configuration object');
    }
    if (!config.region || typeof config.region !== 'string') {
      throw new Error('Please provide a valid region of this bucket');
    }
    if (!config.apiVersion || typeof config.apiVersion !== 'string') {
      throw new Error('Please provide an appropriate api version');
    }
    if (!config.bucket || typeof config.bucket !== 'string') {
      throw new Error('Please provide a bucket name');
    }

    const s3 = new S3({ ...config, params: { Bucket: config.bucket } });

    return new Bucket(s3);
  } catch (err) {
    console.error(err);
    return;
  }
}
