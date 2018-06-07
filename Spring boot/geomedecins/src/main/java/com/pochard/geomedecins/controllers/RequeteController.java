package com.pochard.geomedecins.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pochard.geomedecins.models.Requete;
import com.pochard.geomedecins.services.EmailServiceImpl;
import com.pochard.geomedecins.services.IRequeteService;

@CrossOrigin
@RestController
public class RequeteController implements IRequeteController {

	@Autowired
	IRequeteService requeteService;

	@Autowired
	EmailServiceImpl emailService;

	public IRequeteService getRequeteService() {
		return requeteService;
	}

	public void setRequeteService(IRequeteService requeteService) {
		this.requeteService = requeteService;
	}

	public RequeteController() {
	}

	@RequestMapping("/requetes")
	public List<Requete> afficherRequetes() {
		return this.requeteService.getAll();
	}

	@RequestMapping("/requete/{id}")
	public Requete getOne(@PathVariable int id) {
		Requete requete = this.requeteService.getByID(id);
		return requete;
	}

	@RequestMapping(value = "/requeteAjout", method = RequestMethod.POST)
	public void ajoutRequete(@RequestBody Requete req) {
		Requete r = this.requeteService.addRequete(req);
		System.out.println(r);
		// envoyer mail
		this.emailService.sendSimpleMessage("geomedecins@gmail.com", "test",
				"http://localhost:4200/requete/" + r.getId());
	}

}
