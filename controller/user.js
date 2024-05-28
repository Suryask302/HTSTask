
import { Users } from "../models/user.js"

export const register = async (req, res) => {

    try {

        const { first_name, last_name, email, password } = req.body

        if (!first_name || !last_name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'please provide all details'
            })
        }

        const isUserExist = await Users.findOne({ email })

        if (isUserExist) {
            return res.status(400).json({
                success: false,
                message: 'user already exist'
            })
        }

        const newUser = await Users.create({
            first_name,
            last_name,
            email,
            password
        })


        return res.status(201).json({
            success: true,
            message: 'user registerd successfully',
            data : newUser
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}


export const login = async (req, res) => {

    try {

        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'please provide all details'
            })
        }

        const isUserExist = await Users.findOne({ email }).select('+password').lean()

        if (!isUserExist) {
            return res.status(404).json({
                success: false,
                message: 'user not found, please check credentials'
            })
        }

        const checkPassword = isUserExist.password === password

        if (!checkPassword) {
            return res.status(400).json({
                success: false,
                message: 'credentials mismatched'
            })
        }

        delete isUserExist['password']

        return res.status(200).json({
            success: true,
            message: 'login successfull',
            data: isUserExist
        })


    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}