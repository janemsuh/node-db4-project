const db = require('./config');

function getRecipes() {
    return db('recipes');
};

function getShoppingList(recipe_id) {
    return db('ingredients as i')
        .join('pantry as p', 'p.id', 'i.pantry_id')
        .join('recipes as r', 'r.id', 'i.recipe_id')
        .where('i.recipe_id', recipe_id)
        .select('p.item', 'i.unit', 'i.qty')
};

function getInstructions(recipe_id) {
    return db('instructions as in')
        .join('recipes as r', 'r.id', 'in.recipe_id')
        .where('r.id', recipe_id)
        .select('r.name', 'in.step', 'in.step_description')
        .orderBy('in.step');
};

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};