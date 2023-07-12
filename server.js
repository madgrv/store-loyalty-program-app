const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

// Create an endpoint to read the data from the filesystem
app.get('/api/customers', (req, res) => {
  fs.readFile('Data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    } else {
      const customers = JSON.parse(data);
      res.json(customers);
    }
  });
});

// Create an endpoint for POST requests to add new customers data
app.post('/api/customers', express.json(), (req, res) => {
  const newCustomer = req.body;

  fs.readFile('Data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    const customers = JSON.parse(data);
    customers.push(newCustomer);

    fs.writeFile('Data.json', JSON.stringify(customers), 'utf8', (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }

      res.json({ message: 'Customer added successfully' });
    });
  });
});

// Create an endpoint for handling DELETE requests to remove customer data
app.delete('/api/customers/:id', (req, res) => {
  const customerId = req.params.id;

  fs.readFile('Data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    const customers = JSON.parse(data);
    const updatedCustomers = customers.filter(
      (customer) => customer.id !== customerId
    );

    fs.writeFile(
      'Data.json',
      JSON.stringify(updatedCustomers),
      'utf8',
      (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }

        res.json({ message: 'Customer deleted successfully' });
      }
    );
  });
});

// Start server to listen to port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
