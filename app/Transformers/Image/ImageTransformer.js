'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')

/**
 * ImageTransformer class
 *
 * @class ImageTransformer
 * @constructor
 */
class ImageTransformer extends TransformerAbstract {
  /**
   * This method is used to transform the data.
   */
  transform(image) {
    image = image.toJSON()
    return {
      // add your transformation object here
      id: image.id,
      size: image.size,
      name: image.original_name,
      extension: image.extension,
      url: image.url
    }
  }
}

module.exports = ImageTransformer
