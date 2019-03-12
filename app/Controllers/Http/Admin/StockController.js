'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Stock = use('App/Models/Stock')
const Transformer = use('App/Transformers/Stock/StockTransformer')
const Database = use('Database')

/**
 * Resourceful controller for interacting with stocks
 */
class StockController {
  /**
   * Show a list of all stocks.
   * GET stocks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view, transform, pagination }) {
    const stock = await Stock.query().paginate(
      pagination.page,
      pagination.perpage
    )
    return response.send(await transform.paginate(stock, Transformer))
  }

  /**
   * Create/save a new stock.
   * POST stocks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, transform }) {
    const transaction = await Database.beginTransaction()
    try {
      let stock = request.only(['category_id', 'product_id', 'bar_id', 'stock'])
      stock = await Stock.create(stock, transaction)
      await transaction.commit()
      return response
        .status(201)
        .send(await transform.item(stock, Transformer))
    } catch (error) {
      await transaction.rollback()
      return response.status(error.status).send(error)
    }
  }

  /**
   * Display a single stock.
   * GET stocks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, response, transform }) {
    const stock = await Stock.findOrFail(params.id)
    return response.send(await transform.item(stock, Transformer))
  }

  /**
   * Display a single stock.
   * GET stocks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async getStock({ params, response, transform, pagination }) {
    const stock = await Stock.query().where('bar_id', params.bar_id).paginate(
      pagination.page,
      pagination.perpage
    )
    return response.send(await transform.paginate(stock, Transformer))
  }

  /**
   * Update stock details.
   * PUT or PATCH stocks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a stock with id.
   * DELETE stocks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = StockController
