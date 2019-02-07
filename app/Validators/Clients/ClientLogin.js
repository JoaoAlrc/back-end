'use strict'

class ClientsClientLogin {
  get rules () {
    return {
      // validation rules
      email: 'required|email',
      password: 'required'
    }
  }
}

module.exports = ClientsClientLogin
