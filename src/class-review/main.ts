class Truck {
    public model: string

    constructor(model: string){
        this.model = model
    }

    get name(): string {
        return `truck-${this.model}`
    }
}

class Lamp {
    #bluetoothConnection: string | null = null

    constructor(id: string){

    }
}