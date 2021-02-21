import TodoList from './TodoList';

function App() {
  const todos = [
    { id: '1', content: 'todo text 1' },
    { id: '2', content: 'todo text 2' },
  ];

  return (
    <div className="container">
      <h1>TODO List</h1>
      <TodoList items={todos} />
    </div>
  );
}

export default App;
