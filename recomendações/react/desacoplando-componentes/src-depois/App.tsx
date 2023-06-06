import React, { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';


export function App() {
  const [todos, setTodos] = useState<string[]>([]);

  function handleCreateNewTodo() {
    //create new todo
  }

  return (
    <div>
      <Header onAddNewTodo={handleCreateNewTodo} />

      <main>
        <h2> Advantages </h2>

        <section>

          <div>
            <h3>Blazing fast</h3>
            <p>This todo-list app is insanely fast.</p>
          </div>

          <div>
            <h3>NO CSS</h3>
            <p>Clean and flat design with no CSS.</p>
          </div>

        </section>

        <ul>
          {todos.map(todo => <li key={todo}>{todo}</li>)}
        </ul>
      </main>

      <Footer />
    </div>
  );
}