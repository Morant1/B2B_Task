const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')

const saltRounds = 10

async function login(personal_id, password) {


    logger.debug(`auth.service - login with username: ${personal_id}`)
    if (!personal_id || !password) return Promise.reject('username and password are required!')

    const user = await userService.getById(personal_id)
    console.log("personal_id",personal_id)
    console.log("password",password)
    console.log("user,login-",user)
    if (!user) return Promise.reject('Invalid personal_id or password')
    const match = await bcrypt.compare(password, user.password)
    console.log("match",match)
    if (!match) return Promise.reject('Invalid personal_id or password')

    // delete user.password;
    return user;
}



async function signup(personal_id, password) {
    logger.debug(`auth.service - signup with username: ${personal_id}`)
    if ( !personal_id || !password) return Promise.reject('username and password are required!')

    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({personal_id, password: hash})
}

module.exports = {
    signup,
    login
}