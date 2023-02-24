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
        <button class="button is-success" @click="updateProduct">UPDATE</button>
      </div>
    </div>
  </template>
    
  <script>
  // import axios
  import axios from "axios";
    
  export default {
    name: "EditProduct",
    data() {
      return {
        prodName: "",
        prodPrice: "",
      };
    },
    created: function () {
      this.getProductById();
    },
    methods: {
      // Get Product By Id
      async getProductById() {
        try {
          const response = await axios.get(
            `http://localhost:4000/products/${this.$route.params.id}`
          );
          this.prodName = response.data.prodName;
          this.prodPrice = response.data.prodPrice;
        } catch (err) {
          console.log(err);
        }
      },
    
      // Update product
      async updateProduct() {
        try {
          await axios.put(
            `http://localhost:5000/products/${this.$route.params.id}`,
            {
              prodName: this.prodName,
              prodPrice: this.prodPrice,
            }
          );
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