<template>
  <form class="card" @submit.prevent="addComponent">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="newtask.title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="newtask.date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="newtask.description"></textarea>
    </div>

    <button class="btn primary" :disabled="isValid">Создать</button>
  </form>
</template>

<script>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup () {

    const router = useRouter()
    const store = useStore()
    
    const newtask = reactive({
      id : '',
      title : '',
      date : '',
      description : '',
      status : 1
    })

    function addComponent(){
      newtask.id = new Date().getTime()
      newtask.status = 1
      let now = new Date()
      let setupnow = new Date(newtask.date)
      //console.log(now)
      //console.log(setupnow)
      if (now > setupnow) {
        newtask.status = 4
      }


      store.dispatch('save', newtask)
      router.push('/Tasks')
    }

    const isValid = computed(() => {
      return newtask.description === '' || newtask.title === '' || newtask.date === ''
    })

    return {
      newtask,
      addComponent,
      isValid
    }
  }
}
</script>
