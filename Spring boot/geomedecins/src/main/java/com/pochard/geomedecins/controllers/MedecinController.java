package com.pochard.geomedecins.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pochard.geomedecins.models.Medecin;
import com.pochard.geomedecins.services.IMedecinService;

//Pour autoriser un serveur à requeter vers cette URL
@CrossOrigin
@RestController
public class MedecinController implements IMedecinController {

	@Autowired
	IMedecinService medecinService;

	public IMedecinService getMedecinService() {
		return medecinService;
	}

	public void setMedecinService(IMedecinService medecinService) {
		this.medecinService = medecinService;
	}

	public MedecinController() {
	}

	@RequestMapping("/all")
	public List<Medecin> getAll() {
		return this.medecinService.getAll();
	}

	@RequestMapping(value = "/medecin/{id}", method = RequestMethod.GET)
	public Medecin getOne(@PathVariable int id) {
		Medecin medecin = this.medecinService.getByID(id);
		return medecin;
	}

	@RequestMapping(value = "/ajoutMedecin", method = RequestMethod.POST)
	public void ajoutMedecin(@RequestBody Medecin m) {
		this.medecinService.addMedecin(m);
		System.out.println(m);
	}

	@RequestMapping(value = "/modifMedecin", method = RequestMethod.PUT)
	public void modifMedecin(@RequestBody Medecin m) {
		this.medecinService.editMedecin(m);
		System.out.println(m);
	}

	@RequestMapping(value = "/supprimMedecin", method = RequestMethod.DELETE)
	public void supprimerMedecin(@RequestBody Medecin m) {
		this.medecinService.deleteMedecin(m);
		System.out.println(m);
	}

}
