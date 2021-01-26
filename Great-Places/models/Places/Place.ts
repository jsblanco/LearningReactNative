export class Place {
    public id: string
    public title: string
    public address: string
    public imageUri: string
    public lat: number
    public lng: number

    constructor(id: string, title: string, address: string, imageUri: string, lat: number, lng: number) {
        this.id = id;
        this.title = title;
        this.address = address;
        this.imageUri = imageUri;
        this.lat = lat;
        this.lng = lng;
    }

}
