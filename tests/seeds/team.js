
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('team').del()
    .then(function () {
      // Inserts seed entries
      return knex('team').insert([
        {id: 1, location: 'Auckland', leader_id: 1},
        {id: 2, location: 'Wellington', leader_id: 2},
        {id: 3, location: 'Christchurch', leader_id: 3}
      ])
    })
}