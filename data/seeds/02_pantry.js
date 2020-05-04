exports.seed = async function(knex) {
    await knex('pantry').insert([
        { item: 'Egg, large' },
        { item: 'Scallion' },
        { item: 'Parmesan cheese' },
        { item: 'Dill' },
        { item: 'Butter, salted' },
        { item: 'Salt, coarse kosher'},
        { item: 'Pepper, black'},
        { item: 'Spinach' },
        { item: 'Garlic' },
        { item: 'Soy sauce' },
        { item: 'Sugar, white granulated'},
        { item: 'Sesame oil, toasted'},
        { item: 'Sesame seeds, toasted'},

    ])
}