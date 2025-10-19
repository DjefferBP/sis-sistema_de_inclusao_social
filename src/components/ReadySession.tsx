import  Comecar from '../../public/Começar.png';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { AuthModal } from './AuthUser';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

export const ReadySession = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const isMobile = useIsMobile();

    return (
        
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'column', alignItems: 'center' }}>
            <h1 style={{ fontSize: isMobile ? '20px' : undefined}}>Pronto para começar? Cadastre-se já!</h1>
            <img src={Comecar} alt="Começar" style={{ maxWidth: isMobile ? '100vw' : '100vw', height: 'auto'}} />
            <Button onClick={() => setModalOpen(true)} variant="contained" style={{ backgroundColor: '#000',  position: 'absolute', top: isMobile ? '120rem' : '90rem', padding: isMobile ? '0.5rem 1.2rem' : '0.7rem 2rem', fontSize: isMobile ? '1rem' : '1.2rem' }}>
                Começar
            </Button>
            <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};
