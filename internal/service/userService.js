const Users = require('../models/userModel');

class UserService {
    static async register(userData) {
        const username = userData.username
        const existUser = await Users.findOne({ username });

        if (existUser) {
            throw new Error('Username already taken');
        }
        else {
            const newUser = new Users(userData);
            const savedUser = await newUser.save();
            return savedUser;
        }
    }

    static async login(userData) {
        const username = userData.username
        const password = userData.password
        const user = await Users.findOne({ username, password });

        if (!user) {
            throw new Error('Invalid credentials');
        }
        return user;
    }
}

module.exports = UserService;