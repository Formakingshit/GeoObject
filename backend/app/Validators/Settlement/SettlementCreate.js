const BaseValidator = use('App/Validators/BaseValidator');

class RiverCreate extends BaseValidator {
  get rules() {
    return {
      title: 'required|string|max:254',
      country: 'string|max:254',
      district: 'string|max:254',
      code: 'string|max:254',
      population: 'string|max:254',
      square: 'string|max:254',
      index: 'string|max:254',
      latitude: 'required|number',
      longitude: 'required|number',
    };
  }
}

module.exports = RiverCreate;
