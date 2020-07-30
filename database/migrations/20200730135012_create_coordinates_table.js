
exports.up = function(knex) {
    return knex.schema.createTable('coordinates', table => {
        table.increments('id')
        table.integer('entity_id')
        table.string('street_number')
        table.string('street')
        table.string('appartment')
        table.string('city')
        table.string('zipcode')
        table.string('state')
        table.string('country')
        table.boolean('primary')
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('coordinates');
};
