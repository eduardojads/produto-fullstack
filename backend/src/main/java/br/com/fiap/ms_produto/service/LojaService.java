package br.com.fiap.ms_produto.service;


import br.com.fiap.ms_produto.dto.LojaDTO;
import br.com.fiap.ms_produto.repositories.LojaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class LojaService {

    @Autowired
    private LojaRepository lojaRepository;

    @Transactional(readOnly = true)
    public List<LojaDTO> findAll() {
        return lojaRepository.findAll().stream().map(LojaDTO::new).toList();
    }
}
