import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './InputAdd.css'

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
        <div className="input-add-container">
            <TextField
                id="filled-basic"
                label="Digite uma tarefa"
                variant="outlined"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Button variant="contained" onClick={handleAdd}>
                Adicionar
            </Button>
        </div>

    );
}