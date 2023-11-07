import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.


export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };
const schema= yup.object().shape({
    firstName: yup.string().required('First Name is required').min(2) ,
    lastName: yup.string().required('Last Name is required').min(2) ,
    gender:yup.string().required('Gender Must be Specified'),
    email: yup.string().required('Email is required').matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Invalid Email") ,
    phone: yup.string().required('Phone number is required').min(11).matches(/^[0-9]+$/, "Must be digits"),
    password: yup.string().required('Password is required').min(4).matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ) ,
    cpassword: yup.string().required('Confirm Password is required').min(4).oneOf([yup.ref('password')], "Passwords must Match !")
})
const {register,reset, handleSubmit, formState:{
  errors
}} = useForm({
    resolver:yupResolver(schema)
});


const navigate = useNavigate();
const submitForm = async(userData)=>{
    console.log(userData)
    reset();
    const res= await fetch("http://localhost:5001/signup", {
      method:'POST',
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json"
      },
      body:JSON.stringify(userData)
    });
    const responseFromApi = await res.json()
    if (res.status === 400 || ! responseFromApi) {
      alert("error Signup User")
    }else{
      alert("User Signup Successfuly");
      navigate("/signin")
    }
    

}
  return (
      <Container component="main" maxWidth="xs" sx={{mb:'2rem'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box sx={{ mt: 3 }}>
            <form onSubmit={handleSubmit(submitForm)}  >
            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  autoComplete="given-name"
                  {...register('firstName')}
                  error={Boolean(errors?.firstName)}
                  helperText={errors?.firstName?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                //   name="lastName"
                  autoComplete="family-name"
                  {...register('lastName')}
                  error={Boolean(errors?.lastName)}
                  helperText={errors?.lastName?.message}
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label" error={Boolean(errors?.gender)}>Gender</FormLabel>
                <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                // name="gender"
                // {...register('gender')}
                
              >
                <FormControlLabel value="male"  control={<Radio sx={{color:'#9c27b0'}} {...register('gender',{
                required:"Choose Gender"
              })} />} label="Male" />

              <FormControlLabel value="female" control={<Radio sx={{color:'#f50057'}} {...register('gender',{
                required:"Choose Gender"
              })} />} label="Female" />

              <FormControlLabel value="other"  control={<Radio {...register('gender',{
                required:"Choose Gender"
              })} />} label="Other" />
              </RadioGroup>
              </FormControl>
              <div>{errors.gender && <span style={{color:'#c62828',fontSize:'13px'}}>{errors.gender.message}</span>}</div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                //   name="email"
                  autoComplete="email"
                  {...register('email')}
                  error={!!(errors?.email)}
                  helperText={errors?.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  type='number'
                //   name="phone"
                  autoComplete="phone"
                  {...register('phone')}
                  error={Boolean(errors?.phone)}
                  helperText={errors?.phone?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                //   name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register('password')}
                  error={Boolean(errors?.password)}
                  helperText={errors?.password?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                //   name="cpassword"
                  label="Confirm Password"
                  type="password"
                  id="cpassword"
                  autoComplete="new-password"
                  {...register('cpassword')}
                  error={Boolean(errors?.cpassword)}
                  helperText={errors?.cpassword?.message}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            </form>
          </Box>
        </Box>
        
      </Container>
    
  );
}