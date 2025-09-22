import { Button } from "@mui/material";

interface ItodoProps {
    id: number;
    label: string;
    complete: boolean;

    onComplete(): void
    onRemove(): void
}

export const Todo = ({ id, label, complete, onComplete, onRemove }: ItodoProps) => {
    return (
        <li key={id}>
            {label}
            {complete ? " (Concluído)" : " (Pendente)"}
            <Button variant="contained" onClick={onComplete}
            >
                Concluir
            </Button>
            <Button variant="outlined" color="error" onClick={onRemove}>
                Remover
            </Button>
        </li>
    )
}