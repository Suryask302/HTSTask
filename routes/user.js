import { Router } from "express";
const router = Router()
import { login, register } from "../controller/user.js";

router
    .post('/register', register)
    .post('/login', login)

export default router