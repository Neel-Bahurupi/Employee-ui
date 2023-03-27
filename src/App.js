import logo from './logo.svg';
import './App.css';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div className="App">
      <nav><div>Employee Management System</div></nav>
      <div>
        <EmployeeList />
      </div>
    </div>
  );
}

export default App;
