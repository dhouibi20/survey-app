module.exports = (req, res, next) => {
    if(!req.user){
        return res.status(401).send({err: 'you must be logged in'})
    }

    next();
}