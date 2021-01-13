

export default class Category {
    readonly _id: string;
    readonly _title: string;
    readonly _colour: string;

    constructor(id: string, title: string, colour: string ) {
        this._id = id;
        this._title = title;
        this._colour = colour;
    }


    getId(): string {
        return this._id;
    }

    getTitle(): string {
        return this._title;
    }

    getColour(): string {
        return this._colour;
    }
}
