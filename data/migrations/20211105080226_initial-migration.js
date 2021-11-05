
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name', 128)
        .notNullable()
        table.string('project_description', 128)
        table.boolean('project_completed')
        .defaultTo('false')
    })
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name', 128)
        .notNullable()
        .unique()
        table.string('resource_description', 128)
    })
    .createTable('tasks', table => {
        table.increments('task_id')
        table.string('task_description', 128)
        .notNullable()
        table.string('task_notes', 128)
        table.boolean('task_completed')
        .defaultTo('false')
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate("RESTRICT")
        .onDelete('RESTRICT')
    })
    .createTable('project_resources', table => {
        table.increments('project_resources_id')
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate("RESTRICT")
        .onDelete('RESTRICT')
        table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onUpdate("RESTRICT")
        .onDelete('RESTRICT')
  
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  };
  
  