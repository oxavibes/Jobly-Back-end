'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JobCategorySchema extends Schema {
  up () {
    this.create('job_categories', (table) => {
      table.increments()

      table.integer('job_id').unsigned().notNullable()
      table.integer('category_id').unsigned().notNullable()

      table.foreign('job_id').references('id').inTable('jobs')
      table.foreign('category_id').references('id').inTable('categories')

      table.timestamps()
    })
  }

  down () {
    this.drop('job_categories')
  }
}

module.exports = JobCategorySchema
