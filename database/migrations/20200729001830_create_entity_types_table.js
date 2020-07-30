
exports.up = function(knex) {
    return knex.schema.createTable('entity_types', table => {
        table.increments('id')
        table.string('type')
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('entity_types');
};