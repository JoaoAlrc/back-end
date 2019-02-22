'use strict'

const BarTable = use('App/Models/BarTable')
const Transformer = use('App/Transformers/BarTable/BarTableTransformer')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with bartables
 */
class BarTableController {
  /**
   * Show a list of all bartables.
   * GET bartables
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response, transform, pagination }) {
    const table = await BarTable.query().paginate(
        pagination.page,
        pagination.perpage
    )
    return response.send(await transform.paginate(table, Transformer))
}

  /**
   * Create/save a new bartable.
   * POST bartables
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, transform }) {
    const transaction = await Database.beginTransaction()
    try {
      let barTable = request.only(['bar_id'])
      barTable = await BarTable.create(barTable, transaction)
      await transaction.commit()
      return response
        .status(201)
        .send(await transform.item(barTable, Transformer))
    } catch (error) {
      await transaction.rollback()
      return response.status(error.status).send(error)
    }
  }

  /**
   * Display a single bartable.
   * GET bartables/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update bartable details.
   * PUT or PATCH bartables/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a bartable with id.
   * DELETE bartables/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = BarTableController
