const jwt = require('jsonwebtoken');

const validateToken = async (req,res,next) => {
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message: "No token provided."});
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch(error){
        return res.status(401).json({message: "Error validating token."});
    }
};

module.exports = validateToken;