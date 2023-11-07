import React from 'react'
// import '../Home.css'
import { Box, Typography } from '@mui/material';


const Home = () => {
  return (
    <>
      <div className="container" style={{marginTop:'6rem', marginBottom:'20rem'}}>
        <div className="txth" style={{marginLeft:'2rem'}}>
          <Box>
          <Typography component="h3" varient='h5' fontSize='3rem'>Lorem Ipsum</Typography>
          </Box>
          <p style={{width:'450px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            laborum pariatur, quis officiis odio. Minima iusto fuga hic
            doloribus.
          </p>
        </div>
      </div>
    </>
  );  
}

export default Home