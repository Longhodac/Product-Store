import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import ProductRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/products", ProductRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server started at http://localhost:${port}`);
});
