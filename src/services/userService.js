'use strict';
const  UserRepository = require('../repository/userRepository');
const {JWT_KEY} = require('../config/serverConfig');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userRepository = new UserRepository();
class UserService{
    async createUser(data){
        try {
            const user = await userRepository.createUser(data);
            return user
        } catch (error) {
            console.log("Something went wrong at service layer")
            throw(error)
        }
    }

    async deleteUser(id){
        try {
            const user = await userRepository.deleteUser(id)
            return user;
        } catch (error) {
            console.log("Something went wrong at service layer")
            throw(error)
        }
    }
    async login(email,password){
        try {
            const user = await userRepository.getByEmail(email);
            const passwordMatch = this.checkPassword(password, user.password);
            console.log(passwordMatch);
            if(!passwordMatch){
                console.log("Password doesn't match");
                throw(error)
            }
            const jwtUser = this.createToken({email: user.email, id: user.id});
            return jwtUser;
        } catch (error) {
            throw(error)
        }
    }

    async isAuthenticated(token){
        try {
            const result = this.verifyToken(token)
            if(!result){
                throw {error: "User dont ahve valid token"}
            }
            const user = userRepository.getById(result.id)
            if(!user){
                throw {error: "User not found"}
            }
            return result.id;
        } catch (error) {
            throw {error: "Erros in token"}
        }
    }

    createToken(user){
        try {
            let jwtToken = jwt.sign(user,JWT_KEY,{
                expiresIn:'1h'
            })
            return jwtToken
        } catch (error) {
            throw(error)
        }
       
    }

    verifyToken(token){
        try {
            const response = jwt.verify(token,JWT_KEY)
            return response 
        } catch (error) {
            throw(error)
        }
    }

    checkPassword(enteredPassword,userPassword){
        try {
            const check = bcrypt.compareSync(enteredPassword,userPassword)
            return check
        } catch (error) {
            throw(error)
        }
    }
    
    isAdmin(userId){
        try {
            const adminuser = userRepository.isAdmin(userId)
            return adminuser 
        } catch (error) {
            throw {error : "error in service Role"}
        }
    }
}

module.exports = UserService;