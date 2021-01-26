export class Place {
    private _id: string
    private _title: string
    private _imageUri: string

    constructor(id: string, title: string, imageUri: string) {
        this._id = id;
        this._title = title;
        this._imageUri = imageUri;
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get imageUri(): string {
        return this._imageUri;
    }
}
