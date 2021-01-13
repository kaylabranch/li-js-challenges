// Create a user object that has the following properties:
// Username, password, age
// Username and password need to be private fields on the User
// Use JS symbols

class User {
    #username;
    #password;

    constructor(username, password, age) {
        this.#username = username;
        this.#password = password;
        this.age = age;
    }
}

// NOTE the instructions were to use symbols, however symbols don't provide true privacy and this new JS feature does