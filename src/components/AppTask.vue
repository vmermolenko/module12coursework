<template>
  <div class="card">
    <h2 class="card-title">
      {{ task.title }}
      <AppStatus :status="task.status" />
    </h2>
    <p>
      <strong>
        <small>
          {{ task.date }}
        </small>
      </strong>
    </p>
    <router-link :to="{ name: 'Task', params: { id: task.id }}">
      <button class="btn primary">Посмотреть</button>
    </router-link>
  </div>
</template>


<script>
import { reactive } from 'vue'
import AppStatus from './AppStatus'
  export default {
    props:['itemtask'],
    setup(props){

      return {
        task : props.itemtask
      }
    },
    components: {AppStatus}
  }

</script>
