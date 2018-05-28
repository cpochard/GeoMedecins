export class Requete {
    static count = 0;
    public id = 0;
    public sujet: string;
    public date: Date;
    public patient;
    public lat;
    public lon;

    constructor(sujet = '', date = new Date(), patient = '', lat = 0, lon = 0) {
        this.id = Requete.count++;
        this.sujet = sujet;
        this.date = date;
        this.patient = patient;
        this.lat = lat;
        this.lon = lon;
    }
}
