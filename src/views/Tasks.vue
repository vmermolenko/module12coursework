<template>
  <div v-if="$store.state.tasks.length === 0">
    <h1 class="text-white center" >Задач пока нет</h1>
  </div>
  <div v-else>
    <h3 class="text-white">Всего активных задач: {{ $store.getters.gettersActiveTasks }}</h3>
  
    <app-task 
      v-for="item in tasks" :key="item.id"
      :itemtask="item"
    >
    </app-task>
  </div>
  
  

</template>

<script>
import { ref, reactive, computed, onMounted} from 'vue'
import { useStore } from 'vuex'
import AppTask from '../components/AppTask'

export default {
  setup(){

    let store = useStore()

    store.dispatch('load')

    const tasks = store.getters.gettersTasks
    
    const activeTasks = store.getters.gettersActiveTasks

    return {
      tasks, activeTasks

    }

  },



  components: {AppTask}
}
</script>