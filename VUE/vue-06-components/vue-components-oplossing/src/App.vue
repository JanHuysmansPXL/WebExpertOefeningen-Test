<script>
  import TaskComponent from '@/components/TaskComponent.vue'
  export default {
    data() {
      return {
        tasks: [],
        description: "",
        label: "",
        priority: "",
      }
    },

    components: {
      TaskComponent
    },

    methods: {
      addTask() {
        //ingevulde data in object steken
        const newTask = {
          id: this.tasks.length + 1,
          description: this.description,
          label: this.label,
          priority: this.priority
        }

        //object in lijst steken
        this.tasks.push(newTask);

        //velden opnieuw leegmaken
        this.description = "";
        this.label = "";
        this.priority = "";
      },
      changeTaskPriority(object) {
        let task = this.tasks.find(task => task.id = object.id);
        if (task) {
          task.priority = object.newPriority
        }
      }
    }
  }
</script>

<template>
  <div class="container">
    <form v-on:submit.prevent="addTask()">
      <div class="form__field">
        <label>Omschrijving</label>
        <input type="text" v-model="description">
      </div>
      <div class="form__field">  
        <label>Label</label>
        <input type="text" v-model="label">
      </div>
      <div class="form__field">
        <label>Prioriteit</label>
        <input type="text" v-model="priority">
      </div>
        <button type="submit">Voeg taak toe</button>
    </form>
  </div>

  <!-- <div class="container">
    <div class="task-container" v-for="task in tasks" :key="task.description">
      <div class="task-content">
        <span class="task-label">{{task.label}}</span>
        <div class="task-description">
          <h3>{{task.description}}</h3>
        </div>
        <p class="task-priority">Prioriteit: {{task.priority}}</p>
      </div>
    </div>
  </div>  -->

  <!-- <div class="container">
    <div class="task-container">
      <TaskComponent v-for="task in tasks" :key="task.id"
      v-bind:id="task.id"
      v-bind:description="task.description"
      v-bind:label="task.label"
      v-bind:priority="task.priority"
      />
    </div>
  </div>  -->

  <div class="container">
    <div class="task-container">
      <TaskComponent v-for="task in tasks" :key="task.id"
        v-bind:task="task"
        v-on:changePriority="changeTaskPriority"
      />
    </div>
  </div>
</template>

<style>
.task-container {
  width: 50%;
  border: 1px solid #0F0F0F;
  border-radius: 10px;
  position: relative;
}
.task-content {
  margin: 2rem;
}
.task-description {
  margin-top: 4rem;
  font-style: italic;
}
.task-label {
  display: block;
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: .5rem 1rem;
  background-color: #90EE90;
  border: 1px solid #FFF;
  border-radius: 10px;
  color: #FFF;
  font-weight: 600;
}
.task-priority {
  font-weight: 600;
  text-decoration: underline;
}
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
</style>