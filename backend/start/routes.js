/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');


Route.group(() => {
  // Settlement

  Route.post('settlement', 'SettlementController.create').validator('Settlement/SettlementCreate');
}).namespace('Settlement');
