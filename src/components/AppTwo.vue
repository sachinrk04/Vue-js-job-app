<script>
export default {
  data() {
    return {
      name: "Sachin Singh",
      status: "pending",
      tasks: ["Task One", "Task Two", "Task Three"],
      link: "https://vuejs.org/guide/introduction.html",
    };
  },

  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <h1>
    {{ name }}
  </h1>
  <div>
    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User is inactive</p>
  </div>
  <div>
    <h1>Tasks:</h1>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
    </ul>
  </div>
  <!-- <a v-bind:href="link" >vuejs</a> -->
  <a :href="link">vuejs</a>
  <div>
    <button @click="toggleStatus">change status</button>
  </div>
</template>

<style>
h1 {
  color: red;
}
</style>
