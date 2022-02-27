const {user } = require('../models/index')
const bcrypt = require('bcrypt')
const {signToken} = require('../helpers/jwt')

const register = async(req,res,next)=>{
    try {
        const {email,password,name} = req.body
        const result = await user.create({
            email,password,name
        })
        res.status(201).json({
            id:result.id,
            email:result.email,
            
        })

    } catch (error) {
        next(error)
    }
}

const login = async(req,res,next)=>{
    try {
        const {email,password} = req.body
        if(!email){
            throw {name: "Email is required"}
        }
        if(!password){
            throw {name: "Password is required"}
        }

       const result = await user.findOne({
           where:{email}
       })
       if(!result){
        throw {name: "Invalid email/password"}
       }

       const isPassword = bcrypt.compareSync(password, result.password)
       if(!isPassword){
        throw {name: "Invalid email/password"}
       }
       const payload ={
           id:result.id,
           email:result.email
       }

       const access_token = signToken(payload)
       res.status(200).json({access_token: access_token})

    } catch (error) {
        next(error)
    }
}

module.exports = {register, login}