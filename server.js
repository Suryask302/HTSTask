import { app } from './app.js'
import { connectDB } from './config/db.js'

connectDB()
    .then(() => {

        const server = app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })

        process.on('unhandledRejection', (err) => {
            console.log(`Logged Error: ${err}`)
            console.log(`shutting down the server due to unhandled promise rejection`)
            server.close(() => process.exit(1))
        })

        process.on('uncaughtException', (err) => {
            console.log(`Logged Error: ${err}`)
            console.log(`shutting down the server due to uncaught exception`)
            process.exit(1)
        })


    }).catch((err) => {
        console.log(err)
        process.exit(1)
    })
