import { makeAutoObservable } from "mobx"


class CountStore {
    count = 0

    constructor() {
        makeAutoObservable(this)
    }

    increment = () => {
        this.count = this.count + 1
    }
    decrement = () => {
        if(this.count>0){
            this.count = this.count - 1
        }
    }
}

export default new CountStore()