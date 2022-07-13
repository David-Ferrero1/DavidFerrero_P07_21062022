async function fetchSearch() {
    await fetch('data/recipes.js')
        .then((results) => results.json())
        .then((results) => (recipes = results))
    return recipes
}
