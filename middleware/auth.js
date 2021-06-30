const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

verifyToken = (req, res, next) => {

    let bearerHeader = req.headers['authorization'];
    console.log("Checking Token");
    if (!bearerHeader) {
        console.log("no token recieved");
        return res.status(403).json({
            message: "No token provided - User is not authorized!"
        })
    }

    const bearer = bearerHeader.split(' ');
    var bearerToken = bearer[1];
    bearerToken = bearerToken.slice(1, -1);
    req.token = bearerToken;

    jwt.verify(bearerToken, config.secret, (err) => {
        if (err) {
            console.log("token invalid");
            return res.status(403).send({ message: "Token not valid" })
        }
        else {
            console.log("token valid - running next request");
            next();
        }
    })

}

const authJwt = { verifyToken }

module.exports = authJwt;