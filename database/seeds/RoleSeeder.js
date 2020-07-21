'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class RoleSeeder {
  async run () {
    await Factory.model('App/Models/Role').create({ name: 'Candidate'})
    await Factory.model('App/Models/Role').create({ name: 'Employer'})
    await Factory.model('App/Models/Role').create({ name: 'Administrator'})
  }
}

module.exports = RoleSeeder
