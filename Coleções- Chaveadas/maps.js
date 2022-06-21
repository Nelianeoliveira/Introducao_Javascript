const getAdmins = (map) => {
    let admins = [];

    for ([key, value] of map) {
        if (value === 'ADMIN') {
            admins.push(key);
        }
    }

    return admins;
};

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Neliane', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));