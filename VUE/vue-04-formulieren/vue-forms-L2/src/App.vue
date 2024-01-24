<script>
   
  export default {
    data() {
      return {

        //P1
        title: "Forms P4",
        intro: "Forms ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aliquam nemo soluta voluptates sapiente at.",
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

        // P4.1 - Nieuwe variabele Message
        message: '',
        // P4.3 - Form elements met V-MODEL.
        category: "green",
        size: [],
        checked: 'true',

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

          //Methode om de alert te tonen
    partOne(){
      alert("De submit werkt toch al")
    },
    showMessage(event) {
      this.message = event.target.value;
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

  <!-- OPDRACHTEN P4 - FORM -->

    <!-- Formulier met event listener en een event modifier -->
    <form class="form" v-on:submit.prevent="partOne()">
      <div class="form-field">
        <label for="message">Boodschap</label>

        <!-- DEEL 2 event listener op de input om de Boodschap te tonen in de paragraaf eronder -->
        <!-- <input type="text" name="message" id="message" v-on:input="showMessage($event)"> -->

        <!-- DEEL 3 event listener om de Boodschap enkel te tonen wanneer er op de ENTER toets wordt geklikt -->
        <input type="text" name="message" id="message" v-on:keydown.enter="showMessage($event)">

        <p>{{ message }}</p>

      </div>
      <div class="form-submit">
        <button>Verzend</button>
      </div>
    </form>

    <!-- OPDRACHTEN P4 - FORM MET V-MODEL -->
    <form class="form">
      <!-- CATEGORIES v-model -->
      <div>
        <label for="color-category"></label>
        <select v-model="category" name="color" id="color-category">
          <option value="green">groen</option> 
          <option value="red">rood</option>  
          <option value="blue">blauw</option>  
        </select>
      </div>

      <!-- CHECKBOXES v-model -->
      <h3>Kledingmaat</h3>
      <div>
        <label for="S">Small</label>
        <input v-model="size" value="S" type="checkbox" name="size" id="S">
      </div>
      <div>
        <label for="M">Medium</label>
        <input v-model="size" value="M" type="checkbox" name="size" id="M">
      </div>

      <div>
        <label for="L">Large</label>
        <input v-model="size" value="L" type="checkbox" name="size" id="L">
      </div>
      
      <div>
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>
      </div>



    </form>

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
