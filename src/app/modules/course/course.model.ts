import { Schema } from "mongoose";
import { TCourse } from "./course.interface";

const courseSchema = new Schema<TCourse>({
  title: {
    type: String,
    required: true,
  }
})

