
import { Box, Button, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';



export const AuthPage = () => {

  const navigate = useNavigate();
  const handleIniciarSesion = () => {
    navigate('/');
  }
  return (
    <>

  <Box sx={{ flexGrow: 1,minHeight: '100vh' }}>
      <Grid sx={{ minHeight: '30vh' }}></Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        
      >
        <Grid item>
        <Typography variant="h2">Login</Typography>
        </Grid>
        <Grid item >
        <LoginIcon color="primary" fontSize={'inherit'} 
        sx={{fontSize:60}}
        />
        </Grid>
        <Grid container
        justifyContent="center"
        alignItems="center">
          <Button color="primary" variant="contained"
            onClick={handleIniciarSesion}
          >
            Iniciar Sesión
          </Button>
        </Grid>
      </Grid>
      
      </Box>

    </>
  )
}
