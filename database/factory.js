'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', faker => {
    return {
        username: faker.first(),
        name: faker.first(),
        surname: faker.last(),
        birthdate: faker.birthday(),
        cpf: faker.cpf(),
        email: faker.email(),
        password: 'secret',
        address: faker.sentence({ words: 5 }),
        addressNum: faker.sentence({ words: 2 }),
        neighborhood: faker.word({ length: 9 }),
        city: faker.word({ length: 9 }),
        state: faker.word({ length: 2 }),
        zipCode: faker.string({ length: 9 })
    }
})

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
