package com.pochard.geomedecins.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pochard.geomedecins.models.Medecin;
import com.pochard.geomedecins.repository.IMedecinRepository;

@Service
public class MedecinService implements IMedecinService {
	@Autowired
	IMedecinRepository iMedecinRepository;

	// private List<Medecin> medecins;

	@Override
	public IMedecinRepository getiMedecinRepository() {
		return iMedecinRepository;
	}

	@Override
	public void setiMedecinRepository(IMedecinRepository iMedecinRepository) {
		this.iMedecinRepository = iMedecinRepository;
	}

	/*
	 * public MedecinService() { /* this.medecins = new ArrayList<>(Arrays.asList(
	 * new Medecin("Gilles", "Boulon", "medecin generaliste", 12548, 563214,
	 * "doc1.jpg", "boulon@mail.com"), new Medecin("Celine", "Truc", "chirurgienne",
	 * 23654, 54896, "doc2.jpg", "truc@mail.com")));
	 */

	public List<Medecin> getAll() {
		return this.iMedecinRepository.findAll();
	}

	@Override
	public Medecin getByID(int identifiant) {
		/*
		 * Medecin med = null; for (Medecin m : medecins) { if (m.getId() ==
		 * identifiant) { med = m; } }
		 */
		return null;
	}

	@Override
	public void addMedecin(Medecin m) {
		// medecins.add(m);
	}

	@Override
	public void editMedecin(Medecin m) {
		/*
		 * for (Medecin med : medecins) { if (m.getId() == med.getId()) {
		 * med.setPrenom(m.getPrenom()); med.setNom(m.getNom());
		 * med.setProfession(m.getProfession()); med.setLattitude(m.getLattitude());
		 * med.setLongitude(m.getLongitude()); med.setPhoto(m.getPhoto());
		 * med.setEmail(m.getEmail()); } }
		 */
	}

	@Override
	public void deleteMedecin(Medecin m) {
		/*
		 * for (Medecin med : medecins) { if (m.getId() == med.getId()) {
		 * medecins.remove(m.getId()); } }
		 */
	}
}
