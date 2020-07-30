
exports.up = function(knex) {
    return knex.schema.createTable('entity_user', table => {
        table.increments('id')
        table.integer('entity_id')
        table.integer('user_id')
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('entity_user');
};
