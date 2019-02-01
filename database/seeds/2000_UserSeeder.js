'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use('Role')

class UserSeeder {
  async run() {
    const role = await Role.findBy('slug', 'user')
    const user = await Factory.model('App/Models/User').createMany(10)
    await Promise.all(user.map(async user => {
      await user.roles().attach([role.id])
    }))
  }
}

module.exports = UserSeeder
