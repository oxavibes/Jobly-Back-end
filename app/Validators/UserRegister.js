'use strict'

class StoreUser {

  get validateAll() {
    return true
  }

  get sanitizationRules() {
    return {
      email: 'normalize_email',
      role_id: 'to_int'
    }
  }

  get rules() {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|min:5|max:20',
      role_id: 'required|number'
    }
  }

  get messages() {
    return {
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'username.required': 'You must provide an username.',
      'username.unique': 'This username is already taken.',
      'password.required': 'You must provide a password.',
      'role.required': 'You must specify a role.'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = StoreUser
