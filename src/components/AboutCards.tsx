
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

export default function BasicCard() {
  const isMobile = useIsMobile();

  return (
    <div style={{ width: '100vw', backgroundColor: '#f5f6fa', display: 'flex', justifyContent: 'start', padding: isMobile ? '1rem' : '2rem 0', flexDirection: 'column', alignItems: 'start' }}>
      <h1 style={{ textAlign: 'center', padding: isMobile ? '0.8rem' : '1rem' }}>Por quê acessar o SIS?</h1>
      <div className='cards' style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'start', flexWrap: 'wrap', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '1rem' : '0', maxWidth: isMobile ? '95vw' : '80vw', alignItems: isMobile ? 'center' : 'flex-start' }}>
        <Card sx={{ width: isMobile ? '90vw' : '20em', maxHeight: '18em', margin: isMobile ? 0 : '1rem'}}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              <i className="fa-solid fa-graduation-cap"></i>
              <span style={{ marginLeft: '0.5rem' }}>Educação</span>
            </Typography>
            <Typography variant="h5" component="div">
              Informações sobre cotas, concursos e bolsas de estudo.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: isMobile ? '90vw' : '20em', maxHeight: '18em', margin: isMobile ? 0 : '1rem' }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              <i className="fa-solid fa-scale-balanced"></i>
              <span style={{ marginLeft: '0.5rem' }}>Direitos</span>
            </Typography>
            <Typography variant="h5" component="div">
              Informações jurídicas e dicas para garantir que você seja tratado com dignidade.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: isMobile ? '90vw' : '20em', maxHeight: '18em', margin: isMobile ? 0 : '1rem' }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              <i className="fa-solid fa-briefcase"></i>
              <span style={{ marginLeft: '0.5rem' }}>Trabalho</span>
            </Typography>
            <Typography variant="h5" component="div">
              Informações sobre vagas em empregos e guias para a identificação de preconceitos no mercado de trabalho.
            </Typography>
          </CardContent>
        </Card>

        
        <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end', width: '100%' }}>
          <img
            src={isMobile ? '/MulherTeste.png' : '../../public/MulherTeste.png'}
            alt="Mulher Teste"
            style={{ maxWidth: isMobile ? '80vw' : '25vw', height: 'auto', marginTop: isMobile ? '1rem' : '0', position: isMobile ? 'relative' : 'absolute', right: isMobile ? undefined : '2em', top: isMobile ? undefined : '58em' }}
          />
        </div>
      </div>
    </div>
  );
}
