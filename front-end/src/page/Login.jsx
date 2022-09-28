import React from 'react';
import {
  Container, CssBaseline,
} from '@mui/material';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <main
      style={ {
        backgroundColor: '#f4f6f8',
      } }
    >
      <Container
        backgroundColor="#f4f6f8"
        sx={ {
          pt: 20,
          pb: 70,
        } }
      >
        <CssBaseline />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <LoginForm />
        <Footer />
      </Container>
    </main>
  );
}
