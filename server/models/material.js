import mongoose from 'mongoose';

const materialSchema = mongoose.Schema({
    title: String,
    description: String,
    authorizer: String,
    createAt: {
        type: Date,
        default: new Date
    }
});

var Material = mongoose.model('Material', materialSchema);

export default Material;