
exports.up = function(knex) {
    return knex.schema.createTable('role_hierarchy', table => {
        table.increments('id')
        table.integer('role_id')
        table.string('parent_role_id_list')
        table.string('child_role_id_list')
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('role_hierarchy');
};