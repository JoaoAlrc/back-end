'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Product = use('App/Models/Product')
const Transformer = use('App/Transformers/Product/ProductTransformer')
const Database = use('Database')

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, transform }) {
    const products = await Product.query().paginate()
    return response.send(await transform.paginate(products, Transformer))
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, transform }) {
    const transaction = await Database.beginTransaction()
    try {
      const { title, description } = request.all() //poderia ser request.body
      const product = request.only(['brand', 'name', 'description', 'price'])

      // tratamento da imagem
      const image = request.file('image', {
        types: ['image'],
        size: '2mb'
      })

      let file = {}

      if (image) {
        file = await manage_single_upload(image)
        if (file.moved()) {
          const category_image = await Image.create({
            path: file.fileName,
            size: file.size,
            original_name: file.clientName,
            extension: file.subtype
          }, transaction)
          category.image_id = category_image.id
        }
      }

      await category.save(transaction)

      await transaction.commit()
      return response.status(201).send(await transform.item(category, Transformer))
    } catch (e) {
      await transaction.rollback()
      return response.status(400).send({
        message: "Erro ao processar sua requisição.",
        error: e.message
      })
    }
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = ProductController
