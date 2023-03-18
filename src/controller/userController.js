const UserService = require('../services/userService');

const userService = new UserService();

exports.createUser = async (req,res,next)=>{
    try {
        const userDetails ={
            email:req.body.email,
            password:req.body.password
        }

        const user = await userService.createUser(userDetails)
        res.status(200).json({
            status:"Success",
            message:"User Created Successfully",
            datt:user
        })
    } catch (error) {
        res.status(400).json({
            status:"Failed",
            message:"User creation is not successfull",
            err:error
        })

    }
}

exports.deleteUser = async (req,res,next)=>{
    try {
        const deletedUser = await userService.deleteUser(req.params.id)
        res.status(200).json({
        status:"Success",
        message:"User Deleted Successfully",
        datt:deletedUser
    })
        
    } catch (error) {
        res.status(400).json({
            status:"Failed",
            message:"User deletion is not successfull",
            err:error
        })
    }

}