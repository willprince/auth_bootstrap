
exports.up = function(knex) {
    return knex.schema.createTable('emails', table => {
        table.increments('id')
        table.integer('entity_id')
        table.string('email')
        table.boolean('primary')
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('emails');
};
