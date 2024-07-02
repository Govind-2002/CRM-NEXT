import React from 'react';
import Layout from '../components/Layout';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Box, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const Contacts = () => {
  return (
    <Layout>
      <h1>Contacts</h1>
      <p>Manage your contacts here.</p>
    </Layout>
  );
};



const Customers = () => {
  const { register, handleSubmit, reset } = useForm();
  const [customers, setCustomers] = useState([]);

  const onSubmit = async (data) => {
    // Here, you would send data to the backend
    // For simplicity, we'll just add it to the state
    setCustomers([...customers, data]);
    reset();
  };

  return (
    <Layout>
      <h1>Customers</h1>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mb: 2 }}>
        <TextField
          label="Name"
          {...register('name', { required: true })}
          sx={{ mb: 2 }}
          fullWidth
        />
        <TextField
          label="Email"
          {...register('email', { required: true })}
          sx={{ mb: 2 }}
          fullWidth
        />
        <Button type="submit" variant="contained">Add Customer</Button>
      </Box>
      <List>
        {customers.map((customer, index) => (
          <ListItem key={index}>
            <ListItemText primary={customer.name} secondary={customer.email} />
          </ListItem>
        ))}
      </List>
    </Layout>
  );
};
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Box, TextField, Button, List, ListItem, ListItemText } from '@mui/material';





export default Customers;



