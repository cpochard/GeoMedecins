package com.pochard.geomedecins.services;

import java.util.List;

import com.pochard.geomedecins.models.Medecin;
import com.pochard.geomedecins.repository.IMedecinRepository;

public interface IMedecinService {

	Medecin getByID(int identifiant);

	void addMedecin(Medecin m);

	void editMedecin(Medecin m);

	void deleteMedecin(Medecin m);

	IMedecinRepository getiMedecinRepository();

	void setiMedecinRepository(IMedecinRepository iMedecinRepository);

	List<Medecin> getAll();

}