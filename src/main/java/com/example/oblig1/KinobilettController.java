package com.example.oblig1;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
public class KinobilettController {

    private final List<Kinobilett> kinobillettListe = new ArrayList<>();

    // Endpoint to store a movie ticket
    @PostMapping("/lagre")
    public void lagreBillett(@RequestBody Kinobilett billett) {
        kinobillettListe.add(billett);
    }

    // Endpoint to fetch all movie tickets
    @GetMapping("/hentAlle")
    public List<Kinobilett> hentAlle() {
        return kinobillettListe;
    }

    // Endpoint to delete all movie tickets
    @GetMapping("/slettAlle")
    public void slettAlle() {
        kinobillettListe.clear();
    }
}
