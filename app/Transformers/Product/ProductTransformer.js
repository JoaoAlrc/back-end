'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')
const ImageTransformer = use('App/Transformers/Product/ProductImageTransformer')

/**
 * ProductTransformer class
 *
 * @class ProductTransformer
 * @constructor
 */
class ProductTransformer extends TransformerAbstract {
  defaultInclude() {
    return ['image']
  }
  /**
   * This method is used to transform the data.
   */
  transform(product) {
    return {
      // add your transformation object here
      id: product.id,
      brand: product.brand,
      name: product.name,
      description: product.description,
      price: product.price
    }
  }

  includeImage(product) {
    return this.item(product.getRelated('image'), ImageTransformer)
  }
}

module.exports = ProductTransformer
