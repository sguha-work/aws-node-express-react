import * as mongoose from 'mongoose';
import patcher from 'mongoose-patcher';
let Schema = mongoose.Schema;

let schema = new Schema({
    name: { type: String, required: true },
    phonenumber: { type: Number, required: true },
    address: { type: String, required: true },
    sex: {
        type: String,
        enum: ["Male", "Female", "Trans", "Gay"],
        required: true
    }
},
    { timestamps: true, optimisticConcurrency: true }
);

// If no path is given, all date fields will be applied
schema.plugin(patcher);
export default mongoose.model("user", schema);