
import './AppLayout.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router';

export default function TextButtons() {
  return (
    <Stack direction="row" spacing={2} className='home-buttons'>
      <NavLink to='/'>
        <Button variant="contained" >
          Página inicial
        </Button>
      </NavLink>
      <NavLink to='/sobre'>
        <Button variant="contained" >
          Sobre
        </Button>
      </NavLink>
    </Stack>
  );
}


export const AppLayout = ({ children }: React.PropsWithChildren) => {


    return (
        <div className='layout-base'>
            <div className='layout-header'>
                <TextButtons />
            </div>
            <hr className='layout-divider' />
            {children}
        </div>
    )
}