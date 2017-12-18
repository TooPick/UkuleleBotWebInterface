import User from './models/user';

export default function seed() {

    const adminUser = new User({
        username: 'admin',
        password: 'admin',
        role: 'ROLE_ADMIN'
    });

    adminUser.save((err, item) => {
        if (!err) {
            console.log('User admin par défaut créé !');
        }

    });
};