import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer() {
    return (
        <div>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          GIVE BACK
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Raising awareness where it is needed most!
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          GIVE BACK
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
    );
  }

  export default Footer;