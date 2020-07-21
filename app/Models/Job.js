'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Job extends Model {

  categories() {
    return this.belongsToMany('App/Models/Category').pivotTable('job_category')
  }

  ad() {
    return this.belongsTo('App/Models/Ad')
  }
}

module.exports = Job
