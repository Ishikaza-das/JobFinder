const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        
        if (!token) {
            return res.status(401).json({ message: "No token provided." });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000
        });
        
        next();
    } catch (error) {
        console.log('Token validation error:', error);
        res.clearCookie('token');
        return res.status(401).json({ message: "Invalid token" });
    }
};



module.exports = validateToken;