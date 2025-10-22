package br.com.fiap.ms_produto.controller;


import br.com.fiap.ms_produto.dto.LojaDTO;
import br.com.fiap.ms_produto.service.LojaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/lojas")
public class LojaController {

    @Autowired
    private LojaService lojaService;

    @GetMapping
    public ResponseEntity<List<LojaDTO>> findAll(){
        List<LojaDTO> dto = lojaService.findAll();
        return ResponseEntity.ok(dto);
    }
}
