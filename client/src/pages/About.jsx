import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {

  // const [userData, setuserData] = useState("");
  const navigate = useNavigate();

 

  useEffect(() => {
      async function aboutpage() {
      try {
        const result = await fetch("http://localhost:5001/about", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
  
        if (result.status === 401) {
          navigate("/signin");
        }
      } catch (error) {
        console.log(error);
      }
    };
    aboutpage()
  },[navigate]);
  
  return (
    <>
    <Box align='center' sx={{mt:'200px', mb:25}} p={2}>
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Box>
        <Typography align='left'>
          {/* Name : {userData.firstName} */}
        </Typography>
        <Typography>
          {/* Email : {userData.email} */}
        </Typography>
        <Typography>
          Phone : 03060721213
        </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Box>
    
    </>
    
  )
}

export default About







// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// const page= ()=>{
//   const aboutpage = async()=>{
//     const navigate = useNavigate();
//     try {
//       const result = await fetch('http://localhost:5001/about',{
//         method:'GET',
//         headers:{
//           Accept:'application/json',
//           'Content-Type':'application/json'
//         },
//         credentials:'include'
//       })
//       if (result.status===400) {
//         navigate('/signin')
//       }

//       useEffect(()=>{
//         aboutpage()
//       },[])

//     } catch (error) {
//       console.log(error)
//     }
//   }
// }