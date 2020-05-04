exports.seed = async function(knex) {
    await knex('ingredients').insert([
        { recipe_id: 1, pantry_id: 1, unit: 'each', qty: 6 },
        { recipe_id: 1, pantry_id: 2, unit: 'each', qty: 1 },
        { recipe_id: 1, pantry_id: 3, unit: 'cup', qty: 0.5 },
        { recipe_id: 1, pantry_id: 4, unit: 'each', qty: 1 },
        { recipe_id: 1, pantry_id: 5, unit: 'tablespoon', qty: 1 },
        { recipe_id: 1, pantry_id: 6, unit: 'teaspoon', qty: 0.5 },
        { recipe_id: 1, pantry_id: 7, unit: 'teaspoon', qty: 0.25 },
        { recipe_id: 2, pantry_id: 8, unit: 'bunch', qty: 2 },
        { recipe_id: 2, pantry_id: 9, unit: 'clove', qty: 5 },
        { recipe_id: 2, pantry_id: 10, unit: 'tablespoon', qty: 1 },
        { recipe_id: 2, pantry_id: 11, unit: 'teaspoon', qty: 1 },
        { recipe_id: 2, pantry_id: 12, unit: 'tablespoon', qty: 2 },
        { recipe_id: 2, pantry_id: 13, unit: 'teaspoon', qty: 1 }
    ])
}