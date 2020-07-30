
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('role_permission').del()
    .then(function () {
      // Inserts seed entries
      return knex('role_permission').insert([
        {
          'created_at' : null,
          'id' : 1,
          'permission_id' : 1,
          'role_id' : 1,
          'updated_at' : null,
        },
        {
          'created_at' : null,
          'id' : 2,
          'permission_id' : 2,
          'role_id' : 1,
          'updated_at' : null,
        },
        {
          'created_at' : null,
          'id' : 3,
          'permission_id' : 3,
          'role_id' : 1,
          'updated_at' : null,
        },
        {
          'created_at' : null,
          'id' : 4,
          'permission_id' : 4,
          'role_id' : 1,
          'updated_at' : null,
        },
        {
          'created_at' : null,
          'id' : 5,
          'permission_id' : 1,
          'role_id' : 2,
          'updated_at' : null,
        },
        {
          'created_at' : null,
          'id' : 6,
          'permission_id' : 2,
          'role_id' : 2,
          'updated_at' : null,
        },
        {
          'created_at' : null,
          'id' : 7,
          'permission_id' : 3,
          'role_id' : 2,
          'updated_at' : null,
        },
        {
          'created_at' : null,
          'id' : 8,
          'permission_id' : 4,
          'role_id' : 2,
          'updated_at' : null,
        },
      ]);
    });
};
