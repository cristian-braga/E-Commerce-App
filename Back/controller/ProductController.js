const Product = require("../models/ProductModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const createProduct = asyncHandler(async (request, response) => {
  try {
    if (request.body.title) {
      request.body.slug = slugify(request.body.title);
    }

    const newProduct = await Product.create(request.body);

    response.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const updateProduct = asyncHandler(async (request, response) => {
  const id = request.params;

  try {
    if (request.body.title) {
      request.body.slug = slugify(request.body.title);
    }

    const updatedProduct = await Product.findOneAndUpdate(id, request.body, { new: true });

    response.json(updatedProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteProduct = asyncHandler(async (request, response) => {
  const id = request.params;

  try {
    if (request.body.title) {
      request.body.slug = slugify(request.body.title);
    }

    const deletedProduct = await Product.findOneAndDelete(id);

    response.json(deletedProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const getProduct = asyncHandler(async (request, response) => {
  const { id } = request.params;

  try {
    const findProduct = await Product.findById(id);

    response.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllProducts = asyncHandler(async (req, res) => {
  try {
    // Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Product.find(JSON.parse(queryStr));

    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // Limiting the fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) throw new Error("A página não existe");
    }
    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
};