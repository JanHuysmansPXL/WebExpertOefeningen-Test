<script>
  export default {
    data() {
      return {
        // Leeg product - value van input met v-model
        product: '',
        // Lege array met producten.
        products: [],
      }
    },
    methods: {
      addProduct() {
        // Value input 'product' toevoegen aan lijst this.products met 'Push' array-methode.
        this.products.push(this.product);
      },
      clearList() {
        // Value product wordt terug een lege array;
        this.products = [];
      }
    }
  }
</script>

<template>

<div id="app">
  <div>
    <label for="product">Product</label>
    <input type="text" id="product" v-model="product"/>
    <!-- Click Event - Add Product met button -->
    <button v-on:click="addProduct">Voeg dit product toe aan de lijst 'products' []</button>
    <button v-on:click="clearList">Leegmaken met []</button>

  </div>
  <ul>
    <!-- Lijst vie FOR LOOP - product in products. -->
    <li v-for="product in products"> {{ product }}</li>
  </ul>
</div>
  
</template>


<style scoped>
input, label {
  margin-bottom: 0.5rem;
  display: block;
  width: 100%;
}

* {
  box-sizing: border-box;
  font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
}

body {
  margin: 0;
}

#app {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

label {
  font-weight: 600;
}

ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  margin: 1.2rem 0;
  padding: 1rem 1.2rem;
  border: 1px solid #ccc;
  color: rgb(50, 50, 50);
  border-radius: 4px;
  font-weight: 400;
}

button {
  padding: .3rem .6rem;
  border: 1px solid grey;
  border-radius: 2px;
}

button:nth-of-type(2) {
  margin: 0 .6rem;
  padding: .3rem .6rem;
  border: none;
  border-radius: 2px;
  background-color: red; 
  color: white;
}
button:nth-of-type(2):hover {
  background-color: rgb(255, 127, 127); 
}
/*# sourceMappingURL=styles.css.map */

</style>
