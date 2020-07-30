
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('permission').del()
    .then(function () {
      // Inserts seed entries
      return knex('permission').insert([
        {
          'created_at' : null,
          'description' : 'Read an admin and a user for this employee',
          'id' : 1,
          'name' : 'readUsers',
          'updated_at' : null,
        },
        {
          'created_at' : null,
          'description' : 'Update an admin and a user for this employee',
          'id' : 2,
          'name' : 'updateUser',
          'updated_at' : null,
        },
        {
          'created_at' : null,
          'description' : 'Create a user with employee role',
          'id' : 3,
          'name' : 'createUserEmployee',
          'updated_at' : null,
        },
        {
          'created_at' : null,
          'description' : 'Deactivate an user with employee role',
          'id' : 4,
          'name' : 'deactivateUserEmployee',
          'updated_at' : null,
        },

      ]);
    });
};
