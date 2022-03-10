<template>
  <div>
    <p>메인 페이지 입니다.</p>
    <ProductList>

    </ProductList>
  </div>
</template>

<script>
// import axios from 'axios';
import ProductList from '../components/ProductList.vue';

export default {
  name: 'MainPage',
  components: {
    ProductList
  },
  // async asyncData() {
  //   const response = await axios.get('http://localhost:3000/products');
  //   const products = response.data;
  //   return { products }
  // },
  data() {
    return {
      // products: []
    }
  },
  async created() {
    // const response = await axios.get('http://localhost:3000/products');
    // this.products = response.data;
  }
}
</script>

<style>

</style>