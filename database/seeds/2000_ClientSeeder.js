'use strict'

/*
|--------------------------------------------------------------------------
| ClientSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use('Role')
const User = use('App/Models/User')

class ClientSeeder {
    async run() {
        const role = await Role.findBy('slug', 'client')
        const clients = await Factory.model('App/Models/User').createMany(10)
        await Promise.all(
            clients.map(async client => {
                // Associa os usuários aos cargos
                await client.roles().attach([role.id])
                // // Associa os usuários aos cupons
                // const coupon = await Factory.model('App/Models/Coupon').create()

                // await client.coupons().attach([coupon.id])
            })
        )
        const user = await User.create({
            username: "jvalrc",
            name: "joão victor",
            surname: "alarcão p",
            birthdate: "1995-12-22",
            cpf: "050.002.471-58",
            email: "jv.alarcao@hotmail.com",
            password: "1234",
            address: "condo",
            addressNum: "21",
            neighborhood: "sobral",
            city: "bsb",
            state: "df",
            zipCode: "73130-900"
        })
        const adminRole = await Role.findBy('slug', 'admin')
        await user.roles().attach([adminRole.id])
    }
}

module.exports = ClientSeeder
