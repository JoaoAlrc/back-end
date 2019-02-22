'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')

/**
 * BarTableTransformer class
 *
 * @class BarTableTransformer
 * @constructor
 */
class BarTableTransformer extends TransformerAbstract {
  /**
   * This method is used to transform the data.
   */
  transform(barTable) {
    return {
      // add your transformation object here
      id: barTable.id,
      bar_id: barTable.bar_id
    }
  }
}

module.exports = BarTableTransformer
