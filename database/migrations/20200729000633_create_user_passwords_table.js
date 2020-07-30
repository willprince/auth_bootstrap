
exports.up = function(knex) {
    return knex.schema.createTable('user_passwords', table => {
        table.increments('id')
        table.string('password')
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_passwords');
};
