// import connection
// import db from "../lib/db_connection";
const db = require('../lib/db_connection');
  
// Get All Products
const getProducts = (result) => {
    db.query("SELECT * FROM products", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Product
const getProductById = (id, result) => {
    db.query("SELECT prodID, prodName, prodPrice FROM products WHERE prodID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Product to Database
const insertProduct = (data, result) => {
    db.query("INSERT INTO products SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update Product to Database
const updateProductById = (data, id, result) => {
    db.query("UPDATE products SET prodName = ?, prodPrice = ? WHERE prodID = ?", [data.prodName, data.prodPrice, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Product to Database
const deleteProductById = (id, result) => {
    db.query("DELETE FROM products WHERE prodID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

module.exports = { getProducts, getProductById, insertProduct, updateProductById, deleteProductById }