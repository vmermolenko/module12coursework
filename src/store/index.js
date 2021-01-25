import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      tasks : []
    }   

  },
  getters : {
    gettersTasks(state){
      return state.tasks
    },
    gettersActiveTasks(state){
      let countActive = 0
      for (var i=0; i < state.tasks.length; i++) {
        if (state.tasks[i].status == 1) {
          countActive++
        }
      }
      //console.log(countActive)
      return countActive
    },

  },
  mutations: {
    setStorageTasks(state, payload){
      if(!payload){
        return null
      }
      
      const strTasks = localStorage.getItem('tasks');
      let jsonTasks =  [];
      if(strTasks != null){
        jsonTasks = JSON.parse(strTasks)
      }
      jsonTasks.push(payload)
      localStorage.setItem("tasks", JSON.stringify(jsonTasks));
      state.tasks = jsonTasks
    },
    getStorageTasks(state){
      //console.log('getStorageTask')
      const strTasks = localStorage.getItem('tasks');
      let jsonTasks =  [];
      if(strTasks != null){
        jsonTasks = JSON.parse(strTasks)
      }
      state.tasks = jsonTasks
      return jsonTasks;
    },

    updateStorageTasks(state, payload){
      if(!payload){
        return null
      }
      
      const strTasks = localStorage.getItem('tasks');
      let jsonTasks =  [];
      if(strTasks != null){
        jsonTasks = JSON.parse(strTasks)
      }

      for (var i=0; i<jsonTasks.length; i++) {
        if (jsonTasks[i].id == payload.id) {
          jsonTasks[i].title = payload.title;
          jsonTasks[i].date = payload.date;
          jsonTasks[i].description = payload.description;
          jsonTasks[i].status = payload.status;
          break;
        }
      }

      localStorage.setItem("tasks", JSON.stringify(jsonTasks));
      state.tasks = jsonTasks
    },

  },
  actions: {
    save({commit} , payload){
      commit('setStorageTasks', payload)
    },
    load({commit}){
      commit('getStorageTasks')
    },
    update({commit}, payload){
      commit('updateStorageTasks', payload)
    }
  },
  modules: {
  }
})
