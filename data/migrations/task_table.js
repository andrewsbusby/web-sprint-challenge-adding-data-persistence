exports.up = function(knex) {
    return knex.schema.createTable('task', table => {
        table.increments('task_id')

        table.string('task_description').notNullable()

        table.string('task_notes')

        table.boolean('task_completed')

        table.integer('project_id').unsigned().notNullable().references('id').inTable('projects')
        
    })
};

exports.down = function(knex){
    return knex.schema.dropTableIfExists('task')
};