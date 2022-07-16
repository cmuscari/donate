import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <div className="footer-container">
      <Typography id="footer-text" variant="body2" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          GIVE BACK
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </div>
  );
}

export default Footer;