import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <div style={{width: '100vw', backgroundColor: 'f5f6fa', display: 'flex', justifyContent: 'center', padding: '2rem 0'}}>
        <h1>Por quê acessar o SIS?</h1><br />
    <Card sx={{ maxWidth: '20em' }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          <i className="fa-solid fa-graduation-cap"></i><p>Educação</p>
        </Typography>
        <Typography variant="h5" component="div">
          Informações sobre cotas, concursos e bolsas de estudo.
        </Typography>
      </CardContent>
    </Card>
    </div>    
  );
}
