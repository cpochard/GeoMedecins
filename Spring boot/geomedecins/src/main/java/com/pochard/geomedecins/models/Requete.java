package com.pochard.geomedecins.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Requete {

	private static int count = 0;
	@Id
	private int id = 0;
	@Column
	private String sujet;
	@Column
	private Date date;
	@Column
	private String patient;
	@Column
	private double lat;
	@Column
	private double lon;

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Requete [id=");
		builder.append(id);
		builder.append(", sujet=");
		builder.append(sujet);
		builder.append(", date=");
		builder.append(date);
		builder.append(", patient=");
		builder.append(patient);
		builder.append(", lat=");
		builder.append(lat);
		builder.append(", lon=");
		builder.append(lon);
		builder.append("]");
		return builder.toString();
	}

	static int getCount() {
		return count;
	}

	public static void setCount(int count) {
		Requete.count = count;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSujet() {
		return sujet;
	}

	public void setSujet(String sujet) {
		this.sujet = sujet;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getPatient() {
		return patient;
	}

	public void setPatient(String patient) {
		this.patient = patient;
	}

	public double getLat() {
		return lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

	public double getLon() {
		return lon;
	}

	public void setLon(double lon) {
		this.lon = lon;
	}

	public Requete(String tmpSujet, Date tmpDate, String tmpPatient, double tmpLat, double tmpLon) {
		this.id = Requete.count++;
		this.sujet = tmpSujet;
		this.date = tmpDate;
		this.patient = tmpPatient;
		this.lat = tmpLat;
		this.lon = tmpLon;
	}

	public Requete() {

	}

}
