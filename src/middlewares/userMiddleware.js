exports.validateUser = async (req,res,next)=>{
    if(!req.body.email || !req.body.password) {
       return res.status(400).json({
            success: false,
            message: 'Something went wrong',
            err: 'Please enter email and password'
        });
    }
    next();
}