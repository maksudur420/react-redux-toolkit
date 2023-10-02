import './App.css';

import Counter from './features/counter/Counter';
import ShowPosts from './features/todos/ShowPosts';

function App() {
  return (
    
      <div className="App">
      <h1>React Redux toolkit</h1>
      <Counter></Counter>
      <ShowPosts></ShowPosts>
      </div>
    
  );
}

export default App;
