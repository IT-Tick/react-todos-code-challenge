export const getRandomNumber = (todos) => {
  const IDs = todos.map(todo => (todo.id))
  console.log(IDs)
  let randomNumber = Math.floor(Math.random() * 1000)
  while (IDs.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 1000)
  }
  return randomNumber;

}