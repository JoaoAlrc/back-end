'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')

/**
 * StockTransformer class
 *
 * @class StockTransformer
 * @constructor
 */
class StockTransformer extends TransformerAbstract {
  /**
   * This method is used to transform the data.
   */
  transform (stock) {
    return {
     // add your transformation object here
     id: stock.id,
     product_id: stock.product_id,
     bar_id: stock.bar_id,
     stock: stock.stock
    }
  }
}

module.exports = StockTransformer
