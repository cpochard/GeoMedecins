package com.pochard.geomedecins.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pochard.geomedecins.models.Medecin;

//Cette classe sert de DAO. A la compilation, spring va générer toutes les méthodes qu'il faut pour faire l'appel à la BDD
//Donc génere les requetes SQL(plus besoin de taper de SQL),etc.. fait TOUT!
public interface IMedecinRepository extends JpaRepository<Medecin, Integer> {

}
