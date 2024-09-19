import './App.css';
import Addtask from './Components/Addtask';
import ListTask from './Components/ListTask';

function App() {
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <ListTask/>
      <Addtask/>
    </div>
  );
}

export default App;
