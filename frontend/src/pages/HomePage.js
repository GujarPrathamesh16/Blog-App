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
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast';


function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Gujar
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const defaultTheme = createTheme();
  
  const HomePage = () => {

      const navigate = useNavigate();
      const isLogin = useSelector(state => state.isLogin);
    
      const handleRegister = () => {
        navigate('/register');
      }
      const handleLogin = () => {
        navigate('/login');
      }

      const handleView = () =>{
        if(isLogin){
            navigate('/blogs');
        }
        else{
            toast.error("Login to view");
        }
      }
      return (
        <>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <main>
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
                  Blogger
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                  Something short and leading about the collection below—its contents,
                  the creator, etc. Make it short and sweet, but not too short so folks
                  don&apos;t simply skip over it entirely.
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                    {!isLogin && ( <>
                        <Button variant="contained" onClick={handleRegister}>Register</Button>
                        <Button variant="outlined" onClick={handleLogin}>Login</Button>
                    </>
                    )}
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
                        component="div"
                        sx={{
                            // 16:9
                            pt: '56.25%',
                        }}
                        image="https://source.unsplash.com/random?wallpapers"
                        />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to describe the
                          content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" onClick={handleView}>View</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
          {/* Footer */}
          <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
              >
              Something here to give the footer a purpose!
            </Typography>
            <Copyright />
          </Box>
          {/* End footer */}
        </ThemeProvider>
    </>
      );
}

export default HomePage


