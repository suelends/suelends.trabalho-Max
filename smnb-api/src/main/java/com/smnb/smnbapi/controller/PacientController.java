package com.smnb.smnbapi.controller;

import com.smnb.smnbapi.model.Pacient;
import com.smnb.smnbapi.repository.PacientRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping({"/pacients"})
public class PacientController {
    private PacientRepository repository;

    PacientController(PacientRepository pacientRepository) {
        this.repository = pacientRepository;
    }

    @GetMapping
    @CrossOrigin
    public List findAll(){
        return repository.findAll();
    }

    @GetMapping(path = {"/{id}"})
    @CrossOrigin
    public ResponseEntity<Pacient> findById(@PathVariable long id){
        return repository.findById(id)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @CrossOrigin
    public Pacient create(@RequestBody Pacient pacient){

        return repository.save(pacient);
    }

    @PutMapping(value="/{id}")
    @CrossOrigin
    public ResponseEntity<Pacient> update(@PathVariable("id") long id,
                                          @RequestBody Pacient pacient){
        return repository.findById(id)
                .map(record -> {
                    record.setName(pacient.getName());
                    record.setEmail(pacient.getEmail());
                    record.setPhone(pacient.getPhone());
                    record.setPassword(pacient.getPassword());
                    Pacient updated = repository.save(record);
                    return ResponseEntity.ok().body(updated);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path ={"/{id}"})
    @CrossOrigin
    public ResponseEntity<?> delete(@PathVariable("id") long id) {
        return repository.findById(id)
                .map(record -> {
                    repository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
