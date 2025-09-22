
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
interface ItodoProps {
    id: number;
    label: string;
    complete: boolean;

    onComplete(): void
    onRemove(): void
}

export const Todo = ({ id, label, complete, onComplete, onRemove }: ItodoProps) => {
    return (
        <li key={id} className="li-list">
            <Stack direction="row" spacing={1}>
                {label}
                {complete ? " (Concluído)" : " (Pendente)"} 
                <span />
                <Button className="todo-buttons" variant="contained" color="success" onClick={onComplete}
                >
                    Concluir
                </Button>
                <Button className="todo-buttons" variant="outlined" color="error" onClick={onRemove}>
                    Remover
                </Button>
            </Stack>
            <hr style={{ width: '19%', marginLeft: 0 }}/>
        </li>
    )
}