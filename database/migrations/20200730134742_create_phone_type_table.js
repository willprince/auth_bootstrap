
exports.up = function(knex) {
    return knex.schema.createTable('phone_type', table => {
        table.increments('id')
        table.string('type')
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('phone_type');
};
