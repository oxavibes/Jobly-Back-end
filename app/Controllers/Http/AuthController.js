'use strict'

const User = use('App/Models/User')

class AuthController {
  async register ({ request, auth, response }) {
    const data = request.all()

    const user = await User.create(data)

    const token = await auth.generate(user)

    Object.assign(user, token)

    response.json(user)
  }

  async login ({ request, auth, response }) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const valid = await auth.attempt(email, password)

      if (valid) {
        const user = await User.findBy('email', email)
        const token = await auth.generate(user)

        Object.assign(user, token)

        response.json(user)
      }
    } catch (err) {
      return response.json({
        message: err.message
      })
    }
  }
}

module.exports = AuthController
