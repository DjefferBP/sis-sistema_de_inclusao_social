import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState, Fragment } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import './HeaderLayout.css'
import InfoIcon from '@mui/icons-material/Info';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



function ChildModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Fragment>
      <Button onClick={handleOpen} size={isMobile? 'medium' : 'large'}>Onde nos encontrar?</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">  
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </Fragment>
  );
}

export const About = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div>
      <Button startIcon={<InfoIcon />} className='initial-buttons' size={isMobile? 'medium' : 'large'} onClick={handleOpen}>Sobre nós</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">O QUE SOMOS?</h2>
          <p id="parent-modal-description">
            O SIS é um projeto desenvolvido no Colégio Dr.Gastão Vidigal, com o objetivo de ajudar pessoas socialmemte vulneráveis, oferencendo suporte a 
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
