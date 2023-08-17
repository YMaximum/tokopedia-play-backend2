const UserService = require('../service/userService');

class UserController {
    static async register(req, res) {
        try {
            const { username, password } = req.body
            const newUser = await UserService.register({
                username: username,
                password: password
            });
            res.status(201).json(newUser);
        }
        catch (e) {
            res.status(500).json({ message: e.message });
        }
    }

    static async login(req, res) {
        try {
            const { username, password } = req.body
            const userLogin = await UserService.login({
                username: username,
                password: password
            });
            res.status(200).json(userLogin);
        }
        catch (e) {
            res.status(401).json({ message: e.message });
        }
    }
}

module.exports = UserController;