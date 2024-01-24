<script>
   
  export default {
    data() {
      return {

        //P1
        title: "EVENTS P3",
        intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aliquam nemo soluta voluptates sapiente at.",
        imagePath: './assets/image.png',
        imagePath2: './assets/image2.png',
        imageText: "this is an image of an AURO product.",
        //P2
        fullName: "Jan Huysmans",
        age: 31,
        vueWebLink: 'https://.vuejs.org',
        randomNumber: 0,
        nameInput: '',
        //P3.1 - EVENT + METHODES
        counter: 0,
        visibility: "display: none",
        //P3.2
        newImage: '',
        // EVENT OBJECT
        name: '',
        myName: '',
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
        parseInt(this.age) + 5;
      },
      // MATH.RANDOM TO GET NUMBER.
      getRandomNumber() {
        let randomNumber = Math.random();
        return randomNumber;
      },
      // INCREMENT AGE
      agePlusOne() {
        this.age++;
      },
      // EVENTS - VISIBILITY
      showButton() {
        this.visibility = "";
      },
      hideButton() {
        this.visibility = "display: none";
      },
      // COUNTERS
      AddNumber(number) {
        this.counter += number;
      },
      SubtractNumber(number) {
        this.counter -= number;
      },
      // CHANGE IMAGE PATH WITH A PARAMETER.
      changeImage(event, path) {
        this.imagePath = path;
        // inhoud tekst html aanpassen met .textContent
        event.target.textContent= "Afbeelding gewijzigd"
        event.target.style= "color: green"
      },
      // STANDARD EVENT OBJECT (event.target.value) --> Target the event (like input) and get the value;
      setName(event) {
        this.name = event.target.value; 
      },
      // STANDARD EVENT met 2 parameters -> $event + tempalte literals.
      setMyName(event, lastName) {
        this.myName = `${event.target.value} ${lastName}`;
        // Template literals voor output als string.
      },

    }
  }
</script>

<template>
  <!-- OPDRACHTEN P1 - BASISFUNCTIES-->
  <div>
    <h1>{{ title }}</h1>
    <p>{{ intro }}</p>
    <p>{{ setRandomNumber() }}</p>
  </div> 

  <!-- OPDRACHTEN P2 - BASISFUNCTIES -->
  <div>
    <h2 @click="agePlusOne()">{{ fullName }}</h2>
    <p>{{ age }}</p>

    <p> {{ agePlusFive() }} </p>
    <p>{{ age + 5 }}</p>

    <h3>Random voor text: {{ randomNumber }}</h3>
    <h3>Random via methode getRandomNumber: {{ getRandomNumber() }}</h3>
    <a :href="vueWebLink"></a>
    <input type="text" :value="fullName">
  </div>

    <!-- OPDRACHTEN P3 - EVENTS -->
  <br>
  <div>
    <h2 @click="agePlusOne()">{{ fullName }}</h2>
    <br>
    <!-- Beide notaties event listener V-ON.-->
    <button v-on:click="counter++">Add One</button>
    <button @click="counter--">Minus One</button>
    <p>Counter: {{ counter }}</p>
    <img :src="imagePath" :alt="imageText" v-on:click="showButton()"> 
    <br>
    <button v-bind:style="visibility" v-on:click="hideButton()">Hide</button>
    <button v-on:click="changeImage($event, imagePath2)">Change Image</button>
  </div>

  <!-- OPDRACHTEN P3 - STANDARD EVENT OBJECT-->
  <br>
  <div>
    <input type="text" v-on:input="setName">
    <p>Jouw naam: {{ name }}</p>

    <p>MET 2 PARAMETERS</p>
    <input type="text" v-on:input="setMyName($event, 'Huysmans')">
    <p>Jouw naam {{ myName }}</p>
  </div>

</template>

<style>

* {
  box-sizing: border-box;
  font-family: 'lato', Arial, Helvetica, sans-serif;
}

body {
  padding: 2rem 4rem;
}

img {
  min-width: 160px;
  max-width: 400px;
  object-fit: cover;
  border-radius: 4px;
}
</style>
