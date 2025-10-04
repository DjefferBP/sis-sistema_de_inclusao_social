import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useTheme, useMediaQuery } from '@mui/system';
import { Button } from '@mui/material';



export const LoginUser = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 0.5, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Nome/E-mail" variant="outlined" />
            <TextField id="outlined-basic" label="Senha" variant="outlined" />
            
            <Button
                variant='contained'
                size={isMobile ? 'medium' : 'large'}
                sx={{ minWidth: 'auto', ":hover": {backgroundColor: '#2596be'} }}
            >
                Fazer login
            </Button>
        </Box>
    );
}

