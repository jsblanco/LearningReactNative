class Meal {
    readonly _id: string
    readonly _categoryId: string[]
    readonly _title: string
    readonly _affordability: string
    readonly _complexity: string
    readonly _imageUrl: string
    readonly _duration: number
    readonly _ingredients: string[]
    readonly _steps: string[]
    readonly _isGlutenFree: boolean
    readonly _isVegan: boolean
    readonly _isVegetarian: boolean
    readonly _isLactoseFree: boolean

    constructor(id: string, categoryId: string[], title: string, affordability: string, complexity: string, imageUrl: string, duration: number, ingredients: string[], steps: string[], isGlutenFree: boolean, isVegan: boolean, isVegetarian: boolean, isLactoseFree: boolean) {
        this._id = id;
        this._categoryId = categoryId;
        this._title = title;
        this._affordability = affordability;
        this._complexity = complexity;
        this._imageUrl = imageUrl;
        this._duration = duration;
        this._ingredients = ingredients;
        this._steps = steps;
        this._isGlutenFree = isGlutenFree;
        this._isVegan = isVegan;
        this._isVegetarian = isVegetarian;
        this._isLactoseFree = isLactoseFree;
    }


    get id(): string {
        return this._id;
    }

    get categoryId(): string[] {
        return this._categoryId;
    }

    get title(): string {
        return this._title;
    }

    get affordability(): string {
        return this._affordability;
    }

    get complexity(): string {
        return this._complexity;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    get duration(): number {
        return this._duration;
    }

    get ingredients(): string[] {
        return this._ingredients;
    }

    get steps(): string[] {
        return this._steps;
    }

    get isGlutenFree(): boolean {
        return this._isGlutenFree;
    }

    get isVegan(): boolean {
        return this._isVegan;
    }

    get isVegetarian(): boolean {
        return this._isVegetarian;
    }

    get isLactoseFree(): boolean {
        return this._isLactoseFree;
    }


}

export default Meal;
