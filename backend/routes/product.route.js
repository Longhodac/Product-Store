import express from "express";

import {
  createProducts,
  deleteProducts,
  editProducts,
  getProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProducts);

router.put("/:id", editProducts);

router.delete("/:id", deleteProducts);

export default router;
