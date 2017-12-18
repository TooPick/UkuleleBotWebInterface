import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: [
            'ROLE_USER',
            'ROLE_ADMIN'
        ],
        default: 'ROLE_USER'
    }
});

// Before saving the user, hash the password
userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) { return next(); }
    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }
        bcrypt.hash(user.password, salt, function(error, hash) {
            if (error) { return next(error); }
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) { return callback(err); }
        callback(null, isMatch);
    });
};

userSchema.methods.hashPassword = function(password, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return callback(err); }
        bcrypt.hash(password, salt, function(error, hash) {
            if (error) { return callback(error); }
            callback(null, hash);
        });
    });
};


// Omit the password when returning a user
userSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        delete ret.password;
        return ret;
    }
});

const User = mongoose.model('User', userSchema);

export default User;
