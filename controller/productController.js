import { query } from "express";
import Product from "../Models/Product.js";

const createProduct = async (req, res) => {
  const { title, price, rating, category, description, discount, saveIt } =
    req.body;
  let file = req.file;
  console.log("createProduct ");
  console.log(req.body);

  if (
    !file ||
    !title ||
    !price ||
    !rating ||
    !category ||
    !description ||
    !discount ||
    !saveIt
  ) {
    //console.log( title, price, rating, category, description, discount, saveIt)
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  let image = {
    fileName: file.filename,
    fileType: file.mimetype,
    fileContent: file.buffer.toString("base64"),
  };

  try {
    const savedQuery = {
      $addToSet: {
        [saveIt]: {
          image,
          title,
          price,
          rating,
          category,
          description,
          discount,
        },
      },
    };

    let savedProduct = {};

    if (saveIt === "Topselling") {
      savedProduct = await Product.findOneAndUpdate(
        { Topselling: { $exists: true } },
        savedQuery,
        { new: true, upsert: true }
      );
      if (!savedProduct) {
        return res.status(400).json("Something went wrong ");
      }
    } else if (saveIt === "newArrivals") {
      savedProduct = await Product.findOneAndUpdate(
        { newArrivals: { $exists: true } },
        savedQuery,
        { new: true, upsert: true }
      );
      if (!savedProduct) {
        return res.status(400).json("Something went wrong ");
      }
    }

    res
      .status(201)
      .json({ message: "Details saved successfully ", savedProduct });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProducts = async (req, res) => {
  const queryFor = req.query.queryFor;

  if (!queryFor) {
    return res
      .status(404)
      .json({ success: false, message: "queryFor field not provide." });
  }

  if (queryFor != "Topselling" && queryFor != "newArrivals") {
    return res
      .status(400)
      .json({ message: "queryFor must be Topselling or newArrivals" });
  }

  try {
    let products = [];
    if (queryFor === "Topselling") {
      products = await Product.find({}, { Topselling: 1, _id: 0 }).lean();
    } else products = await Product.find({}, { newArrivals: 1, _id: 0 });

    return res.status(200).json({ products: products[0][queryFor] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const fetchProductDetail = async (request, response) => {
  const { orderId } = request.body;
  console.log(request);

  try {
    const productDetails = await Product.find({ _id: orderId });
    response.status(201).json(productDetails);
  } catch (error) {
    console.log(error);
    response
      .status(400)
      .json({ message: "Could not place order, try after some time" });
  }
};

const fetchAllProducts = async (request, response) => {
  const {} = request.body;

  try {
    const productDetails = await Product.find({});
    response.status(201).json(productDetails);
  } catch (error) {
    console.log(error);
    response
      .status(400)
      .json({ message: "Could not place order, try after some time" });
  }
};

export { createProduct, getProducts, fetchProductDetail, fetchAllProducts };
