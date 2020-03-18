exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {
          carId: 1,
          VIN: '4S3BMHB68B3286050',
          make: 'BMW',
          model: 'Mini',
          mileage: 156630
        },
        {
          carId: 2,
          VIN: '4T3ZK3BB7BU042861',
          make: 'Bugatti',
          model: 'Veyron',
          mileage: 2210
        },
        {
          carId: 3,
          VIN: 'JHMWD5523DS022721',
          make: 'Buick',
          model: 'Hellcat',
          mileage: 525120
        }
      ])
    })
}
