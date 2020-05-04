exports.seed = async function(knex) {
    await knex('recipes').insert([
        { name: 'Scrambled Eggs' },
        { name: 'Seasoned Spinach'}
    ])
}