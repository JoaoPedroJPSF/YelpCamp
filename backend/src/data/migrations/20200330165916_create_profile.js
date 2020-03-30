
exports.up = function(knex) {
  return knex.schema.createTable('profiles', (table) => {
      table.string('id').primary()
      table.string('name').notNullable()
      table.string('profile_pic').notNullable()
      table.string('email').notNullable()
      table.string('password').notNullable()
      table.string('city').notNullable()
      table.string('state', 2).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('profiles')
};
