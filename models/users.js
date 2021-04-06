const users = [
    {
        id: 1,
        name: 'Marat Bulatov',
        email: 'marat.bulatov@mail.ru',
        passwordhash: ''
    },
    {
        id: 2,
        name: 'Tumar Urodov',
        email: 'tu@ma.ru',
        passwordhash: ''
    }
]

module.exports = class Users
{
    static getAll() {
        return users
    }

    static getUser(email) {
        const user = this.getAll().find(item => item.email === email)
        if (user) {
            return user
        }
    }

    static check_password(user, password) {
        return true
    }

    static get_user(email, password){
        const user = this.getUser(email, password)
        if ((user) && this.check_password(user, password)) {
            return user
        }
    }

}