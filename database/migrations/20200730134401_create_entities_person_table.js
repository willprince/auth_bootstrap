
exports.up = function(knex) {
    return knex.schema.createTable('entities_person', table => {
        table.integer('entity_id')
        table.string('firstname')
        table.string('lastname')
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('entities_person');
};
