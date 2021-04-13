const { getRecipeDetails, getRecipes , postNewRecipe , deleteSpecificRecipe } = require('../../src/db/recipe_queries');


const recipesRoutes = async (fastify) => {
  const { recipeQuery } = fastify

  fastify.get('/recipes', async (req, reply) => {
    const rows = await getRecipes(fastify);
    reply.send(rows);
  })

  fastify.get('/recipes/:id', async (req, reply) => {
    const recipeDetails = await getRecipeDetails(fastify, req.params.id);

    // console.log(recipeDetails);
    reply.send(recipeDetails);
  })

  fastify.post('/recipes', async (req, reply) => {
    const { body } = req
    const newRecipe = await recipeQuery.postNewRecipe(body)
    console.log(newRecipe);
    reply.send(newRecipe)
  })
               
  fastify.delete('/recipes/:id', async (req, reply) => {
    const deleteRecipe = await deleteSpecificRecipe(fastify, req.params.id);
    // const deleteRecipe = await dbQuery.deleteRecipe(req.params.id);

    reply.send(deleteRecipe);
  })
}

module.exports = recipesRoutes
