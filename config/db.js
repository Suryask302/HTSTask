import mongoose, { connect } from "mongoose";

export const connectDB = async _ => {
    await connect(process.env.MONGO_URI, {
        dbName: process.env.DB_NAME,
    })
}

mongoose.connection.on(`connected`, _ => console.log(`mongoose Is Connected To '${mongoose.connection.name}' Database`))
mongoose.connection.on(`error`, err => console.log(err.message))
mongoose.connection.on(`disconnected`, _ => console.log(`mongoose Connection Is Disconnected`))



