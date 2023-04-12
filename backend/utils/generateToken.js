import jwt from 'jsonwebtoken';

const generateToken = (id) =>{
    return jwt.sign({id}, '121212', {
        expiresIn: '30d'
    })
}

export default generateToken