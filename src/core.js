class Bucket {
  constructor(s3) {
    this.bucket = s3;
  }

  // upload item to bucket
  async upload(payload) {}

  // enumerate up to 1000 objects in bucket
  async list() {
    return this.bucket.listObjectsV2().promise();
  }

  // fetch object from bucket
  async retrieve(target) {}

  // delete item from bucket
  async delete(target) {}

  // change object location from source to destination
  async move(src, dest) {}

  // copy object from source to destination
  async copy(src, dest) {}

  // rename object in bucket
  async rename() {}

  // replace object in destination with new item
  async replace() {}
}

export default Bucket;
