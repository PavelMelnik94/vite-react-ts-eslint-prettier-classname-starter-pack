import './App.css';

import { useMutation, useQuery, useQueryClient } from 'react-query';

import { getTodos, postTodo } from './api';

function App() {
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery('todos', getTodos);

  // Mutations
  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('todos');
    },
  });

  console.log(query, 'консоль query');
  console.log(mutation, 'консоль mutation');

  return (
    <div>
      <ul>
        {!query.data
          ? 'not data'
          : query.data.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
      {query.isLoading && <p>Loading...</p>}
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),

            title: 'Do Laundry',
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default App;
