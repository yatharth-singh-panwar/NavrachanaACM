import express, { Request, Response } from "express";
import { EventModel } from "./db";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { stringify } from "querystring";
import cors from "cors";
import { Types } from "mongoose";
dotenv.config();

const mongoURI = process.env.MONGOURI;
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (mongoURI) {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connection to database established successfully :)");
    })
    .catch((err: any) => {
      console.log("Failed to connect to MONGO DB :( ", err);
    });
}

const app = express();
app.use(cors());
app.use(express.json());

//@ts-ignore
app.post("/admin/login", (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  if (userName !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    console.log(ADMIN_USERNAME);
    console.log(ADMIN_PASSWORD);
    res.status(401).send({
      msg: "Invalid Password username combination",
    });
  } else {
    if (!JWT_PRIVATE_KEY) {
      return res.status(500).send({
        msg: "JWT private key is not defined",
      });
    }
    const jwtforAdmin = jwt.sign(
      {
        id: userName,
      },
      JWT_PRIVATE_KEY
    );
    res.send({
      msg: "Successfully Signed in",
      token: jwtforAdmin,
    });
  }
});

//CRUD OPERATIONS FOR ADMIN
//add event
app.post("/admin/dashboard/Event", async (req, res) => {
  const { name, description, date, qrLink, photoLink, registrationLink } =
    req.body;
  const newEvent = new EventModel({
    name: name,
    desc: description,
    date: date,
    qrLink: qrLink,
    photoLink: photoLink,
    registrationLink: registrationLink,
  });
  try {
    await newEvent.save();
    res.status(200).send({
      msg: "Event added successfully",
    });
  } catch (e) {
    res.send({
      error: e,
    });
  }
});

//delete event
app.delete("/admin/dashboard/Event", async (req, res) => {
  const name = req.body.name;
  try {
    await EventModel.deleteOne({ name: name });
    res.status(200).send({
      msg: "Event Deleted successfully",
    });
  } catch (e) {
    res.send({
      msg: "Error occured while trying to remove event BE",
      error: e,
    });
  }
});

//get all events.
app.get("/admin/dashboard/Event", async (req, res) => {
  try {
    const allEvents = await EventModel.find({});
    res.status(200).send({
      allEvents: allEvents,
    });
  } catch (e) {
    res.status(404).send({
      msg: "Error fetching all Events",
      error: e,
    });
  }
});

//edit event details
//@ts-ignore
app.put("/admin/dashboard/editEvent", async (req, res) => {
  const { id, name, description, date, qrLink, photoLink, registrationLink } =
    req.body;
  const eventToEdit = await EventModel.findOne({ _id: new Types.ObjectId(id) });
  console.log(eventToEdit);
  if (!eventToEdit) {
    res.status(404).send({
      msg: "Event not found",
    });
    return;
  }
  try {
    await EventModel.updateOne(
      { _id: id },
      {
        $set: {
          name: name,
          desc: description,
          qrLink: qrLink,
          photoLink: photoLink,
          registrationLink: registrationLink,
        },
      }
    );
    res.send({
      msg: "Event altered successfully",
    });
  } catch (e) {
    return res.send({
      error: e,
    });
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
