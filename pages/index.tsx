import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState("todo@gmail.com");
  const [password, setPassword] = useState(",sjkjusz");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()

  const handleLogin = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      //@ts-ignore
      .then((userCredential) => {
        // const user = userCredential.user;
        setIsLoading(false);
        toast.success("Login Successful...");
        router.push('/todo')
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () =>
    // Реалізуйте логіку авторизації через Google тут
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        toast.success("Login Successfully");
        router.push('/todo')
      })
      .catch((error) => {
        toast.error(error.message);
      });

  return (
    <form onSubmit={handleLogin}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '300px',
        margin: '0 auto',
        height: '100vh',
        justifyContent: 'center'
      }}>
        <TextField label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type='submit' >
          Login
        </Button>
        <Button variant="contained" onClick={handleGoogleLogin}>
          Login with Google
        </Button>
      </Box>
    </form>
  );
};

export default Login

