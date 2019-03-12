'use strict'

/*
|--------------------------------------------------------------------------
| StockSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Stock = use('App/Models/Stock')

class StockSeeder {
  async run () {
    await Stock.create({category_id: "1", product_id: "1", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "1", product_id: "2", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "1", product_id: "3", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "1", product_id: "4", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "1", product_id: "5", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "1", product_id: "6", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "1", product_id: "7", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "1", product_id: "8", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "1", product_id: "9", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "1", product_id: "10", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "1", product_id: "11", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "2", product_id: "12", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "2", product_id: "13", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "2", product_id: "14", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "2", product_id: "15", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "3", product_id: "16", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "3", product_id: "17", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "3", product_id: "18", bar_id: "1", stock: "10"})
    await Stock.create({category_id: "3", product_id: "19", bar_id: "1", stock: "10"})
  }
}

module.exports = StockSeeder
