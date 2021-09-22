import mongoose from 'mongoose';

const classroomSchema = mongoose.Schema({
  className: String,
  subject: String,
  room: String,
  leader: String,
  member: [{
    name: String,
    givenName: String,
    familyName: String,
    email: String,
    imageUrl: String,
    googleId: String
  }]
})

var Classroom = mongoose.model('Classroom', classroomSchema);

export default Classroom;