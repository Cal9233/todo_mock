import './App.css';
import { Header } from './Components/Header/Header';
import TodoList from './Components/TodoList/TodoList';
import { Dashboard } from './Components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <div className="App">
        <Dashboard />
        <Header className="main-header">Todo List</Header>
        <TodoList />
      </div>
    </>
  );
}

export default App;
