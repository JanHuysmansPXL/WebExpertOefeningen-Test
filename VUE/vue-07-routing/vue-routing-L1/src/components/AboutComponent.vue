<script>
    import StarsComponent from '@/components/snippets/StarsComponent.vue'

    export default {
        data() {
            return {
                aboutImage: {
                    "path": "src/assets/images/team.jpg",
                    "alt" : "Picture of our team"
                },
                mainHeading: "Our team",
                subHeading: "Only for the best sneaker experience",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta alias voluptas error quam commodi minima adipisci est. Ipsa exercitationem assumenda repellendus nemo debitis dolorum sunt at alias et, nulla iste beatae rerum similique architecto explicabo ullam a quaerat commodi! Vitae odit architecto commodi natus tempora consequuntur repudiandae temporibus laudantium placeat.",
                buttonText: "Read more"
            }
        },
        components: {
            StarsComponent
        }
    }
</script>

<template>
    <section class="about">
        <div class="about-left">
            <img v-bind:src="aboutImage.path" v-bind:alt="aboutImage.alt">
        </div>
        <div class="about-right">
            <h1 class="main-heading">{{ mainHeading }}</h1>
            <h3 class="sub-heading">{{ subHeading }}</h3>
            <StarsComponent/>
            <p class="description">{{ description }}</p>
            <StarsComponent/>
            <button class="main-button" type="button">{{ buttonText }}</button>
        </div>
    </section>
</template>