'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bar extends Model {
    table() {
        return this.hasMany('App/Models/BarTable')
    }
}

module.exports = Bar
