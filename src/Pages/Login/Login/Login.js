import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import login from '../../../images/login.png';
import useAuth from '../../Hooks/UseAuth';


const Login = () => {
    const [emailUser, setEmailUser] = useState('')
    const [password, setPassword] = useState('')
    const { handelGoogleSignUp, users, setUser, setIsLoging, setError } = useAuth();
    console.log(users?.email)

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    // console.log(redirect_uri)



    const handelgoogleLogin = () => {
        handelGoogleSignUp()
            .then(result => {
                console.log(result.user)
                localStorage.setItem("user", JSON.stringify(result.user));
                history.push(redirect_uri)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoging(false)
            })
    }

    // ..................................
    const handelOnchangeEmail = e => {

        const value = e.target.value;
        setEmailUser(value)

    }

    const handelOnchangePassword = e => {

        const value = e.target.value;
        setPassword(value)

    }
    const handelLogin = e => {


        console.log(emailUser, password)

        e.preventDefault();
    }
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom component="div">
                            Login
                        </Typography>
                        <form onSubmit={handelLogin}>
                            <TextField
                                required
                                onChange={handelOnchangeEmail}
                                sx={{ width: '75%', my: 5 }}
                                id="Standard-basic"
                                label="Your email"
                                type='email'
                                variant="standard"
                            />
                            <TextField
                                onChange={handelOnchangePassword}
                                sx={{ width: '75%' }}
                                id="Standard-basic"
                                label="Your password"
                                variant="standard"
                                name='password'
                                type="password"

                            />
                            <br />
                            <Button sx={{ mt: 5 }} type='submit' variant="contained">Contained</Button>


                        </form>
                        <br /><br />
                        <h3>Sing in with google</h3>
                        <Button sx={{ mt: 5 }} onClick={handelgoogleLogin} variant="contained">google log in</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: "80%" }} src={login} />
                    </Grid>
                </Grid>
            </Container>




        </>

    );
};

export default Login;