'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {

    //relacionamento entre categoria e imagem
    image(){
        return this.belongsTo('App/Models/Images')
    }

    // relacionamento entre Category e Products

    products(){
        return this.belongsToMany('App/Models/Product')
    }
}

module.exports = Category
