/**
 * Products
 */

module.exports = {
    primaryKey: 'customId',
  attributes: {
    customId: {
      type: 'number',
      autoIncrement: true
    },
    name: 'string',
    category: {
      model: 'categories'
    },
    tags: {
      collection: 'tags',
      via: 'products',
      dominant: true
    },
    seller: {
      model: 'sellers',
      required: true
    },
    regions: {
      collection: 'regions',
      via: 'products'
    }
  }
};
