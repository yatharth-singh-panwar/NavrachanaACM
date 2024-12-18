import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    name : {type: String, required: true},
    desc : {type: String, required: true},
    date : {type: String, required: true},
    qrLink : {type: String, required: true},
    photoLink :{type : String, required: true},
    registrationLink : {type: String}
})

export const EventModel = mongoose.model("event",EventSchema);

