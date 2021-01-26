import {Place} from "./Place";
import {Adapter} from "../Adapter";


export class PlaceAdapter implements Adapter<Place> {

    constructor() {
    }

    adapt(item: any) {
        return new Place(item.id, item.title, item.address, item.imageUri, item.lat, item.lng)
    }
}
