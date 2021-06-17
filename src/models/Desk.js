import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Desk = new Schema({
    color: {
        type: String,
        required: true,
    },
    width: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    }
}, { versionKey: false, });

export default mongoose.model(`Desk`, Desk, `Desk`)