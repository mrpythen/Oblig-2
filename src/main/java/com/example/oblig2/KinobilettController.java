package com.example.oblig2;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
public class KinobilettController {

    private final List<Kinobilett> kinobillettListe = new ArrayList<>();


    @PostMapping("/lagre")
    public void lagreBillett(@RequestBody Kinobilett billett) {
        kinobillettListe.add(billett);
    }

    @GetMapping("/hentAlle")
    public List<Kinobilett> hentAlle() {
        return kinobillettListe;
    }


    @GetMapping("/slettAlle")
    public void slettAlle() {
        kinobillettListe.clear();
    }
}
