'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')

/**
 * CategoriesTransformer class
 *
 * @class CategoriesTransformer
 * @constructor
 */
class CategoriesTransformer extends TransformerAbstract {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
     // add your transformation object here
    }
  }
}

module.exports = CategoriesTransformer
