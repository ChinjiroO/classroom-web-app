import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    googleId: String,
    email: String,
    givenName: String,
    familyName: String,
    imageUrl: String,
    permissionStatus: String
});

var User = mongoose.model('User', userSchema);

export default  User;