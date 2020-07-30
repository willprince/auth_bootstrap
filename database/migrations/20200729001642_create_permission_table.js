
exports.up = function(knex) {
    return knex.schema.createTable('permission', table => {
        table.increments('id')
        table.string('name')
        table.string('description')
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('permission');
};