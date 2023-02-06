import mongoose from "mongoose";

interface stationary {
  name: string;
  genre: string;
  serialNo: string;
  books: {};
  pens: {};
}

interface istation extends stationary, mongoose.Document {}

const stationSchema = new mongoose.Schema(
  {
    name: String,
    genre: String,
    serialNo: String,
    books: Object,
    pens: {},
  },
  { timestamps: true }
);

const myStation = mongoose.model<istation>("Ju_stationary", stationSchema);

export default myStation;
