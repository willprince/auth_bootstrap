
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('role_hierarchy').del()
    .then(function () {
      // Inserts seed entries
      return knex('role_hierarchy').insert([
        {
          'id' : 1,
          'role_id': 1,
          'parent_role_id_list' : '',
          'child_role_id_list' : '2,3',
          'created_at' : null,
          'updated_at' : null,
        },
        {
          'id' : 2,
          'role_id': 2,
          'parent_role_id_list' : '1',
          'child_role_id_list' : '3',
          'created_at' : null,
          'updated_at' : null,
        },
        {
          'id' : 3,
          'role_id': 3,
          'parent_role_id_list' : '1,2',
          'child_role_id_list' : '',
          'created_at' : null,
          'updated_at' : null,
        },

      ]);
    });
};
