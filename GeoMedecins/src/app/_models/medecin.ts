export class Medecin {
    static count = 0;
    public id = 0;
    public prenom: string;
    public nom: string;
    public profession: string;
    public lattitude: number;
    public longitude: number;


    constructor(prenom = '', nom = '', profession = '', lattitude = 0, longitude = 0) {
        this.id = Medecin.count++;
        this.prenom = prenom;
        this.nom = nom;
        this.profession = profession;
        this.lattitude = lattitude;
        this.longitude = longitude;

    }
}
