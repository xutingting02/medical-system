import db from '../config/db.js'
const userModel = '../schema/user.js'
const Medical = db.Medical

const User = Medical.import(userModel)

const getUserById = async function (id) {
    const userInfo = await User.findOne({
        where: {
            id: id
        }
    })
    return userInfo
}

const getUserByName = async function (name) {
    const userInfo = await User.findOne({
        where: {
            user_name: name
        }
    })

    return userInfo
}

const addUser = async function (data) {
    await User.create({
        user_name: data.name,
        password: data.password
    })
    return true
}

export default {
    getUserById,
    getUserByName,
    addUser
}