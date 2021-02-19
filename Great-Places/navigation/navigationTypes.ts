type StackNavigation = {
    List: undefined
    Details: {
        id: string
    }
    AddNew: {
        selectedLocation?: { lat: number, lng: number }
    }
    Map:
        {
            readonly?: boolean,
            initialLocation?: { lat: number, lng: number }
        }
};
