const express = require("express");
const router = express.Router();
const pemasok = require("../controller/pemasok");
// const komponen = require("../controller/komponen");
// const produk = require("../controller/produk");
// const product_komponen = require("../controller/produk_komponen");

router.get("/", (req, res) =>
  res.status(200).json({ message: "welcome to challenge 4" })
);

router.get("/pemasoks", pemasok.index); // get all supplier
router.post("/pemasoks", pemasok.store); // create new supplier
router.get("/pemasoks/:id", pemasok.show); // get detail supplier
router.put("/pemasoks/:id", pemasok.update); // update supplier
router.delete("/pemasoks/:id", pemasok.destroy); // delete supplier

// router.get("/components", component.index); // get all cumponent
// router.post("/components", component.store); // create new cumponent
// router.get("/components/:id", component.show); // get detail cumponent
// router.put("/components/:id", component.update); // update cumponent
// router.delete("/components/:id", component.destroy); // delete cumponent

// router.get("/products", product.index); // get all product
// router.post("/products", product.store); // create new product
// router.get("/products/:id", product.show); // get detail product
// router.put("/products/:id", product.update); // update product
// router.delete("/products/:id", product.destroy); // delete product

// router.get("/product_components", productComponent.index); // get all product_component
// router.post("/product_components", productComponent.store); // create new product_component
// router.get("/product_components/:id", productComponent.show); // get detail product_component
// router.put("/product_components/:id", productComponent.update); // update product_component
// router.delete("/product_components/:id", productComponent.destroy); // delete product_component

module.exports = router;
