'use strict'

class UserLogin {
  get rules() {
    return {
      email: 'required|email',
      password: 'required|min:5|max:20',
    }
  }

  get messages() {
    return {
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'password.required': 'You must provide a password.',
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = UserLogin
