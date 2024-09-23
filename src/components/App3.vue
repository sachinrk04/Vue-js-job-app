<script setup>
import { ref, onMounted } from "vue";

const name = ref("Sachin Singh");
const status = ref("pending");
const tasks = ref(["Task One", "Task Two", "Task Three"]);

const newTask = ref("");

const toggleStatus = () => {
    if (status.value === "active") {
        status.value = "pending";
    } else if (status.value === "pending") {
        status.value = "inactive";
    } else {
        status.value = "active";
    }
};

const addTask = () => {
    if (newTask.value.trim() !== "") {
        tasks.value.push(newTask.value);
        newTask.value = "";
    }
}

const deleteTask = (index) => {
    tasks.value.splice(index, 1);
}

onMounted(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks.value = data.splice(0, 10).map((task) => task.title);
    } catch (error) {
        console.error("Error fetching tasks");
    }
});
</script>

<template>
    <h1>
        {{ name }}</h1>
    <div>
        <p v-if="status === 'active'">User is active</p>
        <p v-else-if="status === 'pending'">User is pending</p>
        <p v-else>User is inactive</p>
        <div>
            <button @click="toggleStatus">change status</button>
        </div>
    </div>
    <div>
        <form @submit.prevent="addTask">
            <label for="newTask">Add Task</label>
            <input type="text" id="newTask" name="newTask" v-model="newTask" />
            <button type="submit">Add</button>
        </form>
    </div>
    <div>
        <h1>Tasks:</h1>
        <ul>
            <li v-for="(task, index) in tasks" :key="index">
                <span>{{ task }}</span>
                <button @click="deleteTask(index)">x</button>
            </li>
        </ul>
    </div>
</template>

<style>
h1 {
    color: red;
}
</style>