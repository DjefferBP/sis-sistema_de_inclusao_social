import Button from '@mui/material/Button';
import { useEffect, useRef, useState } from 'react';

import BlackBusinesswoman2 from '../../public/BlackBusinesswoman2.jpg';
import Wheelchair from '../../public/Wheelchair.jpg';
import DownSyndromeFamily from '../../public/DownSyndromeFamily.jpeg';
import SisTxtNoSlogan from '../../public/SisTxtNoSlogan.png';
import { AuthModal } from './AuthUser';
const carouselImages = [
    BlackBusinesswoman2,
    Wheelchair,
    DownSyndromeFamily,
];

const CAROUSEL_HEIGHT_DESKTOP = 40; // em
const CAROUSEL_HEIGHT_MOBILE = 18; // em

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return isMobile;
};

const LandingPage = () => {
    const [offset, setOffset] = useState(0);
    const intervalRef = useRef<number | null>(null);
    const isMobile = useIsMobile();
    const [modalOpen, setModalOpen] = useState(false);
    const CAROUSEL_HEIGHT = isMobile ? CAROUSEL_HEIGHT_MOBILE : CAROUSEL_HEIGHT_DESKTOP;

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setOffset((prev) => (prev + 1) % carouselImages.length);
        }, 2000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div
            style={{
                fontFamily: 'sans-serif',
                padding: isMobile ? '1rem' : '2rem',
                background: '#f5f6fa',
                marginTop: isMobile ? '12vh' : '8vh',
                marginLeft: isMobile ? 0 : '-10vw',
                minHeight: '100vh',
            }}
        >
            <img
                src={SisTxtNoSlogan}
                alt="SisTxtNoSlogan"
                style={{
                    maxWidth: isMobile ? '60vw' : '15vw',
                    height: 'auto',
                    margin: isMobile ? '0 auto 1rem auto' : '0 auto',
                    display: 'block'
                }}
            />
            <hr style={{ maxWidth: isMobile ? '90vw' : '40vw' }}></hr>
            <div
                className="bio"
                style={{
                    maxWidth: isMobile ? '95vw' : '40vw',
                    margin: '0 auto',
                    padding: isMobile ? '1rem' : '2rem',
                    background: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
            >
                <h1
                    style={{
                        color: '#333',
                        textAlign: 'start',
                        fontSize: isMobile ? '1.7rem' : '45px',
                        fontWeight: 'bold'
                    }}
                >
                    Bem-vindo ao Sistema de Inclusão Social
                </h1>
                <p
                    style={{
                        color: '#666',
                        textAlign: 'start',
                        fontSize: isMobile ? '1.1rem' : '20px',
                        fontWeight: 'bold'
                    }}
                >
                    Cadastre-se já para acessar a plataforma.
                </p>
                <Button
                    onClick={() => setModalOpen(true)}
                    variant="contained"
                    color="primary"
                    style={{
                        display: 'block',
                        margin: '2rem 0 3rem 0',
                        padding: isMobile ? '0.5rem 1.2rem' : '0.5rem 2rem',
                        fontSize: isMobile ? '1rem' : '1.2rem',
                        backgroundColor: '#4d6dae',
                        textAlign: 'start',
                        alignSelf: 'flex-start'
                    }}
                >
                    Começar
                </Button>
                <hr style={{ maxWidth: isMobile ? '90vw' : '40vw' }}></hr>
                <p
                    style={{
                        color: '#666',
                        textAlign: 'start',
                        fontSize: isMobile ? '1.1rem' : '20px'
                    }}
                >
                    Estamos aqui para ajudar você a se integrar e ter acesso aos serviços sociais disponíveis. Como direitos e cotas disponíveis.
                </p>
            </div>

            <div
                style={{
                    position: isMobile ? 'static' : 'absolute',
                    right: isMobile ? undefined : '8vw',
                    top: isMobile ? undefined : '15vh',
                    margin: isMobile ? '2rem auto 0 auto' : undefined,
                    height: `${CAROUSEL_HEIGHT}em`,
                    width: isMobile ? '90vw' : '30vw',
                    maxWidth: isMobile ? '400px' : undefined,
                    overflow: 'hidden',
                    borderRadius: '15px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    background: 'transparent',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        transform: `translateY(-${offset * CAROUSEL_HEIGHT}em)`,
                        transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)'
                    }}
                >
                    {carouselImages.concat(carouselImages[0]).map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`carousel-img-${idx}`}
                            style={{
                                width: isMobile ? '90vw' : '30vw',
                                maxWidth: isMobile ? '400px' : undefined,
                                height: `${CAROUSEL_HEIGHT}em`,
                                objectFit: 'cover'
                            }}
                        />
                    ))}
                </div>
            </div>
            <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
        
    );
};

export default LandingPage;