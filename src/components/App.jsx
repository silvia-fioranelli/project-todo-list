function App() {
  const todos = [
    'todo text 1',
    'todo text 2',
    'todo text 3',
  ];

  return (
    <div className="container">
      <h1>TODO List</h1>
      <ol>
        {todos.map((todo, i) => {
          return (
            <li key={`todo-${i}`}>
              {todo}
            </li>
          )
        })}
      </ol>
    </div>
  );
}

export default App;
