<script>

import JSConfetti from 'js-confetti'

  export default {
    data() {
      return {
        name: '',
        counter: 0,
        jsConfetti: new JSConfetti(),
        newTask: '',
        tasks: [],
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
      goalReached() {
        if (this.counter == 6) {
          this.jsConfetti.addConfetti();
          return "Doel bereikt"
        }
      },
      addToList() {
        this.tasks.push(this.newTask);
        this.newTask= '';
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      }
    },
    methods: {
      outputFullName() {
        console.log('Methode');
        if (this.name === '') {
          return ''
        }
        return `${this.name} Huysmans`
      },
      
      addOne() {
        this.counter += 1
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
  </div>

  <div class="container">
    <div>
      <!-- Bevat de computed property die reageert op counter ! -->
      <p>{{ goalReached }}</p>
    </div>
  </div>


  <!-- ## OPDRACHT DEEL 2 -->
  <div class="container">
    <div class="result">
      <div class="form__field">
        <label for="newTask">Voeg een nieuwe taak toe</label>
        <input type="text" id="newTask" v-model="newTask">
        <button v-on:click="addToList()">Voeg taak toe</button>
      </div>
      <div v-if="tasks.length <= 0">
        <p>Alle taken werden uitgevoerd</p>
      </div>
      <div v-else>
        <p>Er zijn nieuwe taken beschikbaar</p>
      </div>
    </div>
  </div>

  <!-- Takenlijst met optie op te verwidjeren - Let op KEY belangrijk om dit te doen werken.-->
  <div class="taskbox" v-for="(task, index) in tasks" v-bind:key="task" v-on:click="removeTask(index)">
    <p>{{ index + 1 }}.- {{ task }}</p>
  </div>

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

.taskbox {
  width: 480px;
  margin: 0 auto;
  padding: .8rem;
  background-color: aliceblue;
  border: 1px solid aquamarine;
  border-radius: 4px;
}
</style>
