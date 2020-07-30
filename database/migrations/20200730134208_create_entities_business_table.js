
exports.up = function(knex) {
    return knex.schema.createTable('entities_business', table => {
        table.string('entity_id')
        table.string('name')
        table.timestamps();
        table.unique('name')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('entities_business');
};
