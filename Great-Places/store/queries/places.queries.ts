import ENV from "../../env"
import {LocationType} from "../../components/LocationPicker/LocationPicker";

export const fetchAddress = async ({lat, lng}: LocationType) => {
    const fetchUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${ENV().googleApi}`
    const response = await fetch(fetchUrl);
    if (!response.ok) throw new Error('Something went wrong');
    const resData = await response.json();
    if (!resData.results) throw new Error('Something went wrong')
    return resData.results[0].formatted_address;
}
