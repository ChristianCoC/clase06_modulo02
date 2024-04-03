// Funciones para dar respuestas al controlador de usuarios.
const users = [
    {
        id: 1,
        name: 'User 1'
    },
    {
        id: 2,
        name: 'User 2'
    },
    {
        id: 3,
        name: 'User 3'
    }
];

let id = 4;

module.exports = {
    getUsers: async () => {
        return users;
    },

    createUser: async (name) => {
        const newUser = {
            id,
            name,
        };
        id++;
        users.push(newUser);
    }
};