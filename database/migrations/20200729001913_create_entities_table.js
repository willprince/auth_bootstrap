
exports.up = function(knex) {
    return knex.schema.createTable('entities', table => {
        table.increments('id')
        table.string('fullName')
        table.string('email')
        table.string('entity_type_id')
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('entities');
};