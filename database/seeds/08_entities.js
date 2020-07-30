
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('entities').del()
    .then(function () {
      // Inserts seed entries
      return knex('entities').insert([
        {
          
        },

      ]);
    });
};
