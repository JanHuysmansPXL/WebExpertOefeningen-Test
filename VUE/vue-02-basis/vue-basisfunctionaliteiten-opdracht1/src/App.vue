<script>
   
  export default {
    data() {
      return {

        //P1
        title: "Welcome. I am data.",
        intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aliquam nemo soluta voluptates sapiente at.",
        imagePath: './assets/image.png',
        imageText: "this is an image of an AURO product.",
        //P2
        fullName: "Jan Huysmans",
        age: 31,
        vueWebLink: 'https://.vuejs.org',
        randomNumber: 0,
        nameInput: '',
      }
    },
    methods: {
      setRandomNumber() {
        this.randomNumber = Math.random();
        console.log(this.randomNumber);
        if (this.randomNumber < 0.5 ) {
          return "Wij verkopen je de beste producten";
        }
        else {
          return "Wie zoekt die vindt.";
        }
      },
      agePlusFive() {
        return parseInt(this.age) + 5;
      },
      getRandomNumber() {
        let randomNumber = Math.random();
        return randomNumber;
      }
    }
  }

</script>

<template>
  <!-- OPDRACHTEN P1 -->
  <div>
    <h1>{{ title }}</h1>
    <p>{{ intro }}</p>
    <img :src="imagePath" :alt="imageText"> 
    <p>{{ setRandomNumber() }}</p>
  </div>  

  <!-- OPDRACHTEN P2 -->
<h2>{{ fullName }}</h2>
<p>{{ age }}</p>

<p> {{ agePlusFive() }} </p>
<!-- OF -->
<p>{{ age + 5 }}</p>

<h3>Random voor text: {{ randomNumber }}</h3>
<h3>Random via methode getRandomNumber: {{ getRandomNumber() }}</h3>
<a :href="vueWebLink"></a>
<!-- v-bind met value voor standaard invullen. !!-->
<input type="text" :value="fullName">
</template>

<style>

img {
  min-width: 160px;
  max-width: 400px;
  object-fit: cover;
  border-radius: 4px;
}
</style>

<!--
  Opdracht: voorzie in de assets map een afbeelding naar keuze. 
  Voeg vervolgens binnen een img tag toe en zorg ervoor dat je het src attribuut bindt met een variabele 
  die als waarde het pad naar de afbeelding heeft. 
  Spreek dit element aan binnen de style tag van het component 
  en geef het een breedte van 75%.
-->