package com.pochard.geomedecins.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pochard.geomedecins.models.Requete;

public interface IRequeteRepository extends JpaRepository<Requete, Integer> {

}
