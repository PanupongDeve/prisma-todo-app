const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {
  // Create a new user called `Alice`
  const newTodo = await prisma.createTodo({
      description: 'read a book javascript',
      done: false
  })
  console.log(`Created new Todo: ${newTodo.description} (ID: ${newTodo.id})`)

  // Read all users from the database and print them to the console
  const allTodoes = await prisma.todoes();
  console.log(allTodoes)
}

main().catch(e => console.error(e))