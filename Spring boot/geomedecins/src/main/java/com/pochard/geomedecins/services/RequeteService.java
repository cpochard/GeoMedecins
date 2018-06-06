package com.pochard.geomedecins.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pochard.geomedecins.models.Requete;
import com.pochard.geomedecins.repository.IRequeteRepository;

@Service
public class RequeteService implements IRequeteService {

	// private List<Requete> requetes;

	@Autowired
	IRequeteRepository iRequeteRepository;

	@Override
	public IRequeteRepository getiRequeteRepository() {
		return iRequeteRepository;
	}

	@Override
	public void setiRequeteRepository(IRequeteRepository iRequeteRepository) {
		this.iRequeteRepository = iRequeteRepository;
	}

	public RequeteService() {/*
								 * try { this.requetes = Arrays.asList( new Requete("accident", new
								 * SimpleDateFormat("yyyy-MM-dd").parse("2018-03-13"), "patient1", 47.2737829,
								 * -2.2603029), new Requete("accident 2", new
								 * SimpleDateFormat("yyyy-MM-dd").parse("2015-11-04"), "patient2", 47.239367,
								 * -1.7199081)); } catch (ParseException e) { // TODO Auto-generated catch block
								 * e.printStackTrace(); }
								 */
	}

	@Override
	public List<Requete> getAll() {
		return this.iRequeteRepository.findAll();
	}

	@Override
	public Requete getByID(int identifiant) {
		return this.iRequeteRepository.getOne(identifiant);
	}
}
