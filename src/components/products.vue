<template>
  <div class="container">
    <div v-for="product in products" :key="product.id">
      <div class="box"><router-link class="btn" :to="{name : 'ProductDetailPage' , params : {product_id :product.id }}">See More ...</router-link></div>
      <div class="detail">
        <h3>{{ product.name }}</h3>
        <p> Price : {{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsPage",
  data() {
    return {
      products: [
        { id: 0, name: "LapTop", price: "2000$" },
        { id: 1, name: "Camera", price: "1500$" },
        { id: 2, name: "Mobile", price: "990$" },
        { id: 4, name: "Bed", price: "1000$" },
        { id: 5, name: "Shoes", price: "250$" },
        { id: 6, name: "Shirt", price: "300$" },
        { id: 7, name: "Mercedes", price: "100000$" },
        { id: 8, name: "XBOX X", price: "999$" },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 111, 111);
  color: white;
  width: 300px;
  height: 300px;
  margin: 20px;
  padding: 10px;
}
.detail{
  padding-left : 10px;
  margin-left : 10px;
  color : #fff;
}
.btn{
  color : #fff;
  background-color : rgb(255, 111, 111);
  border: 2px solid #fff;
  padding : 10px;
  text-decoration: none;
}
.btn:hover {
  background-color : #fff;
  color : rgb(255, 111, 111);
}
</style>