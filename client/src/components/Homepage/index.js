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
import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import testCategoryIcon from '../../images/icons/animals.png';
import { Link } from 'react-router-dom';

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
            pt: 2,
            pb: 2,
          }}
        >
          <Container maxWidth="sm">
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button id="filter-button" variant="contained">Filter Results</Button>
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
                <Link to="/">
                  <Card id="org-container"
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardContent className="container-content" sx={{ flexGrow: 1 }}>
                      <img className="category-icon" src={testCategoryIcon} />
                      <Typography gutterBottom variant="h5" component="h2" id="org-name" className="org-name">
                        Organization Name
                      </Typography>
                      <Typography id="org-loc" className="org-loc">
                        City, State
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">View</Button>
                    </CardActions> */}
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
