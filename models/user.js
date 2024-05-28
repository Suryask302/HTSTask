import { Schema, model } from "mongoose";

const schema = new Schema({

    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true
    },

    first_name: {
        type: String,
        trim: true,
        required: [true, 'Please Provide A First Name']
    },

    last_name: {
        type: String,
        trim: true,
        required: [true, 'Please Provide A First Name']
    },

    password: {
        type: String,
        trim: true,
        required: [true, 'Please Provide A First Name'],
        select : false
    }

}, { timestamps: true })

export const Users = model('User', schema)