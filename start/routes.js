'use strict'

const AuthController = require('../app/Controllers/Http/AuthController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


Route.group(() => {

  // Authentication
  Route.post('/auth/login', 'AuthController.login').validator('UserLogin')
  Route.post('/auth/register', 'AuthController.register').validator('UserRegister')

  // Ads
  // Route.get('/ads')
  // Route.post('/ads')
  // Route.get('/ads/:id')
  // Route.put('/ads/:id')
  // Route.delete('/ads/:id')

  //Categories
  // Route.get('/categories')
  // Route.post('/categories')
  // Route.get('/categories/:id')
  // Route.put('/categories/:id')
  // Route.delete('/categories/:id')

  //Roles
  //Saved jobs
  //Applied jobs


  
}).prefix('api/v1')


