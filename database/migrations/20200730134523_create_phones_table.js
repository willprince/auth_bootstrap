
exports.up = function(knex) {
    return knex.schema.createTable('phones', table => {
        table.increments('id')
        table.integer('entity_id')
        table.string('number')
        table.string('extension')
        table.boolean('primary')
        table.integer('type_id')
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('phones');
};
