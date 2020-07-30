
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('role').del()
    .then(function () {
      // Inserts seed entries
      return knex('role').insert([
        {
          created_at: null,
          description: 'As control over every user and business settings/data',
          id: 1,
          name: 'superAdmin',
          updated_at: null,
        },
        {
          created_at: null,
          description: 'As control over employees and bussiness settings/data',
          id: 2,
          name: 'admin',
          updated_at: null,
        },
        {
          created_at: null,
          description: 'As control its own bussiness settings/data only',
          id: 3,
          name: 'employee',
          updated_at: null,
        },

      ]);
    });
};
