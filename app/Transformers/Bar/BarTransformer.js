'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')

/**
 * BarTransformer class
 *
 * @class BarTransformer
 * @constructor
 */
class BarTransformer extends TransformerAbstract {
  /**
   * This method is used to transform the data.
   */
  transform (bar) {
    return {
     // add your transformation object here
     id: bar.id,
     barname: bar.barname,
     cnpj: bar.cnpj,
     address: bar.address,
     addressNum: bar.addressNum,
     neighborhood: bar.neighborhood,
     city: bar.city,
     state: bar.state,
     zipCode: bar.zipCode
    }
  }
}

module.exports = BarTransformer
