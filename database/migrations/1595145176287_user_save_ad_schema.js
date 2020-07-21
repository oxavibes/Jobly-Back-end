'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSaveAdSchema extends Schema {
  up () {
    this.create('user_save_ad', (table) => {
      table.increments()

      table.integer('user_id').unsigned().notNullable()
      table.integer('ad_id').unsigned().notNullable()

      table.foreign('user_id').references('id').inTable('users')
      table.foreign('ad_id').references('id').inTable('ads')

      table.timestamps()
    })
  }

  down () {
    this.drop('user_save_ad')
  }
}

module.exports = UserSaveAdSchema
