import './App.css';
import { Provider } from 'react';
import store from './features/counter/CounterStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <h1>React Redux toolkit</h1>
    </div>
    </Provider>
    
  );
}

export default App;
