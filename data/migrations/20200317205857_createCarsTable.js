exports.up = function(knex) {
  return knex.schema.createTable('cars', function(table) {
    table.increments('carId')
    table.string('VIN', 17).notNullable()
    table.text('make', 30).notNullable()
    table.text('model', 30).notNullable()
    table.integer('mileage').notNullable()
    table.text('transmission')
    table.text('status')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
}
