<template>
  <div class="card" v-if="isExist">
    <h2>{{ task.title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :status="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="pending">Взять в работу</button>
      <button class="btn primary" @click="done">Завершить</button>
      <button class="btn danger" @click="cancelled">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script>
import { computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import AppStatus from '../components/AppStatus'

export default {
  setup(){

    const store = useStore()
    const route = useRoute()

    store.dispatch('load')
    const id = route.params.id
    const task = reactive(store.getters.gettersTasks.find(e => e.id == route.params.id))
      
    const isExist = computed(() => {
      return task != null 
    })

    function active(){
      task.status = 1
      //console.log('Активен')
      store.dispatch('update', task)
    }

    function pending(){
      task.status = 2
      //console.log('Выполняется')
      store.dispatch('update', task)
    }

    function done(){
      task.status = 3
      //console.log('Выполнен')
      store.dispatch('update', task)
    }

    function cancelled(){
      task.status = 4
      console.log('Отиенен')
      store.dispatch('update', task)
    }

    return{
      isExist,
      task,
      id,
      active,
      done,
      cancelled,
      pending

    }
  },
  components: {AppStatus}
}
</script>

<style scoped>

</style>