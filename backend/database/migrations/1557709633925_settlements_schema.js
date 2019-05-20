/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class SettlementsSchema extends Schema {
  up() {
    this.create('settlements', (table) => {
      table.increments();
      table.string('title', 254).notNullable();
      table.string('country');
      table.string('district');
      table.string('code');
      table.string('population');
      table.string('square');
      table.string('index');
      table.float('latitude').notNullable();
      table.float('longitude').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('settlements');
  }
}

module.exports = SettlementsSchema;
