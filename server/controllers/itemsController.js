const { client,room,roomUsage,user} = require('../models/index')


const getClient = async (req,res,next) => {
    try {
        const result = await client.findAll()

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}

const getRoom = async (req,res,next) => {
    try {
        const result = await room.findAll()

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}

const getRoomUsage = async (req,res,next) => {
    try {
        const result = await roomUsage.findAll({
            include: [
                {
                    model: client,
                },
                {
                    model: room,
                }
            ]
        })

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}

const getUser= async (req,res,next) => {
    try {
        const result = await user.findAll()

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}





module.exports = {getClient,getRoom,getRoomUsage , getUser}