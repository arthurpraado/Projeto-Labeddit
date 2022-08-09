import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { goToLoginPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  const isLoggedOut = localStorage.token === undefined 

  const deleteToken = () => {
   delete localStorage.token
   goToLoginPage(navigate)
  }

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LabEddit
          </Typography>

          {!isLoggedOut && <Button onClick={() => deleteToken()} color="inherit">Logout</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header