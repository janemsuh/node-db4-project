exports.up = async function(knex) {
    await knex.schema.createTable('recipes', tbl => {
        tbl.increments('id')
        tbl.text('name').notNull()
    })

    await knex.schema.createTable('pantry', tbl => {
        tbl.increments('id')
        tbl.text('item').notNull().unique()
    })

    await knex.schema.createTable('ingredients', tbl => {
        tbl.increments('id')
        tbl.integer('recipe_id')
            .unsigned()
            .notNull()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('pantry_id')
            .unsigned()
            .references('id')
            .inTable('pantry')
            .onUpdate('CASCADE')
            .onDelete('SET NULL')
        tbl.text('unit').notNull()
        tbl.float('qty').notNull()
    })

    await knex.schema.createTable('instructions', tbl => {
        tbl.increments('id')
        tbl.integer('recipe_id')
            .unsigned()
            .notNull()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('step').unsigned().notNull()
        tbl.text('step_description').notNull()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('instructions')
    await knex.schema.dropTableIfExists('ingredients')
    await knex.schema.dropTableIfExists('pantry')
    await knex.schema.dropTableIfExists('recipes')
};
