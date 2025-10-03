import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { InitialMenuButtom } from './InitialPageMenu';
import { NavLink } from 'react-router';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import { Stack, useMediaQuery, useTheme } from '@mui/material';
import './HeaderLayout.css'
import { About } from './AboutButton';

export default function HeaderLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
      <AppBar sx={{ backgroundColor: '#4d6dae' }}>
        <Toolbar sx={{ 
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          justifyContent: 'space-between',
          gap: { xs: 1, md: 2 }
        }}>
          <Stack direction="row" alignItems="center" sx={{ flexShrink: 0 }}>
            <InitialMenuButtom />
            <NavLink to='/'>
              <Stack direction="row" alignItems="center">
                <img 
                  src="../../../public/SIS-personagemlaranjalogo.ico" 
                  alt="Logo da empresa" 
                  style={{ 
                    width: '1.5em', 
                    height: 'auto',
                    marginRight: '0.5em'
                  }}
                />
                <img 
                  src="../../../public/SIS.png" 
                  alt="Logo da empresa" 
                  style={{ 
                    width: '2.3em', 
                    height: 'auto'
                  }}
                />
              </Stack>
            </NavLink>
          </Stack>

          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            alignItems="center"
            sx={{ 
              flexGrow: 1,
              justifyContent: { xs: 'center', md: 'flex-start' },
              gap: { xs: 1, md: 2 }
            }}
          >
            <About />
          </Stack>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={{ xs: 1, sm: 2 }}
            sx={{ 
              flexShrink: 0,
              justifyContent: 'flex-end'
            }}
          >
            <Button 
              className='initial-buttons' 
              variant='outlined' 
              size={isMobile ? 'medium' : 'large'}
              startIcon={<AssignmentIndIcon />}
              sx={{ minWidth: 'auto' }}
            >
              {isMobile ? 'Cadastrar' : 'Cadastrar-se'}
            </Button>
            <Button 
              className='initial-buttons' 
              size={isMobile ? 'medium' : 'large'}
              startIcon={<LoginIcon />}
              sx={{ minWidth: 'auto' }}
            >
              Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}