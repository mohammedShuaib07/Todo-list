
import './App.css';
import Todolist from './Todolist';
import store from './reducer/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Todolist/>
      </Provider>
    
  );
}

export default App;
