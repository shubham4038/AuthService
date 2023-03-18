'use strict';
const  UserRepository = require('../repository/userRepository');

const userRepositoty = new UserRepository();

class UserService{
    async createUser(data){
        try {
            const user = await userRepositoty.createUser(data);
            return user
        } catch (error) {
            console.log("Something went wrong at service layer")
            throw(error)
        }
    }

    async deleteUser(id){
        try {
            const user = await userRepositoty.deleteUser(id)
            return user;
        } catch (error) {
            console.log("Something went wrong at service layer")
            throw(error)
        }
    }
    
}

module.exports = UserService;