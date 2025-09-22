import { useState } from "react";
import Button from '@mui/material/Button';

interface InputAddProps {
    onAdd(value: string): void;
}

export const InputAdd = (props: InputAddProps) => {
    const [value, setValue] = useState('');

    const handleAdd = () => {
        props.onAdd(value);
        setValue('');
    }

    return (
        <div>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Digite uma tarefa"
            />
            <Button variant="contained"
                onClick={handleAdd}
            >
                Adicionar
            </Button>
        </div>
    );
}