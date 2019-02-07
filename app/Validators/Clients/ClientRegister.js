'use strict'

class ClientRegister {
  get rules() {
    return {
      // validation rules
      username: 'required|unique:users,username',
      name: 'required',
      surname: 'required',
      email: 'required|email|unique:users,email',
      birthdate: 'required',
      cpf: 'required|unique:users,cpf',
      password: 'required|confirmed',
      address: 'required',
      addressNum: 'required',
      neighborhood: 'required',
      city: 'required',
      state: 'required',
      zipCode: 'required'
    }
  }
}

module.exports = ClientRegister
