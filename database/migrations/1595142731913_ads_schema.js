'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdsSchema extends Schema {
  up () {
    this.create('ads', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('job_id').unsigned().references('id').inTable('jobs')
      table.timestamps()
    })
  }

  down () {
    this.drop('ads')
  }
}

module.exports = AdsSchema
