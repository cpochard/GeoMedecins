package com.pochard.geomedecins.services;

import java.util.List;

import com.pochard.geomedecins.models.Requete;
import com.pochard.geomedecins.repository.IRequeteRepository;

public interface IRequeteService {

	Requete getByID(int identifiant);

	IRequeteRepository getiRequeteRepository();

	void setiRequeteRepository(IRequeteRepository iRequeteRepository);

	List<Requete> getAll();

	void addRequete(Requete req);

}