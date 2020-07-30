
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('username')
        table.boolean('passwordNeedReset').defaultTo(false)
        table.string('token',500).nullable();  //nullable
        table.integer('role_id');
        table.boolean('active').defaultTo(false);
        table.timestamps();
        table.unique('username')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
