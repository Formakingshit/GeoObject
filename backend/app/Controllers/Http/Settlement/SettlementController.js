const Settlement = use('App/Models/Settlement');

class SettlementController {
  async create({ request, response }) {
    const data = request.only([
      'title',
      'country',
      'district',
      'code',
      'population',
      'square',
      'index',
      'latitude',
      'longitude',
    ]);

    const settlement = await Settlement.create(data);
    console.log(data);
    return response.send({ settlement }, 'Settlement successfully added to system');
  }
}

module.exports = SettlementController;
