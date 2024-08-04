// src/App.jsx
import './App.css';

const App = () => {
  const recipe = [
    { name: 'cheese', available: true },
    { name: 'eggs', available: false },
    { name: 'giants eyes', available: true },
  ];

  return (
    <>
      <h1>ingredients List</h1>
      <ul>
        {recipe.map((ingredient, index) => (
          <li key={index} className={ingredient.available ? 'completed' : 'not-completed'}>
            {ingredient.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;