const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    bcrypt = require("bcrypt"),
    SALT_WORK_FACTOR = 10;


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true },
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
      },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },  
    createdAt: {
        type: Date,
        default: Date.now,
      },
});

UserSchema.pre('save', function(next) { 
    const user = this;
    
if (!user.isModified('password')) return next();

bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        user.password = hash;
        next();
    })
})
})

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    })
};



module.exports = mongoose.model('User', UserSchema);