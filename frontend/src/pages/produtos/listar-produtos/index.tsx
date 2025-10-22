import { Box, Typography, Alert, Table, TableHead, TableRow, TableContainer, TableCell, Paper, TableBody, IconButton, CircularProgress } from "@mui/material";
import type { ProdutoDTO } from "../../../models/produto";
import { useEffect, useState } from "react";
import * as produtoService from "../../../services/produto-service";
import axios from "axios";
import { Link } from "react-router-dom";
import { Delete, Edit } from "@mui/icons-material";

export default function ListarProdutos() {
  const [produtos, setProdutos] = useState<ProdutoDTO[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const data = await produtoService.findAll();

        setProdutos(data);
      } catch (error: unknown) {
        let msg = "Erro ao carregar Produtos!";
        if (axios.isAxiosError(error) && error.response) {
          msg = error.response.data.error || msg;
        }
        setError(msg);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProdutos();
  }, []);


  return (
    <Box sx={{ p: 4 }}>
      {isLoading && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {isLoading}
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <Typography variant="h4" component="h1" gutterBottom>
        Produtos
      </Typography>

      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <CircularProgress />
        </Box>
      ) : (
        !error && (
          <Typography variant="body1">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 900 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Descrição</TableCell>
                    <TableCell>Valor</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell>Lojas</TableCell>
                    <TableCell>Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {produtos.map((produto) => (
                    <TableRow key={produto.id}>
                      <TableCell>{produto.id}</TableCell>
                      <TableCell>{produto.nome}</TableCell>
                      <TableCell>{produto.descricao}</TableCell>
                      <TableCell>
                        {produto.valor.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </TableCell>
                      <TableCell>{produto.categoria.nome}</TableCell>
                      <TableCell>
                        {produto.lojas.map((loja) => loja.nome).join(", ")}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="editar"
                          component={Link}
                          to={`/produtos/editar/${produto.id}`}
                        >
                          <Edit />
                        </IconButton>

                        <IconButton
                          aria-label="excluir"
                          //onClick={() => handleDelete(produto.id)}
                          sx={{ ml: 1 }}
                        >
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        )
      )}
    </Box>
  );
}
