'use strict'

/*
|--------------------------------------------------------------------------
| BarSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Bar = use('App/Models/Bar')

class BarSeeder {
  async run () {
    await Bar.create({ barname: "UNB", cnpj: "0000.0000.0000.000", address: "unb", addressNum: "1", neighborhood: "Asa Norte", city: "Brasília", state: "DF", zipCode: "73130-900" })
    await Bar.create({ barname: "Asa Sul", cnpj: "0000.0000.0000.001", address: "Asa Sul", addressNum: "1", neighborhood: "Asa Sul", city: "Brasília", state: "DF", zipCode: "73130-900" })
  }
}

module.exports = BarSeeder
