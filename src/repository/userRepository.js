const {User} = require('../models/index');

class UserRepository{
    async createUser(data){
        try {
            const user = await User.create(data);
            return user 
        } catch (error) {
            console.log("failed to create User")
            throw(error)
        }
        
    }

    async deleteUser(id){
        try {
            const user = await User.destroy({
                where:{
                    id:id
                }
            })
            return user;
        } catch (error) {
            console.log("failed to create User")
            throw(error)
        }
    }

    async getByEmail(userEmail) {
        try {
            const user = await User.findOne({where: {
                email: userEmail
            }});
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getById(userId) {
        try {
            const user = await User.findByPk(userId, {
                attributes: ['email', 'id']
            });
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
}

module.exports = UserRepository;