import mongoose from "mongoose";

const itemSchema=mongoose.Schema({

    item: String,
    message: String,
    name: String,
    creator: String,
    address:String,
    phone:String,
    tags: [String],
    selectedFile: [String],
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})
var Item = mongoose.model('Item', itemSchema);

export default Item ;