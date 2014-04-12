var User = {
    username: String,
    name: String,
    active: Boolean,
    imageUrl: String,
    activities: [
        {
            type: String,
            description: String,
            content: String,
            dateCreated: Date
        }
    ],
    password: String,
    email: String
};

module.exports = User;