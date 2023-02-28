import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //Tự tạo 2 trường createdAt và updatedAt
  }
);

export default mongoose.model("Products", productsSchema);