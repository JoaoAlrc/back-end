'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use('Role')

class RoleSeeder {
  async run() {
    const admin = new Role()
    admin.name = 'Administrador'
    admin.slug = 'admin'
    admin.description = 'Administrador do Sistema'
    await admin.save()

    const manager = new Role()
    manager.name = 'Gerente'
    manager.slug = 'manager'
    manager.description = 'Manager do Sistema'
    await manager.save()

    const user = new Role()
    user.name = 'Cliente'
    user.slug = 'client'
    user.description = 'Cliente do Sistema'
    await user.save()
  }
}

module.exports = RoleSeeder
