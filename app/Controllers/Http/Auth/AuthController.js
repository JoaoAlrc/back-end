'use strict'

const User = use('App/Models/User')
const Role = use('Role')

class AuthController {
    async register({ request, response }) {
        // request.body daria na mesma
        const { username, name, surname, birthdate, cpf, email, password, address, addressNum, neighborhood, city, state, zipCode } = request.all()

        const user = await User.create({ username, name, surname, birthdate, cpf, email, password, address, addressNum, neighborhood, city, state, zipCode })

        const userRole = await Role.findBy('slug', 'user')

        // associa o userRole ao User
        await user.roles().attach([userRole.id])

        return response.status(201).send({ userData: user })
    }
}

module.exports = AuthController
