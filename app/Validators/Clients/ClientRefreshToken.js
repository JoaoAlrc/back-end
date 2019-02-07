'use strict'

class ClientsClientRefreshToken {
  get rules () {
    return {
      // validation rules
      refresh_token: 'required'
    }
  }
}

module.exports = ClientsClientRefreshToken
