<template>
    <!-- <div class="task-content">
        <span class="task-label">{{label}}</span>
        <div class="task-description">
          <h3>{{description}}</h3>
        </div>
        <p class="task-priority">Prioriteit: {{priority}}</p>
    </div> -->

    <div class="task-content">
        <span class="task-label">{{task.label}}</span>
        <div class="task-description">
          <h3>{{task.description}}</h3>
        </div>
        <p @click="toggleInput()" class="task-priority">Prioriteit: {{task.priority}}</p>
        <input v-if="showPriority" type="text" v-model="newPriority" v-on:keydown.enter="changePriority()">
    </div>
</template>

<script>
export default {
    // props: [
    //     'label',
    //     'description',
    //     'priority'
    // ]

    data() {
        return {
            newPriority: "",
            showPriority: false
        }
    },
    props: [
        'task',
    ],

    methods: {
        toggleInput() {
            this.showPriority = !this.showPriority;
        },
        changePriority() {
            this.$emit('changePriority', {id: this.task.id, newPriority: this.newPriority});
            this.newPriority = ""
        }
    }
}
</script>
<style>
    
</style>