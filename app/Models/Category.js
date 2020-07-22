'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  jobs () {
    return this.belongsToMany('App/Models/Job').pivotTable('job_category')
  }
}

module.exports = Category
