import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import Icons from '../Icons'
import { Link } from 'react-router-dom';
import { QUERY_ORGS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Select from '../Select';



const theme = createTheme();



export default function Album() {

  const navigate = useNavigate();
  const navigateToNewPost = () => {
    navigate('/post');
  }


  const { loading, data } = useQuery(QUERY_ORGS);
  const posts = data?.posts || [];

  console.log(posts[0])
  console.log(posts)




  // render category icon based on selected category name
  const getIcon = (category) => {
    console.log("category", category);
    var categoryList = Object.keys(Icons).filter(key => category.includes(key)) 
    if (categoryList.length === 0) {
      return "";
    };
    return Icons[categoryList[0]];
  };
  console.log(posts[0]);
  // let categoryIcon = getIcon(posts[0].category);

  // console.log(categoryIcon);




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
          <Container maxWidth="xl">
            <Stack
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              <Select/>
              {/* <Button id="filter-button" variant="contained">Search by Category</Button> */}
              {Auth.loggedIn() ? (<>
                <Button id="new-post-button" variant="outlined" onClick={navigateToNewPost}>Post a New Organization</Button>
              </>) : (

                <></>)}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {posts &&
              posts.map((post) => (
                <Grid item key={post._id} xs={12} sm={6} md={4} lg={3}>
                  <Link to={`/organization/${post._id}`}>
                    <Card id="org-container"
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <CardContent className="container-content" sx={{ flexGrow: 1 }}>
                        <img className="category-icon" src={getIcon(post.category)} alt="" />
                        <Typography gutterBottom variant="h5" component="h2" id="org-card-name" className="org-name">
                          {post.orgName}
                        </Typography>
                        <Typography id="org-card-loc" className="org-loc">
                          {post.location}
                        </Typography>
                      </CardContent>
                      {/* <CardActions>
                      <Button size="small" onClick={}>View</Button>
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
