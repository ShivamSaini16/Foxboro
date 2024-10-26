import React, { useState } from 'react';
import { TextField, Button, Grid2, Container, Typography, Link } from '@mui/material';


function Registration() {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Foxboro Instrument
            </Typography>
            <form >
                <Grid2 container spacing={2}>
                    <Grid2 item xs={12}>
                        <TextField
                            label="Name"
                            name="name"
                            fullWidth
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 item xs={12}>
                        <TextField
                            label="Mobile"
                            name="mobile"
                            type='number'
                            fullWidth
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 item xs={12}>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            fullWidth
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 item xs={12}>
                        <Link>
                            <Button variant="contained" color="primary" type="submit" fullWidth>
                                Signup
                            </Button>
                        </Link>
                    </Grid2>
                </Grid2>
            </form>
        </Container>
    );
}

export default Registration;
