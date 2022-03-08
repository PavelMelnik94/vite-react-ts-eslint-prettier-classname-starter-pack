export const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'GET',
  });
  return await response.json();
};

export const postTodo = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
  });
  return await response.json();
};
