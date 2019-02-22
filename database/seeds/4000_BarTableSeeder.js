'use strict'

/*
|--------------------------------------------------------------------------
| BarTableSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const BarTable = use('App/Models/BarTable')

class BarTableSeeder {
  async run () {
    await BarTable.create({ bar_id: "1" })
    await BarTable.create({ bar_id: "1" })
    await BarTable.create({ bar_id: "1" })
    await BarTable.create({ bar_id: "2" })
    await BarTable.create({ bar_id: "2" })
    await BarTable.create({ bar_id: "2" })
  }
}

module.exports = BarTableSeeder
