exports.seed = async function(knex) {
    await knex('instructions').insert([
        { recipe_id: 1, step: 1, step_description: 'Chop dill and scallion; set aside' },
        { recipe_id: 1, step: 2, step_description: 'Grate parmesan cheese; set aside' },
        { recipe_id: 1, step: 3, step_description: 'Whisk eggs in a mixing bowl' },
        { recipe_id: 1, step: 4, step_description: 'Melt butter in non-stick pan over low heat' },
        { recipe_id: 1, step: 5, step_description: 'Sprinkle scallion over eggs' },
        { recipe_id: 1, step: 6, step_description: 'Scrape cooked egg into the center' },
        { recipe_id: 1, step: 7, step_description: 'Transfer to plate' },
        { recipe_id: 1, step: 8, step_description: 'Sprinkle dill on top of eggs' },
        { recipe_id: 1, step: 9, step_description: 'Sprinkle parmesan cheese' },
        { recipe_id: 1, step: 10, step_description: 'Serve immediately' },
        { recipe_id: 2, step: 1, step_description: 'Trim spinach stems' },
        { recipe_id: 2, step: 2, step_description: 'Boil water in stockpot' },
        { recipe_id: 2, step: 3, step_description: 'Blanch spinach for 30 seconds' },
        { recipe_id: 2, step: 4, step_description: 'Cool spinach in ice water bath' },
        { recipe_id: 2, step: 5, step_description: 'Squeeze out water from spinach' },
        { recipe_id: 2, step: 6, step_description: 'Mince garlic' },
        { recipe_id: 2, step: 7, step_description: 'Add minced garlic, soy sauce, sugar, sesame oil, sesame seeds; mix well' },
        { recipe_id: 2, step: 8, step_description: 'Refrigerate for at least 2 hours' },
        { recipe_id: 2, step: 9, step_description: 'Serve seasoned spinach cold' }
    ])
}