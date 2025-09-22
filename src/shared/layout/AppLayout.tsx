
import './AppLayout.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function TextButtons() {
  return (
    <Stack direction="row" spacing={2} className='home-buttons'>
      <Button variant="contained" href="#">
        Página inicial
      </Button>
      <Button variant="contained" href="#">
        Usuários
      </Button>
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