import './App.css';
import styles from './App.css'
import 'typeface-cormorant-garamond';
import { GoogleFont } from 'react-google-font-loader';
import Form from './components/Form';
import Header from './components/Header';
import CustomersTable from './components/CustomersTable';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Form />
      <br />
      <CustomersTable />
      <Footer />
    </div>
  );
}

export default App;
