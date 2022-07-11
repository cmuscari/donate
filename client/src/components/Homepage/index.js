import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import Auth from '../../utils/auth';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();



export default function Album() {

  const navigate = useNavigate();
  const navigateToNewPost = () => {
    navigate('/post');
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              GIVE BACK
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                View charitable Organizations waiting to be discovered, find out more
                about them, and help support their cause!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Filter Results</Button>
              {Auth.loggedIn() ? (<>
              <Button variant="outlined" onClick={navigateToNewPost}>Post a New Organization</Button>
              </>) : (
              <></>)}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                    id="org-logo"
                    className="org-logo"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" id="org-name">
                      ORGANIZATION NAME
                    </Typography>
                    <Typography id="org-loc">
                      CITY, STATE
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    {/* <Button size="small">Donate</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
