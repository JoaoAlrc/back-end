'use strict'

const Bar = use('App/Models/Bar')
const Transformer = use('App/Transformers/Bar/BarTransformer')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with bars
 */
class BarController {
  /**
   * Show a list of all bars.
   * GET bars
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ response, transform, pagination }) {
    const bar = await Bar.query().paginate(
      pagination.page,
      pagination.perpage
    )
    return response.send(await transform.paginate(bar, Transformer))
  }

  /**
   * Create/save a new bar.
   * POST bars
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, transform }) {
    const transaction = await Database.beginTransaction()
    try {
      let bar = request.only(['barname', 'cnpj', 'address', 'addressNum', 'neighborhood', 'city', 'state', 'zipCode'])
      bar = await Bar.create(bar, transaction)
      await transaction.commit()
      return response
        .status(201)
        .send(await transform.item(bar, Transformer))
    } catch (error) {
      await transaction.rollback()
      return response.status(error.status).send(error)
    }
  }

  /**
   * Display a single bar.
   * GET bars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Update bar details.
   * PUT or PATCH bars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a bar with id.
   * DELETE bars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = BarController
