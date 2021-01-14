

export default class Category {
    private readonly _id: string;
    private readonly _title: string;
    private readonly _colour: string;

    constructor(id: string, title: string, colour: string ) {
        this._id = id;
        this._title = title;
        this._colour = colour;
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get colour(): string {
        return this._colour;
    }
}
