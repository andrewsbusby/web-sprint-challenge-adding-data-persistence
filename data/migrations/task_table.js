exports.up = function(knex) {
    return knex.schema.createTable('task', table => {
        table.increments('task_id')

        table.string('task_description').notNullable()

        table.string('task_notes')

        table.boolean('task_completed')

        table.string('project_id').notNullable().require('./projects_table')
        
    })
};

exports.down = function(knex){
    return knex.schema.dropTableIfExists('task')
};