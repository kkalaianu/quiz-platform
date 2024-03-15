import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} alt="Logo" style={{ marginRight: '30px', height: '60px' }} /> {/* Logo image */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quiz Platform
          </Typography>
        </Box>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/Quiz">
            My Quizzes
          </Button>
          {/* Add more navigation links as needed */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
