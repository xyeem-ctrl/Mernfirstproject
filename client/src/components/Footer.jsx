import React from 'react'
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
// #063970

const Footer = () => {
  return (
    <>
    <Box sx={{backgroundColor: "#063970", color:'#fff', p:1}}>
      <Box sx={{'& svg':{
        cursor:'pointer',m:1} , marginRight:4}}  align='right'>
            <Link style={{ textDecoration: "none", color: "#fff" }} to='https://www.instagram.com/'>
              <InstagramIcon/>
            </Link>

            <Link style={{ textDecoration: "none", color: "#fff" }} to='https://twitter.com/'>
              <TwitterIcon/>
            </Link>
            <Link style={{ textDecoration: "none", color: "#fff" }} to='https://www.facebook.com/'>
              <FacebookRoundedIcon/>
            </Link>
            <Link style={{ textDecoration: "none", color: "#fff" }} to='https://github.com/'>
            <GitHubIcon/>
            </Link>
            
      </Box>
      <Typography align='right' sx={{marginRight:3}}>
        All Rights Reserved &copy;
      </Typography>
    </Box>


    </>

  )
}


export default Footer