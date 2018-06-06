package com.pochard.geomedecins.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

// Prévient qu'il y a une table sql qui correspond à cette classe
@Entity
public class Medecin {

	private static int count = 0;
	@Id
	private int id = 0;
	// Prévient que la variable qui suit est présente dans la BDD sous la forme
	// d'une colonne
	@Column
	private String prenom;
	@Column
	private String nom;
	@Column
	private String profession;
	@Column
	private double lattitude;
	@Column
	private double longitude;
	@Column
	private String photo;
	@Column
	private String email;

	public static int getCount() {
		return count;
	}

	public static void setCount(int count) {
		Medecin.count = count;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getProfession() {
		return profession;
	}

	public void setProfession(String profession) {
		this.profession = profession;
	}

	public double getLattitude() {
		return lattitude;
	}

	public void setLattitude(int lattitude) {
		this.lattitude = lattitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(int longitude) {
		this.longitude = longitude;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Medecin [id=");
		builder.append(id);
		builder.append(", prenom=");
		builder.append(prenom);
		builder.append(", nom=");
		builder.append(nom);
		builder.append(", profession=");
		builder.append(profession);
		builder.append(", lattitude=");
		builder.append(lattitude);
		builder.append(", longitude=");
		builder.append(longitude);
		builder.append(", photo=");
		builder.append(photo);
		builder.append(", email=");
		builder.append(email);
		builder.append("]");
		return builder.toString();
	}

	public Medecin(String tmpPrenom, String tmpNom, String tmpProfession, int tmpLattitude, int tmpLongitude,
			String tmpPhoto, String tmpEmail) {
		this.id = Medecin.count++;
		this.prenom = tmpPrenom;
		this.nom = tmpNom;
		this.profession = tmpProfession;
		this.lattitude = tmpLattitude;
		this.longitude = tmpLongitude;
		this.photo = tmpPhoto;
		this.email = tmpEmail;

	}

	public Medecin() {
	}

}
