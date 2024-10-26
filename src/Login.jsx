import { Box, Button, Container, Grid2, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <>
            <Container maxWidth='sm'>
                <Grid2 container display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ height: '100vh' }}>
                    <Grid2 component={Paper} p={3}>
                        <form >
                            <Box display={'flex'} justifyContent={'center'}>
                                <Typography variant='h4'>Login</Typography>
                            </Box>
                            <Box mt={2}>
                                <TextField
                                    variant='outlined'
                                    label='Email'
                                    type='email'
                                    value={email}
                                    id='email'
                                    fullWidth
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ mb: 2 }}
                                />

                                <TextField
                                    variant='outlined'
                                    label='Password'
                                    type='password'
                                    value={password}
                                    id='password'
                                    fullWidth
                                    onChange={(e) => setPassword(e.target.value)}
                                    sx={{ mb: 2 }}
                                />
                            </Box>
                            <Box display={'flex'} justifyContent={'end'} my={2}>
                                <Link to={'/forget'} style={{ textDecoration: 'none' }}>
                                    <Typography >Forget Password</Typography>
                                </Link>
                            </Box>
                            <Box display={'flex'} justifyContent={'center'}>
                                <Button sx={{ mb: 2 }} variant='contained' type='submit' fullWidth>Submit</Button>
                            </Box>
                            <Box  display={'flex'} justifyContent={'center'}>
                                <Typography>Create the new Account?
                                    <Link to={'/signup'} style={{ textDecoration: 'none' }}>
                                        Singup?
                                    </Link>
                                </Typography>
                            </Box>

                        </form>
                    </Grid2>
                </Grid2>
            </Container>
        </>
    );
}

export default Login;
