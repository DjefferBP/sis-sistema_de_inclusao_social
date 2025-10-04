import { Box, FormHelperText, Modal, Typography } from "@mui/material";
import { SignUpInfo } from './SignUpInfo'
import Divider from '@mui/material/Divider';
import { LoginUser } from "./LoginUser";
import { Link } from "react-router";

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
};

interface IAuthModalProps {
  open: boolean;
  onClose: () => void;
}

export const AuthModal = ({ open, onClose }: IAuthModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
         <Box sx={{ flex: 1, pr: 2, }}>
            <Typography variant="h6">Cadastro</Typography>
            <Typography sx={{ mt: 2 }}>
                <SignUpInfo />
            </Typography>
        </Box>
        <Divider orientation="vertical" flexItem />

        <Box sx={{ flex: 1, pl: 2 }}>
            <Typography variant="h6">Login</Typography>
            <Typography sx={{ mt: 2 }}>
                <LoginUser />
                <FormHelperText>
                    <Link to={ 'recuperar-senha' }>
                        Esqueceu sua senha?
                    </Link>
                </FormHelperText>
            </Typography>
        </Box>
        
      </Box>
    </Modal>
  );
};
