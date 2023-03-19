const UserService = require('../services/userService');

const userService = new UserService();

exports.createUser = async (req,res,next)=>{
    try {
        const userDetails = {
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

exports.logIn = async (req, res) => {
    try {
        console.log("Hi")
        console.log(req.body)
        const result = await userService.login(req.body.email, req.body.password);
        console.log("Hi")
        return res.status(200).json({
            status:"success",
            message: 'Successfully logged in',
            data:result        
        });
    } catch (error) {
        return res.status(401).json({
            status:"failed",
            message: 'Something went wrong',
            err: error
        });
    }
}

exports.isAuthenticated = async(req,res,next)=>{
    try {
        const token = req.headers['x-access-token']
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            status:"success",
            message: 'User is successfullu authenticated',
            response        
        }); 
    } catch (error) {
        return res.status(401).json({
            status:"failed",
            message: 'Something went wrong',
            err: error
        });
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