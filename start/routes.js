'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// authentication routes
Route.group(() => {
  Route
    .post('register', 'AuthController.register')
    .as('auth.register')
    .validator('Clients/ClientRegister')
  Route
    .post('login', 'AuthController.login')
    .as('auth.login')
    .validator('Clients/ClientLogin')
  Route
    .post('refresh', 'AuthController.refresh')
    .as('auth.refresh')
    .validator('Clients/ClientRefreshToken')
  Route
    .post('logout', 'AuthController.logout')
    .as('auth.logout')
    .middleware(['auth'])
    .validator('Clients/ClientRefreshToken')
})
  .prefix('api/auth')
  .namespace('Auth')

// administration routes
Route.group(() => {
  Route
    .resource('category', 'CategoryController')
    .apiOnly()
    .validator(new Map([
      [['category.store'], ['Category/Store']],
      [['category.update'], ['Category/Update']]
    ]))
  Route.resource('product', 'ProductController').apiOnly()
  Route.resource('coupon', 'CouponController').apiOnly()
  Route.resource('order', 'OrderController').apiOnly()
  Route.post('images/bulkUpload', 'ImageController.bulkUpload')
})
  .prefix('api/admin')
  .namespace('Admin')
  .middleware(['auth', 'is:(admin || manager) && !client'])
