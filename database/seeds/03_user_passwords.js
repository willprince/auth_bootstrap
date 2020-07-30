
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_passwords').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_passwords').insert([
        {
          id: 1, 
          password: 'testPassword'
        }
      ]);
    });
};
