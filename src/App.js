import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TableContainer from './components/DataTable';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <br />
      <TableContainer />
    </div>
  );
}

export default App;
