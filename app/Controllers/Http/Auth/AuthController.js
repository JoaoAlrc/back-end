'use strict'

const User = use('App/Models/User')
const Role = use('Role')

class AuthController {
    async register({ request, response }) {
        // request.body daria na mesma
        const { username, name, surname, birthdate, cpf, email, password, address, addressNum, neighborhood, city, state, zipCode } = request.all()

        const user = await User.create({ username, name, surname, birthdate, cpf, email, password, address, addressNum, neighborhood, city, state, zipCode })

        const userRole = await Role.findBy('slug', 'client')

        // associa o userRole ao User
        await user.roles().attach([userRole.id])

        return response.status(201).send({ data: user })
    }

    async login({ request, response, auth }) {
        const { email, password } = request.all()

        const user = await auth
            .authenticator('jwt')
            .withRefreshToken()
            .attempt(email, password)

        return response.send({ data: user })
    }

    async refresh({ request, response, auth }) {
        const refresh_token = request.input('refresh_token')

        if (!refresh_token) {
            refresh_token = request.header('refresh_token')
        }

        const user = await auth
            .newRefreshToken()
            .generateForRefreshToken(refresh_token)

        return response.send({ data: user })
    }

    async logout({ request, response, auth }) {
        const refresh_token = request.input('refresh_token')

        if (!refresh_token) {
            refresh_token = request.header('refresh_token')
        }

        const loggedOut = await auth
            .authenticator('jwt')
            .revokeTokens([refresh_token], true)

        return response.send({ message: "User Logged Out!" })

        // // checar que usuário está logado com o header Authorization, assim retirei o middleware 'auth' da rota
        // try {
        //     await auth.check()
        // } catch (err) {
        //     return response.status(401).send({ errors: [{ message: 'You are not logged in' }] })
        // }
        // // capturar o refresh_token pelo header ou por cookie (pois eu mando o refresh_token através de um cookie http no login)
        // const refresh_token = request.cookie('refresh_token') || request.header('refresh_token')
        // if (!refresh_token) {
        //     // cookie não encontrado, erro
        //     return response.status(400).send({ errors: [{ message: 'Refresh token not found in request' }] })
        // }

        // // se result for > 0, significa que nosso token foi revogado, ou seja, foi apagado do banco de dados
        // const result = await auth.revokeTokens([refresh_token], true)
        // // limpar o cookie caso ele exista
        // response.clearCookie('refresh_token')
        // if (result > 0) {
        //     return response.status(200).send({ messages: [{ message: 'Success on logout' }] })
        // }

        // // se result não foi 0, não tenho certeza do que retornar, pois nesse caso não é um erro,
        // // o token simplesmente já foi revogado e não poderá mais ser usado, estou informando isso
        // return response.status(200).send({ messages: [{ message: 'Refresh token was already revoked' }] })
    }
}

module.exports = AuthController
