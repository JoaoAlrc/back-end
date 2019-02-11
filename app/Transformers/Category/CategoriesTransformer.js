'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')
const ImageTransformer = use('App/Transformers/Category/ImageTransformer')

/**
 * CategoriesTransformer class
 *
 * @class CategoriesTransformer
 * @constructor
 */
class CategoriesTransformer extends TransformerAbstract {

  defaultInclude() {
    return ['image']
  }

  /**
   * This method is used to transform the data.
   */
  transform(category) {
    return {
      // add your transformation object here
      id: category.id,
      title: category.title,
      description: category.description,
      // se quiser mandar a data desde quando foi criado => created: category.created_at
    }
  }

  includeImage(category) {
    return this.item(category.getRelated('image'), ImageTransformer)
  }
}

module.exports = CategoriesTransformer
