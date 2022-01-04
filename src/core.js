class Bucket {
  constructor(s3) {
    this.bucket = s3;
  }

  // upload item to bucket
  async upload(payload, name) {
    try {
      const result = await this.bucket
        .putObject({
          Body: payload,
          Key: name
        })
        .promise();

      return result;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  // enumerate up to 1000 objects in bucket
  async list() {
    try {
      const result = await this.bucket.listObjectsV2().promise();

      return result.Contents;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  // fetch object from bucket
  async retrieve(target) {
    try {
      const result = await this.bucket.getObject({ Key: target }).promise();

      return result.Body;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  // delete item from bucket
  async delete(target) {
    try {
      const result = await this.bucket.deleteObject({ Key: target }).promise();

      return result;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  // change object location from source to destination
  async move(src, dest) {}

  // copy object from source to destination
  async copy(src, dest) {
    let bucketName = this.bucket.config.bucket;

    try {
      const result = await this.bucket
        .copyObject({ Key: dest, CopySource: `${bucketName}/${src}` })
        .promise();

      return result;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  // rename object in bucket
  async rename() {}

  // replace object in destination with new item
  async replace() {}
}

export default Bucket;
