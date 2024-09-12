exports.up = function(knex) {
    return knex.schema.createTable('projects', table => {
        table.increments('project_id')

        table.string('project_name').notNullable().unique()

        table.string('project_description')

        table.boolean('project_completed')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
};