import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import CustomersTable from './components/CustomersTable';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <br />
      <CustomersTable />
      <Footer />
    </div>
  );
}

export default App;
