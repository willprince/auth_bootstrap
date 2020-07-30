
exports.up = function(knex) {
    return knex.schema.createTable('role_permission', table => {
        table.increments('id')
        table.integer('role_id')
        table.integer('permission_id')
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('role_permission');
};