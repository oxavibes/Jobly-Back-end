'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder {
  async run () {
    await Factory.model('App/Models/User').create({
      username: 'candidate',
      email: 'candidate@test.com',
      password: 'candidate',
      role_id: 1
    })

    await Factory.model('App/Models/User').create({
      username: 'employer',
      email: 'employer@test.com',
      password: 'employer',
      role_id: 2
    })

    await Factory.model('App/Models/User').create({
      username: 'administrator',
      email: 'admin@test.com',
      password: 'admin',
      role_id: 3
    })
  }
}

module.exports = UserSeeder
