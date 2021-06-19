import { makeAutoObservable } from 'mobx'

class Users {
    users = []

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    getUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.users = [ ...json]
            })
    }

    
}

export default new Users()