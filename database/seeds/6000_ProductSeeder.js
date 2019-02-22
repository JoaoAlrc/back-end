'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Product = use('App/Models/Product')
const Category = use('App/Models/Category')

class ProductSeeder {
    async run() {
        await Product.create({ brand: "Zomo", name: "Tropical Amazon", price: "05.00", category_id: "1" })
        await Product.create({ brand: "Zomo", name: "Miami Night", price: "05.00", category_id: "1" })
        await Product.create({ brand: "Zomo", name: "Strong Orange", price: "05.00", category_id: "1" })
        await Product.create({ brand: "Zomo", name: "Strong Lemon", price: "05.00", category_id: "1" })
        await Product.create({ brand: "Mazaya", name: "Magic Fruit", price: "05.00", category_id: "1" })
        await Product.create({ brand: "Mazaya", name: "Candy Drops", price: "05.00", category_id: "1" })
        await Product.create({ brand: "Serbetli", name: "Ice Tangerina", price: "05.00", category_id: "1" })
        await Product.create({ brand: "Nay", name: "Melon Passion", price: "05.00", category_id: "1" })
        await Product.create({ brand: "Nay", name: "Passion Fruit", price: "05.00", category_id: "1" })
        await Product.create({ brand: "Nay", name: "Cherry Bomb", price: "05.00", category_id: "1" })
        await Product.create({ brand: "DarkSmoke", name: "Cupuaçu", price: "05.00", category_id: "1" })

        await Product.create({ brand: "Tanqueray", name: "Gin", price: "05.00", category_id: "2" })
        await Product.create({ brand: "Bombay", name: "Gin", price: "05.00", category_id: "2" })
        await Product.create({ brand: "Heineken", name: "Cerva", price: "05.00", category_id: "2" })
        await Product.create({ brand: "Corona", name: "Cerva", price: "05.00", category_id: "2" })

        await Product.create({ brand: "Casa", name: "Batata frita", price: "05.00", category_id: "3" })
        await Product.create({ brand: "Casa", name: "Quibe com queijo", price: "05.00", category_id: "3" })
        await Product.create({ brand: "Ruffles", name: "Batata", price: "05.00", category_id: "3" })
        await Product.create({ brand: "Casa", name: "Pizza", price: "05.00", category_id: "3" })
    }
}

module.exports = ProductSeeder
