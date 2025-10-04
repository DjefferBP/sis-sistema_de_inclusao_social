import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled, lighten, darken, useTheme, useMediaQuery } from '@mui/system';
import { Button } from '@mui/material';


const GroupHeader = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: theme.palette.primary.main,
  backgroundColor: lighten(theme.palette.primary.light, 0.85),
  ...theme.applyStyles('dark', {
    backgroundColor: darken(theme.palette.primary.main, 0.8),
  }),
}));

const GroupItems = styled('ul')({
  padding: 0,
});

export const SignUpInfo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const options = tiposDeSituacoesDesfavoraveis.sort((a, b) => {
    const categoryCompare = a.category.localeCompare(b.category);
    if (categoryCompare !== 0) return categoryCompare;
    return a.title.localeCompare(b.title);
  });

  // 👇 Agora é um array, não string
  const [vulnerabilidades, setVulnerabilidades] = useState<typeof options>([]);

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 0.5, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Nome/E-mail" variant="outlined" />
      <TextField label="Senha" variant="outlined" />

      <Autocomplete
        multiple
        options={options}
        groupBy={(option) => option.category}
        getOptionLabel={(option) => option.title}
        value={vulnerabilidades}
        onChange={(_, newValue) => setVulnerabilidades(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Suas Vulnerabilidades" />
        )}
        renderGroup={(params) => (
          <li key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems>{params.children}</GroupItems>
          </li>
        )}
        sx={{ width: 300 }}
      />

      <Button
        variant="contained"
        size={isMobile ? 'medium' : 'large'}
        sx={{ minWidth: 'auto', ':hover': { background: '#2596be' } }}
      >
        Cadastrar-se
      </Button>
    </Box>
  );
};

// --- Dados das opções ---
const tiposDeSituacoesDesfavoraveis = [
  { title: 'Pessoa com Deficiência Física', category: 'Acessibilidade' },
  { title: 'Pessoa com Deficiência Visual', category: 'Acessibilidade' },
  { title: 'Pessoa com Deficiência Auditiva', category: 'Acessibilidade' },
  { title: 'Pessoa com Deficiência Intelectual', category: 'Acessibilidade' },
  { title: 'Pessoa com Mobilidade Reduzida', category: 'Acessibilidade' },
  { title: 'Pessoa com Transtorno do Espectro Autista', category: 'Acessibilidade' },
  { title: 'Pessoa com Baixa Escolaridade', category: 'Educação' },
  { title: 'Pessoa Analfabeta', category: 'Educação' },
  { title: 'Estudante de Escola Pública', category: 'Educação' },
  { title: 'Pessoa Evadida do Sistema Escolar', category: 'Educação' },
  { title: 'Pessoa Negra', category: 'Etnia' },
  { title: 'Pessoa Indígena', category: 'Etnia' },
  { title: 'Pessoa Quilombola', category: 'Etnia' },
  { title: 'Pessoa de Etnia Cigana', category: 'Etnia' },
  { title: 'Migrante ou Refugiado', category: 'Etnia' },
  { title: 'Pessoa em Situação de Baixa Renda', category: 'Financeira' },
  { title: 'Pessoa em Situação de Extrema Pobreza', category: 'Financeira' },
  { title: 'Pessoa Desempregada', category: 'Financeira' },
  { title: 'Trabalhador Informal', category: 'Financeira' },
  { title: 'Pessoa em Situação de Rua', category: 'Financeira' },
  { title: 'Mulher', category: 'Gênero' },
  { title: 'Mulher Chefe de Família', category: 'Gênero' },
  { title: 'Pessoa LGBTQIA+', category: 'Gênero' },
  { title: 'Pessoa Transgênero', category: 'Gênero' },
  { title: 'Pessoa Não-Binária', category: 'Gênero' },
  { title: 'Criança ou Adolescente', category: 'Idade' },
  { title: 'Pessoa Idosa', category: 'Idade' },
  { title: 'Jovem em Busca do Primeiro Emprego', category: 'Idade' },
  { title: 'Morador de Área Rural', category: 'Localização' },
  { title: 'Morador de Comunidade Ribeirinha', category: 'Localização' },
  { title: 'Morador de Favela ou Comunidade', category: 'Localização' },
  { title: 'Pessoa de Região Remota', category: 'Localização' },
  { title: 'Pessoa com HIV/AIDS', category: 'Saúde' },
  { title: 'Pessoa com Doença Crônica', category: 'Saúde' },
  { title: 'Pessoa com Transtorno Mental', category: 'Saúde' },
  { title: 'Pessoa em Tratamento Oncológico', category: 'Saúde' },
  { title: 'Pessoa com Dependência Química', category: 'Saúde' },
  { title: 'Vítima de Violência Doméstica', category: 'Situação Social' },
  { title: 'Ex-Detento', category: 'Situação Social' },
  { title: 'Pessoa em Medida Socioeducativa', category: 'Situação Social' },
  { title: 'Vítima de Trabalho Escravo', category: 'Situação Social' },
  { title: 'Vítima de Tráfico de Pessoas', category: 'Situação Social' },
];
import { useState } from 'react';


