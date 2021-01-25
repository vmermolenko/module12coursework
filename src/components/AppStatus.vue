<template>
  <span :class="['badge', classWarning ]">{{ textStatus }}</span>
</template>

<script>
import { computed, reactive, toRef } from 'vue'
import { ref } from 'vue'
export default {
  props : ['status'],
  setup(props){

    const statuscomputed = toRef(props, 'status')

    const classWarning = computed(() => {

      //console.log(statuscomputed.value)
      let colorClass = ''
      switch (statuscomputed.value) {
        case 1:
          colorClass = 'primary'
          break;
        case 2:
          colorClass = 'warning'
          break;
        case 3:
          colorClass = 'primary'
          break;
        case 4:
          colorClass = 'danger'
          break;
        default:
          colorClass = ''
          break;
      }

      return colorClass
    })

    const textStatus = computed(() => {

      let txtStatus = ''
      switch (statuscomputed.value) {
        case 1:
          txtStatus = 'Активен'
          break;
        case 2:
          txtStatus = 'Выполняется'
          break;
        case 3:
          txtStatus = 'Завершен'
          break;
        case 4:
          txtStatus = 'Отменен'
          break;
        default:
          txtStatus = 'Ошибка'
          break;
      }

      return txtStatus
    })

    return {
      classWarning,
      textStatus,
      statuscomputed

    }
  }
}
</script>
