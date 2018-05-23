export class Medecin {
    static count = 0;
    public id = 0;
    public prenom: string;
    public nom: string;

    constructor(prenom = '', nom = '') {
        this.id = Medecin.count++;
        this.prenom = prenom;
        this.nom = nom;

    }
}
