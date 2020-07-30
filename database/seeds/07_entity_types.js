
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('entity_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('entity_types').insert([
        {
          'id' : 1,
          'created_at' : null,
          'type' : 'admin',
          'updated_at' : null,
        },
        {
          'id' : 2,
          'created_at' : null,
          'type' : 'employee',
          'updated_at' : null,
        },
        {
          'id' : 3,
          'created_at' : null,
          'type' : 'client',
          'updated_at' : null,
        },

      ]);
    });
};
