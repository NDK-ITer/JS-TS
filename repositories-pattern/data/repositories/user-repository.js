const userModel = require('/repositories-pattern/models/user-model');

class UserRepository {
    async getAllUsers() {
        return userModel.find();
    }

    async getUserById(userId) {
        return userModel.findById(userId);
    }

    async createUser(userData) {
        const newUser = new UserModel(userData);
        return newUser.save();
    }

    async deleteUser(userId){
        const del = userModel.del(userId);
    }
}

module.exports = UserRepository;