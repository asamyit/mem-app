import React from 'react'
import { Container, Paper,Avatar,Typography,Grid, TextField,Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import useStyles from './styles'
import Icon from './icon';



export default function Auth() {
const classes = useStyles()
const isSignup = false
const handleChange = ()=>{

}
return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={6}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
            <form className={classes.form} >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        {isSignup 
                        ? <>
                        <TextField className={classes.textInput}
                            name='FirstName'
                            onChange={handleChange}
                            variant="outlined"
                            required
                            fullWidth
                            label='FirstName'
                            autoFocus = {true}
                            type='text'
                        />
                        <TextField className={classes.textInput} 
                            name='LastName'
                            onChange={handleChange}
                            variant="outlined"
                            required
                            fullWidth
                            label='LastName'
                            type='text'
                        /></>
                        :null}
                        
                        <TextField className={classes.textInput}
                            name='Email'
                            onChange={handleChange}
                            variant="outlined"
                            required
                            fullWidth
                            label='Email'
                            type='email'
                        />
                        <TextField className={classes.textInput}
                            name='password'
                            onChange={handleChange}
                            variant="outlined"
                            required
                            fullWidth
                            label='password'
                            type='password'
                        />
                        {isSignup 
                        ? 
                        <TextField className={classes.submit}
                            name='RetPassword'
                            onChange={handleChange}
                            variant="outlined"
                            required
                            fullWidth
                            label='RetPassword'
                            type='password'
                        />
                        :null
                        }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                    <GoogleLogin
                        render={(renderProps) => (
                            <Button 
                                className={classes.googleButton} 
                                color="primary" 
                                fullWidth onClick={renderProps.onClick} 
                                startIcon={<Icon />} 
                                variant="contained"> Google Sign In
                            </Button>
                        )}
                    />
                    
                </Grid>
            </form>
        </Paper>
    </Container>
  )
}
