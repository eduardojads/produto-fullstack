/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditarCategoria(){

    const {categoriaId} = useParams();

    useEffect( () => {
        console.log("carregando categoria", categoriaId);
    }, [categoriaId] )

    return(
        <Box sx={{mt: 2, p: 4}}>
            <Typography variant="h4" component="h1">
                Editar Categoria
            </Typography>

        </Box>
    )

    
}