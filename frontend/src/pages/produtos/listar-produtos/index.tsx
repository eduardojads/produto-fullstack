import { Box, Typography } from "@mui/material";

export default function ListarProdutos() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Página de listagem de produtos
      </Typography>

      <Typography variant="body1">
        Aqui será a lista de todas os produtos
      </Typography>
    </Box>
  );
}
