
exports.up = function(knex) {
    return knex.schema.createTable('entities', table => {
        table.increments('id')
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('entities');
};