'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ad extends Model {
  users () {
    return this.belongsToMany('App/Models/User').pivotTable('user_role')
  }

  job () {
    return this.hasOne('App/Models/Job')
  }
}

module.exports = Ad
