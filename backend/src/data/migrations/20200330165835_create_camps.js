
exports.up = function(knex) {
    return knex.schema.createTable('camps', (table) => {
        table.increments()

        table.string('name').notNullable()
        table.string('camp_pic').notNullable()
        table.string('resume').notNullable()
        table.string('description').notNullable()
        table.decimal('price').notNullable()

        table.string('profile_id').notNullable()
        table.foreign('profile_id').references('id').inTable('profiles')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
};
