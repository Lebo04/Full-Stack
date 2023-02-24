<template>
    <div>
      <div class="field">
        <label class="label">Product Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Product Name"
            v-model="prodName"
          />
        </div>
      </div>
    
      <div class="field">
        <label class="label">Price</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Price"
            v-model="prodPrice"
          />
        </div>
      </div>
    
      <div class="control">
        <button class="button is-success" @click="saveProduct">SAVE</button>
      </div>
    </div>
  </template>
    
  <script>
  // import axios
  import axios from "axios";
    
  export default {
    name: "AddProduct",
    data() {
      return {
        prodName: "",
        prodPrice: "",
      };
    },
    methods: {
      // Create New product
      async saveProduct() {
        try {
          await axios.post("http://localhost:4000/products", {
            prodName: this.prodName,
            prodPrice: this.prodPrice,
          });
          this.prodName = "";
          this.prodPrice = "";
          this.$router.push("/");
        } catch (err) {
          console.log(err);
        }
      },
    },
  };
  </script>
    
  <style scoped>
  </style>