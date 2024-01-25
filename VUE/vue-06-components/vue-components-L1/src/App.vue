<script>
  //Opdracht 1: Import JsConfetti
  import JsConfetti from 'js-confetti'

  export default {
    data() {
      return {
        name: '',
        counter: 0,

        //Opdracht 1Variabele JsConfetti
        JsConfetti: new JsConfetti(),

        //Opdracht 2: tasks variabele
        tasks: {},
        description:"",
        label: "",
        priority: "",
      }
    },

    computed: {
      outputFullNameComputed() {
        console.log('Computed');
        if (this.name === '') {
          return ''
        }
        return `${this.name} Braibant`
      },
      //Computed Property Opdracht 1
      goalReached() {
        if (this.counter == 6) {
          this.JsConfetti.addConfetti();
          return "Doel bereikt"
        }
      }
    },

    methods: {
      outputFullName() {
        console.log('Methode');
        if (this.name === '') {
          return ''
        }
        return `${this.name} Braibant`
      },
      
      addOne() {
        this.counter += 1
      },

      // Object aanmaken in addTask: Methode om nieuwe taak toe te voegen.
      addTask() {
        const newTask = {
          id: this.tasks.length + 1,
          description: this.description,
          label: this.label,
          priority: this.priority,
        }
        this.tasks.push(newTask);

        // velden terug leegmaken na Push.
        this.description = "";
        this.label = "";
        this.priority = "";
      },

      //  Opdracht 3: Methode om taak te verwijderen.
      removeTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  }
</script>

<template>
  <div class="container">
    <div class="form__field">
      <label for="firstName">Voornaam:</label>
      <input type="text" id="fistName" v-model="name">
    </div>
    <div class="result">
      <h3>Volledige naam met methode</h3>
      <p>{{ outputFullName() }}</p>
    </div>
    <div class="result">
      <h3>Volledige naam met computed property</h3>
      <p>{{ outputFullNameComputed }}</p>
    </div>
    <div class="result">
      <h3>Voornaam</h3>
      <p>{{ name }}</p>
    </div>
    <div class="result">
      <h3>Teller</h3>
      <p>{{ counter }}</p>
      <button @click="addOne()">Tel 1 bij</button>
    </div>

    <!-- Begin HTML element opdracht 1 -->
    <div class="result">
      <p>{{goalReached}}</p>
    </div>
    <!-- Einde HTML element opdracht 1 -->
  </div>

  <!-- Begin HTML opdracht 2 -->
  <div class="container">
    <div class="result">
      <div class="form__field">
        <label for="newTask">Voeg een nieuwe taak toe</label>
        <input type="text" id="newTask" v-model="newTask">
        <label for="newPrio">Voeg een prioriteit toe</label>
        <input type="text" id="newPrio" v-model="newPrio">
        <label for="newLabel">Voeg een nieuwe taak toe</label>
        <input type="text" id="newLabel" v-model="newLabel">

        <button v-on:click="addTask()">Voeg taak toe</button>
      </div>
      <div v-if="tasks.length <= 0">
        <p>Alle taken werden uitgevoerd</p>
      </div>
      <div v-else>
        <p>Er zijn nieuwe taken beschikbaar</p>
      </div>
    </div>
  </div>
  <!-- Einde HTML opdracht 2 -->

  <!-- Begin HTML Opdracht 3 -->
  <div class="container">
    <div class="result">
      <ol>
        <li class="task" v-for="(task, index) in tasks" v-bind:key="task" v-on:click="removeTask(index)">{{ task }}</li>
      </ol>
    </div>
  </div>
  <!-- Einde HTML Opdracht 3 -->
</template>

<style>
.container {
  width: 75%;
  margin: auto;
  padding-bottom: 5rem;
}
.form__field {
  display: flex;
  flex-direction: column;
}

.form__field input {
  width: 25%;
}

.result {
  width: 50%;
  border: 1px solid #0F0F0F;
  border-radius: 5px;
  margin: 2rem auto;
  padding: 1rem;
}

.task {
  font-weight: 600;
  padding: .4rem;
}
</style>
