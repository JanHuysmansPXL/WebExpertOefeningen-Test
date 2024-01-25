<script>
    export default {
        props: {
            product: Object
        }
    }
</script>

<template>
    <div class="card">
        <div class="card-overlay">
            <h1 class="card-overlay-heading">{{ product.title }}</h1>
            <p class="card-overlay-paragraph">Price: €{{ product.price }}</p>
            <button class="card-overlay-button">Order now</button>
        </div>
        <img :src="product.imageLink" :alt="product.imageAlt" class="card-image">
    </div>
</template>