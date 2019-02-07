'use strict'

class CategoryStore {
  get rules () {
    return {
      // validation rules
      title: 'required',
      description: 'required'
    }
  }
}

module.exports = CategoryStore
